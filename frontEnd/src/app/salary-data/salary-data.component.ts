import { Component, OnInit } from '@angular/core';
import {Salary} from "../salary/salary.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {SalarySearchRequest} from "../salary-search/salarySearchRequest.model";
import {EDUCATIONS} from "../educationAttainedList";
import {FOREIGNLANGUAGES} from "../foreignLanguagesList";
import {WORKEXPERIENCES} from "../workExperienceList";
import {WORKPOSITIONS} from "../workPositionList";
import {AGES} from "../ageList";
import {PLACEOFWORKS} from "../placeOfWorkList";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-salary-data',
  templateUrl: './salary-data.component.html',
  styleUrls: ['./salary-data.component.css']
})
export class SalaryDataComponent implements OnInit {

  salaries: Salary[];
  searchedSalaryForms: Salary[];

  educations = EDUCATIONS;
  foreignLanguages = FOREIGNLANGUAGES;
  workExperiences = WORKEXPERIENCES;
  workPositions = WORKPOSITIONS;
  placeOfWorks = PLACEOFWORKS;
  ages = AGES;

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.http.get<boolean>("http://localhost:8080/loggedin").subscribe(data => this.loggedInCheck(data));
  }

  loggedInCheck(data: boolean){
    if(data == false) {
      this.router.navigateByUrl('/login');
    }
  }

  getSalaries() {
    this.http.get<Salary[]>("http://localhost:8080/salary/list").subscribe(data => this.salaries = data);
  }

  //searchRequest methods
  sendSearchRequest(form: NgForm) {
    let salarySearchForm: SalarySearchRequest = {
      gender:form.controls['gender'].value,
      age:form.controls['age'].value,
      foreignLanguages:form.controls['foreignLanguages'].value,
      position:form.controls['position'].value,
      experience:form.controls['experience'].value,
      placeOfWork:form.controls['placeOfWork'].value,
      educationAttained:form.controls['educationAttained'].value
    };

    if(!this.validateSearchForm(salarySearchForm)) {
      this.http.post<Salary[]>('http://localhost:8080/salary/searchandlist',salarySearchForm,httpOptions).subscribe(data => this.searchedSalaryForms = data);
    }

  }

  validateSearchForm(salarySearchForm: SalarySearchRequest) : boolean {
    let error: boolean = false;

    if(salarySearchForm.gender == '' ||
      salarySearchForm.age == '' ||
      salarySearchForm.foreignLanguages == '' ||
      salarySearchForm.position == '' ||
      salarySearchForm.experience == '' ||
      salarySearchForm.placeOfWork == '' ||
      salarySearchForm.educationAttained == ''
    ) {
      error = true;
    }
    return error;
  }

  clearForm(form: NgForm) {
    form.resetForm();
  }

  deleteSalary(form: NgForm) {
    let salaryDeleteForm: SalarySearchRequest = {
      gender:form.controls['gender'].value,
      age:form.controls['age'].value,
      foreignLanguages:form.controls['foreignLanguages'].value,
      position:form.controls['position'].value,
      experience:form.controls['experience'].value,
      placeOfWork:form.controls['placeOfWork'].value,
      educationAttained:form.controls['educationAttained'].value
    };

    if(!this.validateSearchForm(salaryDeleteForm)) {
      this.http.post('http://localhost:8080/salary/delete',salaryDeleteForm,httpOptions).subscribe();
    }
  }

  logOut() {
    this.http.get('http://localhost:8080/logout',httpOptions).subscribe();
    this.router.navigateByUrl('/login');
  }

  navigateToSalaryData() {
    this.router.navigateByUrl("/salarydata")
  }

  navigateToClientData() {
    this.router.navigateByUrl("/clientdata")
  }

  navigateToUserData() {
    this.router.navigateByUrl("/user")
  }

  navigateToDeletedData() {
    this.router.navigateByUrl("/deleteddata")
  }

  navigateToVerifyingCodeData() {
    this.router.navigateByUrl("/codedata")
  }

}
