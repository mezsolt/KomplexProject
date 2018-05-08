import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Salary';

  constructor(private router: Router) {

  }

  navigateToSearchForm() {
    this.router.navigateByUrl('/salary/search');
  }

  navigateToCodeVerification() {
    this.router.navigateByUrl('/salary/verification');
  }

  navigateToSalaryForm() {
    this.router.navigateByUrl('/salary');
  }
}
