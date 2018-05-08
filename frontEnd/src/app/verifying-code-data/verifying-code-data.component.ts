import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {SalaryVerifyingCode} from "../salary-code-verification/salaryVerifyingCode.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-verifying-code-data',
  templateUrl: './verifying-code-data.component.html',
  styleUrls: ['./verifying-code-data.component.css']
})
export class VerifyingCodeDataComponent implements OnInit {

  codes: SalaryVerifyingCode[];

  constructor(private http : HttpClient,private router: Router) { }

  ngOnInit() {
    this.http.get<boolean>("http://localhost:8080/loggedin").subscribe(data => this.loggedInCheck(data));
  }

  loggedInCheck(data: boolean){
    if(data == false) {
      this.router.navigateByUrl('/login');
    }
  }

  getCodes() {
    this.http.get<SalaryVerifyingCode[]>("http://localhost:8080/code/list").subscribe(data => this.codes = data);
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
