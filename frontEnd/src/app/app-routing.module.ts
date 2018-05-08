import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {SalaryComponent} from "./salary/salary.component";
import {SalarySearchComponent} from "./salary-search/salary-search.component";
import {SalaryCodeVerificationComponent} from "./salary-code-verification/salary-code-verification.component";
import {SalaryDataComponent} from "./salary-data/salary-data.component";
import {VerifyingCodeDataComponent} from "./verifying-code-data/verifying-code-data.component";
import {ClientComponent} from "./client/client.component";
import {DeletedDataComponent} from "./deleted-data/deleted-data.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  { path: '', redirectTo: '/salary', pathMatch: 'full' },
  { path: 'login', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent },
  { path: 'salary', redirectTo: '/salary', pathMatch: 'full' },
  {path:'salary',component: SalaryComponent},
  { path: 'salary/search', redirectTo: '/salary/search', pathMatch: 'full' },
  {path:'salary/search',component: SalarySearchComponent},
  { path: 'salary/verification', redirectTo: '/salary/verification', pathMatch: 'full' },
  {path:'salary/verification',component: SalaryCodeVerificationComponent},
  { path: 'salarydata', redirectTo: '/salarydata', pathMatch: 'full' },
  {path:'salarydata',component: SalaryDataComponent},
  { path: 'codedata', redirectTo: '/codedata', pathMatch: 'full' },
  {path:'codedata',component: VerifyingCodeDataComponent},
  { path: 'clientdata', redirectTo: '/clientdata', pathMatch: 'full' },
  {path:'clientdata',component: ClientComponent},
  { path: 'deleteddata', redirectTo: '/deleteddata', pathMatch: 'full' },
  {path:'deleteddata',component: DeletedDataComponent},
  { path: 'user', redirectTo: '/user', pathMatch: 'full' },
  {path:'user',component: UserComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
