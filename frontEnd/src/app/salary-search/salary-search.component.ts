import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {SalarySearchRequest} from "./salarySearchRequest.model";
import {EDUCATIONS} from "../educationAttainedList";
import {FOREIGNLANGUAGES} from "../foreignLanguagesList";
import {WORKEXPERIENCES} from "../workExperienceList";
import {WORKPOSITIONS} from "../workPositionList";
import {PLACEOFWORKS} from '../placeOfWorkList';
import {AGES} from "../ageList";
import {Router} from "@angular/router";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-salary-search',
  templateUrl: './salary-search.component.html',
  styleUrls: ['./salary-search.component.css']
})
export class SalarySearchComponent implements OnInit {

  educations = EDUCATIONS;
  foreignLanguages = FOREIGNLANGUAGES;
  workExperiences = WORKEXPERIENCES;
  workPositions = WORKPOSITIONS;
  placeOfWorks = PLACEOFWORKS;
  ages = AGES;

  averageSalary: number = 0;

  warningFillEverythingSearchForm: boolean = false;

  constructor(private http : HttpClient,private router: Router) { }

  ngOnInit() {
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
      this.http.post<number>('http://localhost:8080/salary/average',salarySearchForm,httpOptions).subscribe(data => this.averageSalary = data);
      this.warningFillEverythingSearchForm = false;
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
      this.warningFillEverythingSearchForm = true;
      error = true;
    }
    return error;
  }

  clearSearchForm(form: NgForm) {
    form.resetForm();
    this.averageSalary = 0;
    this.warningFillEverythingSearchForm = false;
  }

  navigateToCodeVerification() {
    this.router.navigateByUrl('/salary/verification');
  }

  navigateToSalaryForm() {
    this.router.navigateByUrl('/salary');
  }

}
