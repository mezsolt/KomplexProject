import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { SalaryComponent } from './salary/salary.component';
import { SalarySearchComponent } from './salary-search/salary-search.component';
import { SalaryCodeVerificationComponent } from './salary-code-verification/salary-code-verification.component';
import { ClientComponent } from './client/client.component';
import { SalaryDataComponent } from './salary-data/salary-data.component';
import { VerifyingCodeDataComponent } from './verifying-code-data/verifying-code-data.component';
import { DeletedDataComponent } from './deleted-data/deleted-data.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SalaryComponent,
    SalarySearchComponent,
    SalaryCodeVerificationComponent,
    ClientComponent,
    SalaryDataComponent,
    VerifyingCodeDataComponent,
    DeletedDataComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

