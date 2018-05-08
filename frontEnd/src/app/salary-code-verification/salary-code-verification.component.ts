import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-salary-code-verification',
  templateUrl: './salary-code-verification.component.html',
  styleUrls: ['./salary-code-verification.component.css']
})
export class SalaryCodeVerificationComponent implements OnInit {

  verifyingCodeExistMessage: string = "";
  codeNotTypedIn: boolean = false;

  constructor(private http : HttpClient,private router: Router) { }

  ngOnInit() {
  }

  //checking if given verifyingCode exist
  checkVerifyingCode(form: NgForm) {
    if(!(form.controls['verifyingCode'].value == '')) {
      this.http.post<boolean>('http://localhost:8080/code/search',form.controls['verifyingCode'].value,httpOptions).subscribe(
        data => this.changeVerifyingCodeChecker(data));
      this.codeNotTypedIn = false;
    } else {
      this.codeNotTypedIn = true;
    }

  }

  changeVerifyingCodeChecker(data: boolean) {
    if(data == true) {
      this.verifyingCodeExistMessage = "Ön részt vett a felmérésben."
    } else if(data == false){
      this.verifyingCodeExistMessage = "A megadott kód helytelen."
    }
  }

  clearVerifyingCodeForm(form: NgForm) {
    form.resetForm();
    this.verifyingCodeExistMessage = '';
    this.codeNotTypedIn = false;
  }

  navigateToSearchForm() {
    this.router.navigateByUrl('/salary/search');
  }

  navigateToSalaryForm() {
    this.router.navigateByUrl('/salary');
  }

}
