import { Component, OnInit } from '@angular/core';
import {Salary} from "./salary.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { NgForm} from "@angular/forms";
import {EDUCATIONS} from "../educationAttainedList";
import {FOREIGNLANGUAGES} from "../foreignLanguagesList";
import {WORKEXPERIENCES} from "../workExperienceList";
import {WORKPOSITIONS} from "../workPositionList";
import {PLACEOFWORKS} from "../placeOfWorkList";
import {SalaryVerifyingCode} from "../salary-code-verification/salaryVerifyingCode.model";
import {Cookie} from "ng2-cookies/ng2-cookies";
import {AGES} from "../ageList";
import {Router} from "@angular/router";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})

export class SalaryComponent implements OnInit {

  title: string = 'Salary Form97';

  ipBlocked: boolean = false;

  warningFillEverything: boolean = false;
  warningWrongSalary: boolean = false;

  verifyingCode: string = "";

  userWantVerifyingCode: boolean = false;

  educations = EDUCATIONS;
  foreignLanguages = FOREIGNLANGUAGES;
  workExperiences = WORKEXPERIENCES;
  workPositions = WORKPOSITIONS;
  placeOfWorks = PLACEOFWORKS;
  ages = AGES;

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
  }

  //sending new salaryForm
  sendSalary(form: NgForm) {
    let salaryForm: Salary = {
      gender:form.controls['gender'].value,
      age:form.controls['age'].value,
      foreignLanguages:form.controls['foreignLanguages'].value,
      position:form.controls['position'].value,
      experience:form.controls['experience'].value,
      placeOfWork:form.controls['placeOfWork'].value,
      educationAttained:form.controls['educationAttained'].value,
      salary:form.controls['salary'].value
    };

    if(Cookie.get("voteCookie") == null) {
      if(!this.validateForm(salaryForm,form.controls['wantVerifyFormCode'].value)) {
        if(form.controls['wantVerifyFormCode'].value == "Igen") {

          this.verifyingCode = "SF2018" + Math.floor(Math.random() * 10000000);
          this.userWantVerifyingCode = true;

          let salaryCode: SalaryVerifyingCode = {
            verifyingCode : this.verifyingCode
          };

          this.http.post<Salary>('http://localhost:8080/salary/add?code='+salaryCode.verifyingCode,salaryForm,httpOptions).subscribe();
          this.warningFillEverything = false;
          this.warningWrongSalary = false;
          this.ipBlocked = false;
          Cookie.set("voteCookie", 'Kuldes tiltva.', 0.00138889,"/");
        } else if(form.controls['wantVerifyFormCode'].value == "Nem") {
          this.http.post<Salary>('http://localhost:8080/salary/add?code=null',salaryForm,httpOptions).subscribe();
          this.warningFillEverything = false;
          this.warningWrongSalary = false;
          this.ipBlocked = false;
          this.verifyingCode = '';
          Cookie.set("voteCookie", 'Kuldes tiltva.', 0.00138889,"/");
        }
      }
      } else {
      this.ipBlocked = true;
    }
  }

  validateForm(salaryForm: Salary,wantVerifyFormCode: string) : boolean {
    let error : boolean = false;

    if(salaryForm.gender == '' ||
      salaryForm.age == '' ||
      salaryForm.foreignLanguages == '' ||
      salaryForm.position == '' ||
      salaryForm.experience == '' ||
      salaryForm.placeOfWork == '' ||
      salaryForm.educationAttained == '' ||
      salaryForm.salary == null ||
      wantVerifyFormCode == ''
    ) {
      this.warningFillEverything = true;
      error = true;
    }

    if(salaryForm.salary != null && salaryForm.salary < 100000) {
      this.warningWrongSalary = true;
      error = true;
    }

    if(salaryForm.salary != null && salaryForm.salary > 1000000) {
      this.warningWrongSalary = true;
      error = true;
    }

    return error;
  }

  clearForm(form: NgForm) {
    form.resetForm();
    this.userWantVerifyingCode = false;
    this.warningFillEverything = false;
    this.warningWrongSalary = false;
  }

  navigateToSearchForm() {
    this.router.navigateByUrl('/salary/search');
  }

  navigateToCodeVerification() {
    this.router.navigateByUrl('/salary/verification');
  }

}
