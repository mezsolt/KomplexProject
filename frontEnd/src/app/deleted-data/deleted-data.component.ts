import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {DeletedData} from "./deleted-data.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-deleted-data',
  templateUrl: './deleted-data.component.html',
  styleUrls: ['./deleted-data.component.css']
})
export class DeletedDataComponent implements OnInit {

  deletedDatas : DeletedData[];

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.http.get<boolean>("http://localhost:8080/loggedin").subscribe(data => this.loggedInCheck(data));
  }

  loggedInCheck(data: boolean){
    if(data == false) {
      this.router.navigateByUrl('/login');
    }
  }

  getDeletedDatas() {
    this.http.get<DeletedData[]>('http://localhost:8080/deleteddata/list',httpOptions).subscribe(data => this.deletedDatas = data);
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
