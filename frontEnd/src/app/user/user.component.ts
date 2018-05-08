import { Component, OnInit } from '@angular/core';
import {User} from "./user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users : User[];

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.http.get<boolean>("http://localhost:8080/loggedin").subscribe(data => this.loggedInCheck(data));
  }

  loggedInCheck(data: boolean){
    if(data == false) {
      this.router.navigateByUrl('/login');
    }
  }

  getUsers() {
    this.http.get<User[]>('http://localhost:8080/user/list',httpOptions).subscribe(data => this.users = data);
  }

  addUser(form: NgForm) {
    if(!(form.controls['username'].value == '' || form.controls['password'].value == '')) {
      let user: User = {
        username: form.controls['username'].value,
        password: form.controls['password'].value,
        roles: [''],
      }
      this.http.post<User>('http://localhost:8080/user/add',user,httpOptions).subscribe();
    }

  }

  changePassword(form: NgForm) {
    if(!(form.controls['username'].value == '' || form.controls['password'].value == '' || form.controls['newPassword'].value == '')) {
      let user: User = {
        username: form.controls['username'].value,
        password: form.controls['password'].value,
        roles: [''],
      }
      this.http.post('http://localhost:8080/user/changepw?newPassword='+form.controls['newPassword'].value,user,httpOptions).subscribe();
    }
  }

  deleteUser(form: NgForm) {
    if(!(form.controls['username'].value == '')) {
      this.http.delete('http://localhost:8080/user/delete?username='+form.controls['username'].value,httpOptions).subscribe();
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
