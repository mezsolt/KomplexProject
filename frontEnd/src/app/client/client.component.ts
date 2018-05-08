import { Component, OnInit } from '@angular/core';
import {Client} from "./client.model";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NgForm} from "@angular/forms";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[];

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.http.get<boolean>("http://localhost:8080/loggedin").subscribe(data => this.loggedInCheck(data));
  }

  loggedInCheck(data: boolean){
    if(data == false) {
      this.router.navigateByUrl('/login');
    }
  }

  getClients() {
    this.http.get<Client[]>("http://localhost:8080/client/list").subscribe(data => this.clients = data);
  }

  deleteClient(form: NgForm) {
    let client: Client = {
      ip :form.controls['ip'].value,
      sendDate : form.controls['date'].value
    };

    this.http.delete('http://localhost:8080/client/delete?ip='+client.ip+"&date="+client.sendDate,httpOptions).subscribe();
  }

  clearForm(form: NgForm) {
    form.resetForm();
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
