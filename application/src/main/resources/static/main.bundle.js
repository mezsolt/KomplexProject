webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/ageList.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AGES = [
    '18-25',
    '26-30',
    '31-35',
    '36-40',
    '41-45',
    '46-50',
    '51-'
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var salary_component_1 = __webpack_require__("./src/app/salary/salary.component.ts");
var salary_search_component_1 = __webpack_require__("./src/app/salary-search/salary-search.component.ts");
var salary_code_verification_component_1 = __webpack_require__("./src/app/salary-code-verification/salary-code-verification.component.ts");
var salary_data_component_1 = __webpack_require__("./src/app/salary-data/salary-data.component.ts");
var verifying_code_data_component_1 = __webpack_require__("./src/app/verifying-code-data/verifying-code-data.component.ts");
var client_component_1 = __webpack_require__("./src/app/client/client.component.ts");
var deleted_data_component_1 = __webpack_require__("./src/app/deleted-data/deleted-data.component.ts");
var user_component_1 = __webpack_require__("./src/app/user/user.component.ts");
var routes = [
    { path: '', redirectTo: '/salary', pathMatch: 'full' },
    { path: 'login', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'salary', redirectTo: '/salary', pathMatch: 'full' },
    { path: 'salary', component: salary_component_1.SalaryComponent },
    { path: 'salary/search', redirectTo: '/salary/search', pathMatch: 'full' },
    { path: 'salary/search', component: salary_search_component_1.SalarySearchComponent },
    { path: 'salary/verification', redirectTo: '/salary/verification', pathMatch: 'full' },
    { path: 'salary/verification', component: salary_code_verification_component_1.SalaryCodeVerificationComponent },
    { path: 'salarydata', redirectTo: '/salarydata', pathMatch: 'full' },
    { path: 'salarydata', component: salary_data_component_1.SalaryDataComponent },
    { path: 'codedata', redirectTo: '/codedata', pathMatch: 'full' },
    { path: 'codedata', component: verifying_code_data_component_1.VerifyingCodeDataComponent },
    { path: 'clientdata', redirectTo: '/clientdata', pathMatch: 'full' },
    { path: 'clientdata', component: client_component_1.ClientComponent },
    { path: 'deleteddata', redirectTo: '/deleteddata', pathMatch: 'full' },
    { path: 'deleteddata', component: deleted_data_component_1.DeletedDataComponent },
    { path: 'user', redirectTo: '/user', pathMatch: 'full' },
    { path: 'user', component: user_component_1.UserComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "#container {\r\n  text-align: center;\r\n  background-color: lightgray;\r\n}\r\n\r\nbutton {\r\n  background-color: #008CBA;\r\n  border: none;\r\n  color: white;\r\n  padding: 10px 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <h1>\r\n    Üdvözöljük az átlagfizetés számító honlapon\r\n  </h1>\r\n  <br>\r\n  <br>\r\n<button (click)=\"navigateToSalaryForm()\">Fizetés megadása</button>\r\n<button (click)=\"navigateToSearchForm()\">Átlagkeresetek lekérése</button>\r\n<button (click)=\"navigateToCodeVerification()\">Ellenőrző kód vizsgálata</button>\r\n</div>\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Salary';
    }
    AppComponent.prototype.navigateToSearchForm = function () {
        this.router.navigateByUrl('/salary/search');
    };
    AppComponent.prototype.navigateToCodeVerification = function () {
        this.router.navigateByUrl('/salary/verification');
    };
    AppComponent.prototype.navigateToSalaryForm = function () {
        this.router.navigateByUrl('/salary');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var salary_component_1 = __webpack_require__("./src/app/salary/salary.component.ts");
var salary_search_component_1 = __webpack_require__("./src/app/salary-search/salary-search.component.ts");
var salary_code_verification_component_1 = __webpack_require__("./src/app/salary-code-verification/salary-code-verification.component.ts");
var client_component_1 = __webpack_require__("./src/app/client/client.component.ts");
var salary_data_component_1 = __webpack_require__("./src/app/salary-data/salary-data.component.ts");
var verifying_code_data_component_1 = __webpack_require__("./src/app/verifying-code-data/verifying-code-data.component.ts");
var deleted_data_component_1 = __webpack_require__("./src/app/deleted-data/deleted-data.component.ts");
var user_component_1 = __webpack_require__("./src/app/user/user.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                salary_component_1.SalaryComponent,
                salary_search_component_1.SalarySearchComponent,
                salary_code_verification_component_1.SalaryCodeVerificationComponent,
                client_component_1.ClientComponent,
                salary_data_component_1.SalaryDataComponent,
                verifying_code_data_component_1.VerifyingCodeDataComponent,
                deleted_data_component_1.DeletedDataComponent,
                user_component_1.UserComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/client/client.component.css":
/***/ (function(module, exports) {

module.exports = "#container {\r\n  text-align: center;\r\n  background-color: lightgray;\r\n}\r\n\r\nbutton {\r\n  background-color: #008CBA;\r\n  border: none;\r\n  color: white;\r\n  padding: 10px 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/client/client.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <br>\r\n  <button (click)=\"logOut()\">Logout</button>\r\n  <button (click)=\"navigateToSalaryData()\">Fizetés</button>\r\n  <button (click)=\"navigateToClientData()\">Kliens</button>\r\n  <button (click)=\"navigateToUserData()\">Felhasználó</button>\r\n  <button (click)=\"navigateToDeletedData()\">Törölt adat</button>\r\n  <button (click)=\"navigateToVerifyingCodeData()\">Ellenőrző kód</button>\r\n  <br>\r\n<br>\r\n<p>Kliensek törlése:</p>\r\n<form #clientDeleteForm=\"ngForm\" (ngSubmit)=\"deleteClient(clientDeleteForm)\">\r\n  <div>\r\n    <label>IP:</label>\r\n    <input type=\"text\" name=\"ip\" ngModel>\r\n    <label>Dátum:</label>\r\n    <input type=\"text\" name=\"date\" ngModel>\r\n  </div>\r\n  <br>\r\n  <button type=\"submit\">Törlés</button>\r\n  <button type=\"button\" (click)=\"clearForm(clientDeleteForm)\" >Adatok törlése</button>\r\n</form>\r\n  <br>\r\n  <button (click)=\"getClients()\">Kliensek listázása</button>\r\n  <br>\r\n  <p>Kliensek:</p>\r\n  <ul class=\"client\">\r\n    <li *ngFor=\"let client of clients\">\r\n      {{client.ip}} {{client.sendDate}}\r\n    </li>\r\n  </ul>\r\n  <br>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/client/client.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var ClientComponent = /** @class */ (function () {
    function ClientComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    ClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("http://localhost:8080/loggedin").subscribe(function (data) { return _this.loggedInCheck(data); });
    };
    ClientComponent.prototype.loggedInCheck = function (data) {
        if (data == false) {
            this.router.navigateByUrl('/login');
        }
    };
    ClientComponent.prototype.getClients = function () {
        var _this = this;
        this.http.get("http://localhost:8080/client/list").subscribe(function (data) { return _this.clients = data; });
    };
    ClientComponent.prototype.deleteClient = function (form) {
        var client = {
            ip: form.controls['ip'].value,
            sendDate: form.controls['date'].value
        };
        this.http.delete('http://localhost:8080/client/delete?ip=' + client.ip + "&date=" + client.sendDate, httpOptions).subscribe();
    };
    ClientComponent.prototype.clearForm = function (form) {
        form.resetForm();
    };
    ClientComponent.prototype.logOut = function () {
        this.http.get('http://localhost:8080/logout', httpOptions).subscribe();
        this.router.navigateByUrl('/login');
    };
    ClientComponent.prototype.navigateToSalaryData = function () {
        this.router.navigateByUrl("/salarydata");
    };
    ClientComponent.prototype.navigateToClientData = function () {
        this.router.navigateByUrl("/clientdata");
    };
    ClientComponent.prototype.navigateToUserData = function () {
        this.router.navigateByUrl("/user");
    };
    ClientComponent.prototype.navigateToDeletedData = function () {
        this.router.navigateByUrl("/deleteddata");
    };
    ClientComponent.prototype.navigateToVerifyingCodeData = function () {
        this.router.navigateByUrl("/codedata");
    };
    ClientComponent = __decorate([
        core_1.Component({
            selector: 'app-client',
            template: __webpack_require__("./src/app/client/client.component.html"),
            styles: [__webpack_require__("./src/app/client/client.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], ClientComponent);
    return ClientComponent;
}());
exports.ClientComponent = ClientComponent;


/***/ }),

/***/ "./src/app/deleted-data/deleted-data.component.css":
/***/ (function(module, exports) {

module.exports = "#container {\r\n  text-align: center;\r\n  background-color: lightgray;\r\n}\r\n\r\nbutton {\r\n  background-color: #008CBA;\r\n  border: none;\r\n  color: white;\r\n  padding: 10px 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/deleted-data/deleted-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <br>\r\n  <button (click)=\"logOut()\">Logout</button>\r\n  <button (click)=\"navigateToSalaryData()\">Fizetés</button>\r\n  <button (click)=\"navigateToClientData()\">Kliens</button>\r\n  <button (click)=\"navigateToUserData()\">Felhasználó</button>\r\n  <button (click)=\"navigateToDeletedData()\">Törölt adat</button>\r\n  <button (click)=\"navigateToVerifyingCodeData()\">Ellenőrző kód</button>\r\n  <br>\r\n<br>\r\n  <br>\r\n  <button (click)=\"getDeletedDatas()\">Törölt adatok listázása</button>\r\n  <br>\r\n  <p>Törölt adatok:</p>\r\n<ul class=\"deleteddata\">\r\n  <li *ngFor=\"let deleteddata of deletedDatas\">\r\n    <span class=\"badge\">{{deleteddata.id}}</span> {{deleteddata.username}} {{deleteddata.data}} {{deleteddata.deletionDate}}\r\n  </li>\r\n</ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/deleted-data/deleted-data.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var DeletedDataComponent = /** @class */ (function () {
    function DeletedDataComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    DeletedDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("http://localhost:8080/loggedin").subscribe(function (data) { return _this.loggedInCheck(data); });
    };
    DeletedDataComponent.prototype.loggedInCheck = function (data) {
        if (data == false) {
            this.router.navigateByUrl('/login');
        }
    };
    DeletedDataComponent.prototype.getDeletedDatas = function () {
        var _this = this;
        this.http.get('http://localhost:8080/deleteddata/list', httpOptions).subscribe(function (data) { return _this.deletedDatas = data; });
    };
    DeletedDataComponent.prototype.logOut = function () {
        this.http.get('http://localhost:8080/logout', httpOptions).subscribe();
        this.router.navigateByUrl('/login');
    };
    DeletedDataComponent.prototype.navigateToSalaryData = function () {
        this.router.navigateByUrl("/salarydata");
    };
    DeletedDataComponent.prototype.navigateToClientData = function () {
        this.router.navigateByUrl("/clientdata");
    };
    DeletedDataComponent.prototype.navigateToUserData = function () {
        this.router.navigateByUrl("/user");
    };
    DeletedDataComponent.prototype.navigateToDeletedData = function () {
        this.router.navigateByUrl("/deleteddata");
    };
    DeletedDataComponent.prototype.navigateToVerifyingCodeData = function () {
        this.router.navigateByUrl("/codedata");
    };
    DeletedDataComponent = __decorate([
        core_1.Component({
            selector: 'app-deleted-data',
            template: __webpack_require__("./src/app/deleted-data/deleted-data.component.html"),
            styles: [__webpack_require__("./src/app/deleted-data/deleted-data.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], DeletedDataComponent);
    return DeletedDataComponent;
}());
exports.DeletedDataComponent = DeletedDataComponent;


/***/ }),

/***/ "./src/app/educationAttainedList.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EDUCATIONS = [
    'alapfokú végzettség',
    'középfokú végzettség',
    'OKJ',
    'főiskolai végzettség',
    'egyetemi végzettség'
];


/***/ }),

/***/ "./src/app/foreignLanguagesList.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FOREIGNLANGUAGES = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "több mint 5"
];


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "#container {\r\n  text-align: center;\r\n  background-color: lightgray;\r\n}\r\n\r\nbutton {\r\n  background-color: #008CBA;\r\n  border: none;\r\n  color: white;\r\n  padding: 10px 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <br>\r\n  <button (click)=\"logOut()\">Logout</button>\r\n  <button (click)=\"navigateToSalaryData()\">Fizetés</button>\r\n  <button (click)=\"navigateToClientData()\">Kliens</button>\r\n  <button (click)=\"navigateToUserData()\">Felhasználó</button>\r\n  <button (click)=\"navigateToDeletedData()\">Törölt adat</button>\r\n  <button (click)=\"navigateToVerifyingCodeData()\">Ellenőrző kód</button>\r\n  <br>\r\n  <br>\r\n  <br>\r\n<form #userForm=\"ngForm\" (ngSubmit)=\"login(userForm.value)\">\r\n  <div>\r\n    <label>Felhasználónév:</label>\r\n    <input type=\"text\" name=\"username\" autocomplete=\"off\" ngModel>\r\n  </div>\r\n  <div>\r\n    <label>Jelszó:</label>\r\n    <input type=\"password\" name=\"password\" ngModel>\r\n  </div>\r\n  <br>\r\n  <button type=\"submit\">Login</button>\r\n  <button (click)=\"logOut()\">Logout</button>\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var httpOptionsForm = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};
var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router, location) {
        this.http = http;
        this.router = router;
        this.location = location;
    }
    LoginComponent.prototype.login = function (param) {
        var _this = this;
        var user = new http_1.HttpParams();
        user = user.append('username', param.username);
        user = user.append('password', param.password);
        this.http.post('http://localhost:8080/login', user, httpOptionsForm).subscribe(function (data) { return _this.navigateToSalaryData(); });
    };
    LoginComponent.prototype.logOut = function () {
        this.http.get('http://localhost:8080/logout', httpOptions).subscribe();
        this.router.navigateByUrl('/login');
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.navigateToSalaryData = function () {
        this.router.navigateByUrl("/salarydata");
    };
    LoginComponent.prototype.navigateToClientData = function () {
        this.router.navigateByUrl("/clientdata");
    };
    LoginComponent.prototype.navigateToUserData = function () {
        this.router.navigateByUrl("/user");
    };
    LoginComponent.prototype.navigateToDeletedData = function () {
        this.router.navigateByUrl("/deleteddata");
    };
    LoginComponent.prototype.navigateToVerifyingCodeData = function () {
        this.router.navigateByUrl("/codedata");
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router, common_1.Location])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/placeOfWorkList.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PLACEOFWORKS = [
    "Budapest",
    "Bács-Kiskun megye",
    "Baranya megye",
    "Békés megye",
    "Borsod-Abaúj-Zemplén megye",
    "Csongrád megye",
    "Fejér megye",
    "Győr-Moson-Sopron megye",
    "Hajdú-Bihar megye",
    "Heves megye",
    "Jász-Nagykun-Szolnok megye",
    "Komárom-Esztergom megye",
    "Nógrád megye",
    "Pest megye",
    "Somogy megye",
    "Szabolcs-Szatmár-Bereg megye",
    "Tolna megye",
    "Vas megye",
    "Veszprém megye",
    "Zala megye",
];


/***/ }),

/***/ "./src/app/salary-code-verification/salary-code-verification.component.css":
/***/ (function(module, exports) {

module.exports = "#container {\r\n  text-align: center;\r\n  background-color: lightgray;\r\n}\r\n\r\nbutton {\r\n  background-color: #008CBA;\r\n  border: none;\r\n  color: white;\r\n  padding: 10px 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/salary-code-verification/salary-code-verification.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <br>\r\n  <br>\r\n  <h2>Ellenőrizze, hogy részt vett e már a felmérésben:</h2>\r\n<form #verifyingCodeForm=\"ngForm\" (ngSubmit)=\"checkVerifyingCode(verifyingCodeForm)\">\r\n  <div>\r\n    <label>Kód:</label>\r\n    <input type=\"text\" name=\"verifyingCode\" autocomplete=\"off\" ngModel>\r\n  </div>\r\n  <br>\r\n  <button type=\"submit\">Ellenőrzés</button>\r\n  <button type=\"button\" (click)=\"clearVerifyingCodeForm(verifyingCodeForm)\" >Adatok törlése</button>\r\n</form>\r\n<p [hidden]=\"codeNotTypedIn == false\">Kérjük adja meg a kódot!</p>\r\n<br>\r\n<p>{{verifyingCodeExistMessage}}</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/salary-code-verification/salary-code-verification.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var SalaryCodeVerificationComponent = /** @class */ (function () {
    function SalaryCodeVerificationComponent(http, router) {
        this.http = http;
        this.router = router;
        this.verifyingCodeExistMessage = "";
        this.codeNotTypedIn = false;
    }
    SalaryCodeVerificationComponent.prototype.ngOnInit = function () {
    };
    //checking if given verifyingCode exist
    SalaryCodeVerificationComponent.prototype.checkVerifyingCode = function (form) {
        var _this = this;
        if (!(form.controls['verifyingCode'].value == '')) {
            this.http.post('http://localhost:8080/code/search', form.controls['verifyingCode'].value, httpOptions).subscribe(function (data) { return _this.changeVerifyingCodeChecker(data); });
            this.codeNotTypedIn = false;
        }
        else {
            this.codeNotTypedIn = true;
        }
    };
    SalaryCodeVerificationComponent.prototype.changeVerifyingCodeChecker = function (data) {
        if (data == true) {
            this.verifyingCodeExistMessage = "Ön részt vett a felmérésben.";
        }
        else if (data == false) {
            this.verifyingCodeExistMessage = "A megadott kód helytelen.";
        }
    };
    SalaryCodeVerificationComponent.prototype.clearVerifyingCodeForm = function (form) {
        form.resetForm();
        this.verifyingCodeExistMessage = '';
        this.codeNotTypedIn = false;
    };
    SalaryCodeVerificationComponent.prototype.navigateToSearchForm = function () {
        this.router.navigateByUrl('/salary/search');
    };
    SalaryCodeVerificationComponent.prototype.navigateToSalaryForm = function () {
        this.router.navigateByUrl('/salary');
    };
    SalaryCodeVerificationComponent = __decorate([
        core_1.Component({
            selector: 'app-salary-code-verification',
            template: __webpack_require__("./src/app/salary-code-verification/salary-code-verification.component.html"),
            styles: [__webpack_require__("./src/app/salary-code-verification/salary-code-verification.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], SalaryCodeVerificationComponent);
    return SalaryCodeVerificationComponent;
}());
exports.SalaryCodeVerificationComponent = SalaryCodeVerificationComponent;


/***/ }),

/***/ "./src/app/salary-data/salary-data.component.css":
/***/ (function(module, exports) {

module.exports = "#container {\r\n  text-align: center;\r\n  background-color: lightgray;\r\n}\r\n\r\nbutton {\r\n  background-color: #008CBA;\r\n  border: none;\r\n  color: white;\r\n  padding: 10px 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/salary-data/salary-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <br>\r\n  <button (click)=\"logOut()\">Logout</button>\r\n  <button (click)=\"navigateToSalaryData()\">Fizetés</button>\r\n  <button (click)=\"navigateToClientData()\">Kliens</button>\r\n  <button (click)=\"navigateToUserData()\">Felhasználó</button>\r\n  <button (click)=\"navigateToDeletedData()\">Törölt adat</button>\r\n  <button (click)=\"navigateToVerifyingCodeData()\">Ellenőrző kód</button>\r\n  <br>\r\n  <br>\r\n  <p>Keresés:</p>\r\n<form #salarySearchForm=\"ngForm\" (ngSubmit)=\"sendSearchRequest(salarySearchForm)\">\r\n  <div>\r\n    <label>Neme:</label>\r\n    <select name=\"gender\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option  value=\"Férfi\">Férfi</option>\r\n      <option  value=\"Nő\">Nő</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Életkora:</label>\r\n    <select name=\"age\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option *ngFor=\"let age of ages\" value={{age}}>{{age}}</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Hány idegen nyelven beszél:</label>\r\n    <select name=\"foreignLanguages\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option *ngFor=\"let languages of foreignLanguages\" value={{languages}}>{{languages}}</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Pozíció:</label>\r\n    <select name=\"position\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option *ngFor=\"let position of workPositions\" value={{position}}>{{position}}</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Tapasztalata:</label>\r\n    <select name=\"experience\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option *ngFor=\"let experience of workExperiences\" value={{experience}}>{{experience}}</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Munkavégzés helye:</label>\r\n    <select name=\"placeOfWork\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option *ngFor=\"let placeOfWork of placeOfWorks\" value={{placeOfWork}}>{{placeOfWork}}</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Legmagasabb iskolai végzettsége:</label>\r\n    <select name=\"educationAttained\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option *ngFor=\"let education of educations\" value={{education}}>{{education}}</option>\r\n    </select>\r\n  </div>\r\n  <br>\r\n  <button type=\"submit\">Keresés</button>\r\n  <button type=\"button\" (click)=\"clearForm(salarySearchForm)\">Adatok törlése</button>\r\n</form>\r\n<br>\r\n<p>Keresett fizetések: </p>\r\n<ul class=\"salary\">\r\n  <li *ngFor=\"let salary of searchedSalaryForms\">\r\n    {{salary.gender}} {{salary.age}} {{salary.foreignLanguages}} {{salary.position}} {{salary.experience}}\r\n    {{salary.placeOfWork}} {{salary.educationAttained}} {{salary.salary}}\r\n  </li>\r\n</ul>\r\n<br>\r\n<p>Fizetések törlése:</p>\r\n<form #salaryDeleteForm=\"ngForm\" (ngSubmit)=\"deleteSalary(salaryDeleteForm)\">\r\n  <div>\r\n    <label>Neme:</label>\r\n    <select name=\"gender\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option  value=\"Férfi\">Férfi</option>\r\n      <option  value=\"Nő\">Nő</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Életkora:</label>\r\n    <select name=\"age\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option *ngFor=\"let age of ages\" value={{age}}>{{age}}</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Hány idegen nyelven beszél:</label>\r\n    <select name=\"foreignLanguages\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option *ngFor=\"let languages of foreignLanguages\" value={{languages}}>{{languages}}</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Pozíció:</label>\r\n    <select name=\"position\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option *ngFor=\"let position of workPositions\" value={{position}}>{{position}}</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Tapasztalata:</label>\r\n    <select name=\"experience\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option *ngFor=\"let experience of workExperiences\" value={{experience}}>{{experience}}</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Munkavégzés helye:</label>\r\n    <select name=\"placeOfWork\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option *ngFor=\"let placeOfWork of placeOfWorks\" value={{placeOfWork}}>{{placeOfWork}}</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Legmagasabb iskolai végzettsége:</label>\r\n    <select name=\"educationAttained\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option *ngFor=\"let education of educations\" value={{education}}>{{education}}</option>\r\n    </select>\r\n  </div>\r\n  <br>\r\n  <button type=\"submit\">Törlés</button>\r\n  <button type=\"button\" (click)=\"clearForm(salaryDeleteForm)\">Adatok törlése</button>\r\n</form>\r\n  <br>\r\n  <button (click)=\"getSalaries()\">Fizetések listázása</button>\r\n  <br>\r\n  <ul class=\"salary\">\r\n    <li *ngFor=\"let salary of salaries\">\r\n      <span class=\"badge\">{{salary.id}}</span> {{salary.gender}} {{salary.age}} {{salary.foreignLanguages}} {{salary.position}} {{salary.experience}}\r\n      {{salary.placeOfWork}} {{salary.educationAttained}} {{salary.salary}}\r\n    </li>\r\n  </ul>\r\n  <br>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/salary-data/salary-data.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var educationAttainedList_1 = __webpack_require__("./src/app/educationAttainedList.ts");
var foreignLanguagesList_1 = __webpack_require__("./src/app/foreignLanguagesList.ts");
var workExperienceList_1 = __webpack_require__("./src/app/workExperienceList.ts");
var workPositionList_1 = __webpack_require__("./src/app/workPositionList.ts");
var ageList_1 = __webpack_require__("./src/app/ageList.ts");
var placeOfWorkList_1 = __webpack_require__("./src/app/placeOfWorkList.ts");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var SalaryDataComponent = /** @class */ (function () {
    function SalaryDataComponent(http, router) {
        this.http = http;
        this.router = router;
        this.educations = educationAttainedList_1.EDUCATIONS;
        this.foreignLanguages = foreignLanguagesList_1.FOREIGNLANGUAGES;
        this.workExperiences = workExperienceList_1.WORKEXPERIENCES;
        this.workPositions = workPositionList_1.WORKPOSITIONS;
        this.placeOfWorks = placeOfWorkList_1.PLACEOFWORKS;
        this.ages = ageList_1.AGES;
    }
    SalaryDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("http://localhost:8080/loggedin").subscribe(function (data) { return _this.loggedInCheck(data); });
    };
    SalaryDataComponent.prototype.loggedInCheck = function (data) {
        if (data == false) {
            this.router.navigateByUrl('/login');
        }
    };
    SalaryDataComponent.prototype.getSalaries = function () {
        var _this = this;
        this.http.get("http://localhost:8080/salary/list").subscribe(function (data) { return _this.salaries = data; });
    };
    //searchRequest methods
    SalaryDataComponent.prototype.sendSearchRequest = function (form) {
        var _this = this;
        var salarySearchForm = {
            gender: form.controls['gender'].value,
            age: form.controls['age'].value,
            foreignLanguages: form.controls['foreignLanguages'].value,
            position: form.controls['position'].value,
            experience: form.controls['experience'].value,
            placeOfWork: form.controls['placeOfWork'].value,
            educationAttained: form.controls['educationAttained'].value
        };
        if (!this.validateSearchForm(salarySearchForm)) {
            this.http.post('http://localhost:8080/salary/searchandlist', salarySearchForm, httpOptions).subscribe(function (data) { return _this.searchedSalaryForms = data; });
        }
    };
    SalaryDataComponent.prototype.validateSearchForm = function (salarySearchForm) {
        var error = false;
        if (salarySearchForm.gender == '' || salarySearchForm.gender == null ||
            salarySearchForm.age == '' || salarySearchForm.age == null ||
            salarySearchForm.foreignLanguages == '' || salarySearchForm.foreignLanguages == null ||
            salarySearchForm.position == '' || salarySearchForm.position == null ||
            salarySearchForm.experience == '' || salarySearchForm.experience == null ||
            salarySearchForm.placeOfWork == '' || salarySearchForm.placeOfWork == null ||
            salarySearchForm.educationAttained == '' || salarySearchForm.educationAttained == null) {
            error = true;
        }
        return error;
    };
    SalaryDataComponent.prototype.clearForm = function (form) {
        form.resetForm();
    };
    SalaryDataComponent.prototype.deleteSalary = function (form) {
        var salaryDeleteForm = {
            gender: form.controls['gender'].value,
            age: form.controls['age'].value,
            foreignLanguages: form.controls['foreignLanguages'].value,
            position: form.controls['position'].value,
            experience: form.controls['experience'].value,
            placeOfWork: form.controls['placeOfWork'].value,
            educationAttained: form.controls['educationAttained'].value
        };
        if (!this.validateSearchForm(salaryDeleteForm)) {
            this.http.post('http://localhost:8080/salary/delete', salaryDeleteForm, httpOptions).subscribe();
        }
    };
    SalaryDataComponent.prototype.logOut = function () {
        this.http.get('http://localhost:8080/logout', httpOptions).subscribe();
        this.router.navigateByUrl('/login');
    };
    SalaryDataComponent.prototype.navigateToSalaryData = function () {
        this.router.navigateByUrl("/salarydata");
    };
    SalaryDataComponent.prototype.navigateToClientData = function () {
        this.router.navigateByUrl("/clientdata");
    };
    SalaryDataComponent.prototype.navigateToUserData = function () {
        this.router.navigateByUrl("/user");
    };
    SalaryDataComponent.prototype.navigateToDeletedData = function () {
        this.router.navigateByUrl("/deleteddata");
    };
    SalaryDataComponent.prototype.navigateToVerifyingCodeData = function () {
        this.router.navigateByUrl("/codedata");
    };
    SalaryDataComponent = __decorate([
        core_1.Component({
            selector: 'app-salary-data',
            template: __webpack_require__("./src/app/salary-data/salary-data.component.html"),
            styles: [__webpack_require__("./src/app/salary-data/salary-data.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], SalaryDataComponent);
    return SalaryDataComponent;
}());
exports.SalaryDataComponent = SalaryDataComponent;


/***/ }),

/***/ "./src/app/salary-search/salary-search.component.css":
/***/ (function(module, exports) {

module.exports = "#container {\r\n  text-align: center;\r\n  background-color: lightgray;\r\n}\r\n\r\nbutton {\r\n  background-color: #008CBA;\r\n  border: none;\r\n  color: white;\r\n  padding: 10px 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/salary-search/salary-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <br>\r\n  <br>\r\n  <h2>Keressen átlagfizetést:</h2>\r\n<form #salarySearchForm=\"ngForm\" (ngSubmit)=\"sendSearchRequest(salarySearchForm)\">\r\n  <div>\r\n    <label>Neme:</label>\r\n    <select name=\"gender\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option  value=\"Férfi\">Férfi</option>\r\n      <option  value=\"Nő\">Nő</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Életkora:</label>\r\n    <select name=\"age\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option *ngFor=\"let age of ages\" value={{age}}>{{age}}</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Hány idegen nyelven beszél:</label>\r\n    <select name=\"foreignLanguages\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option *ngFor=\"let languages of foreignLanguages\" value={{languages}}>{{languages}}</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Pozíció:</label>\r\n    <select name=\"position\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option *ngFor=\"let position of workPositions\" value={{position}}>{{position}}</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Tapasztalata:</label>\r\n    <select name=\"experience\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option *ngFor=\"let experience of workExperiences\" value={{experience}}>{{experience}}</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Munkavégzés helye:</label>\r\n    <select name=\"placeOfWork\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option *ngFor=\"let placeOfWork of placeOfWorks\" value={{placeOfWork}}>{{placeOfWork}}</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Legmagasabb iskolai végzettsége:</label>\r\n    <select name=\"educationAttained\" ngModel>\r\n      <option  value=\"Összes\">Összes</option>\r\n      <option *ngFor=\"let education of educations\" value={{education}}>{{education}}</option>\r\n    </select>\r\n  </div>\r\n  <br>\r\n  <button type=\"submit\">Küldés</button>\r\n  <button type=\"button\" (click)=\"clearSearchForm(salarySearchForm)\">Adatok törlése</button>\r\n</form>\r\n<br>\r\n<p id=\"warningMessageFillEverythingSearchForm\" [hidden]=\"warningFillEverythingSearchForm != true\">Kérjük töltse ki az összes mezőt!</p>\r\n<br>\r\n<p [hidden]=\"averageSalary == 0\">Keresés szerinti átlag fizetés: {{averageSalary}} HUF</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/salary-search/salary-search.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var educationAttainedList_1 = __webpack_require__("./src/app/educationAttainedList.ts");
var foreignLanguagesList_1 = __webpack_require__("./src/app/foreignLanguagesList.ts");
var workExperienceList_1 = __webpack_require__("./src/app/workExperienceList.ts");
var workPositionList_1 = __webpack_require__("./src/app/workPositionList.ts");
var placeOfWorkList_1 = __webpack_require__("./src/app/placeOfWorkList.ts");
var ageList_1 = __webpack_require__("./src/app/ageList.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var SalarySearchComponent = /** @class */ (function () {
    function SalarySearchComponent(http, router) {
        this.http = http;
        this.router = router;
        this.educations = educationAttainedList_1.EDUCATIONS;
        this.foreignLanguages = foreignLanguagesList_1.FOREIGNLANGUAGES;
        this.workExperiences = workExperienceList_1.WORKEXPERIENCES;
        this.workPositions = workPositionList_1.WORKPOSITIONS;
        this.placeOfWorks = placeOfWorkList_1.PLACEOFWORKS;
        this.ages = ageList_1.AGES;
        this.averageSalary = 0;
        this.warningFillEverythingSearchForm = false;
    }
    SalarySearchComponent.prototype.ngOnInit = function () {
    };
    //searchRequest methods
    SalarySearchComponent.prototype.sendSearchRequest = function (form) {
        var _this = this;
        var salarySearchForm = {
            gender: form.controls['gender'].value,
            age: form.controls['age'].value,
            foreignLanguages: form.controls['foreignLanguages'].value,
            position: form.controls['position'].value,
            experience: form.controls['experience'].value,
            placeOfWork: form.controls['placeOfWork'].value,
            educationAttained: form.controls['educationAttained'].value
        };
        if (!this.validateSearchForm(salarySearchForm)) {
            this.http.post('http://localhost:8080/salary/average', salarySearchForm, httpOptions).subscribe(function (data) { return _this.averageSalary = data; });
            this.warningFillEverythingSearchForm = false;
        }
    };
    SalarySearchComponent.prototype.validateSearchForm = function (salarySearchForm) {
        var error = false;
        if (salarySearchForm.gender == '' || salarySearchForm.gender == null ||
            salarySearchForm.age == '' || salarySearchForm.age == null ||
            salarySearchForm.foreignLanguages == '' || salarySearchForm.foreignLanguages == null ||
            salarySearchForm.position == '' || salarySearchForm.position == null ||
            salarySearchForm.experience == '' || salarySearchForm.experience == null ||
            salarySearchForm.placeOfWork == '' || salarySearchForm.placeOfWork == null ||
            salarySearchForm.educationAttained == '' || salarySearchForm.educationAttained == null) {
            this.warningFillEverythingSearchForm = true;
            error = true;
        }
        return error;
    };
    SalarySearchComponent.prototype.clearSearchForm = function (form) {
        form.resetForm();
        this.averageSalary = 0;
        this.warningFillEverythingSearchForm = false;
    };
    SalarySearchComponent.prototype.navigateToCodeVerification = function () {
        this.router.navigateByUrl('/salary/verification');
    };
    SalarySearchComponent.prototype.navigateToSalaryForm = function () {
        this.router.navigateByUrl('/salary');
    };
    SalarySearchComponent = __decorate([
        core_1.Component({
            selector: 'app-salary-search',
            template: __webpack_require__("./src/app/salary-search/salary-search.component.html"),
            styles: [__webpack_require__("./src/app/salary-search/salary-search.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], SalarySearchComponent);
    return SalarySearchComponent;
}());
exports.SalarySearchComponent = SalarySearchComponent;


/***/ }),

/***/ "./src/app/salary/salary.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\r\n  text-align: center;\r\n}\r\n\r\nselect {\r\n  background-color: antiquewhite;\r\n  width: 250px;\r\n  margin: 1px auto;\r\n}\r\n\r\nlabel {\r\n  display: block;\r\n}\r\n\r\n#container {\r\n  text-align: center;\r\n  background-color: lightgray;\r\n}\r\n\r\nbutton {\r\n  background-color: #008CBA;\r\n  border: none;\r\n  color: white;\r\n  padding: 10px 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/salary/salary.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <br>\r\n<div style=\"text-align:center\">\r\n</div>\r\n<br>\r\n<h2>Adja meg fizetését:</h2>\r\n<form  #salaryForm=\"ngForm\" (ngSubmit)=\"sendSalary(salaryForm)\">\r\n  <div>\r\n    <label>Neme:</label>\r\n    <select name=\"gender\" ngModel>\r\n      <option  value=\"Férfi\">Férfi</option>\r\n      <option  value=\"Nő\">Nő</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Életkora:</label>\r\n    <select name=\"age\" ngModel>\r\n      <option *ngFor=\"let age of ages\" value={{age}}>{{age}}</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Hány idegen nyelven beszél:</label>\r\n    <select name=\"foreignLanguages\" ngModel>\r\n      <option *ngFor=\"let languages of foreignLanguages\" value={{languages}}>{{languages}}</option>\r\n    </select>\r\n  </div>\r\n    <div>\r\n  <label>Pozíció:</label>\r\n      <select name=\"position\" ngModel>\r\n        <option *ngFor=\"let position of workPositions\" value={{position}}>{{position}}</option>\r\n      </select>\r\n</div>\r\n  <div>\r\n    <label>Tapasztalata:</label>\r\n    <select name=\"experience\" ngModel>\r\n      <option *ngFor=\"let experience of workExperiences\" value={{experience}}>{{experience}}</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Munkavégzés helye:</label>\r\n    <select name=\"placeOfWork\" ngModel>\r\n      <option *ngFor=\"let placeOfWork of placeOfWorks\" value={{placeOfWork}}>{{placeOfWork}}</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Legmagasabb iskolai végzettsége:</label>\r\n    <select name=\"educationAttained\" ngModel>\r\n      <option *ngFor=\"let education of educations\" value={{education}}>{{education}}</option>\r\n    </select>\r\n  </div>\r\n  <div>\r\n    <label>Fizetése:</label>\r\n    <input type=\"number\" name=\"salary\" min=\"100000\" max =\"1000000\" autocomplete=\"off\" ngModel> HUF\r\n  </div>\r\n  <div>\r\n    <label>Szeretne-e egy kitöltés igazoló kódot kapni:</label>\r\n    <select name=\"wantVerifyFormCode\" ngModel>\r\n      <option  value=\"Igen\">Igen</option>\r\n      <option  value=\"Nem\">Nem</option>\r\n    </select>\r\n  </div>\r\n  <br>\r\n  <button type=\"submit\">Küldés</button>\r\n  <button type=\"button\" (click)=\"clearForm(salaryForm)\" >Adatok törlése</button>\r\n</form>\r\n  <br>\r\n<p id=\"cantSend\" [hidden]=\"ipBlocked != true\">Még nem küldhet újra! Kérjük várjon 2 percet két küldés között!</p>\r\n<p id=\"verifyCodeValue\" [hidden]=\"userWantVerifyingCode != true\">Az Ön igazoló kódja: {{verifyingCode}}</p>\r\n<p id=\"warningMessageFillEverything\" [hidden]=\"warningFillEverything != true\">Kérjük töltse ki az összes mezőt!</p>\r\n<p id=\"warningMessageWrongSalary\" [hidden]=\"warningWrongSalary != true\">Helytelen fizetés!</p>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/salary/salary.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var educationAttainedList_1 = __webpack_require__("./src/app/educationAttainedList.ts");
var foreignLanguagesList_1 = __webpack_require__("./src/app/foreignLanguagesList.ts");
var workExperienceList_1 = __webpack_require__("./src/app/workExperienceList.ts");
var workPositionList_1 = __webpack_require__("./src/app/workPositionList.ts");
var placeOfWorkList_1 = __webpack_require__("./src/app/placeOfWorkList.ts");
var ng2_cookies_1 = __webpack_require__("./node_modules/ng2-cookies/ng2-cookies.js");
var ageList_1 = __webpack_require__("./src/app/ageList.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var SalaryComponent = /** @class */ (function () {
    function SalaryComponent(http, router) {
        this.http = http;
        this.router = router;
        this.title = 'Salary Form97';
        this.ipBlocked = false;
        this.warningFillEverything = false;
        this.warningWrongSalary = false;
        this.verifyingCode = "";
        this.userWantVerifyingCode = false;
        this.educations = educationAttainedList_1.EDUCATIONS;
        this.foreignLanguages = foreignLanguagesList_1.FOREIGNLANGUAGES;
        this.workExperiences = workExperienceList_1.WORKEXPERIENCES;
        this.workPositions = workPositionList_1.WORKPOSITIONS;
        this.placeOfWorks = placeOfWorkList_1.PLACEOFWORKS;
        this.ages = ageList_1.AGES;
    }
    SalaryComponent.prototype.ngOnInit = function () {
    };
    //sending new salaryForm
    SalaryComponent.prototype.sendSalary = function (form) {
        var salaryForm = {
            gender: form.controls['gender'].value,
            age: form.controls['age'].value,
            foreignLanguages: form.controls['foreignLanguages'].value,
            position: form.controls['position'].value,
            experience: form.controls['experience'].value,
            placeOfWork: form.controls['placeOfWork'].value,
            educationAttained: form.controls['educationAttained'].value,
            salary: form.controls['salary'].value
        };
        if (ng2_cookies_1.Cookie.get("voteCookie") == null) {
            if (!this.validateForm(salaryForm, form.controls['wantVerifyFormCode'].value)) {
                if (form.controls['wantVerifyFormCode'].value == "Igen") {
                    this.verifyingCode = "SF2018" + Math.floor(Math.random() * 10000000);
                    this.userWantVerifyingCode = true;
                    var salaryCode = {
                        verifyingCode: this.verifyingCode
                    };
                    this.http.post('http://localhost:8080/salary/add?code=' + salaryCode.verifyingCode, salaryForm, httpOptions).subscribe();
                    this.warningFillEverything = false;
                    this.warningWrongSalary = false;
                    this.ipBlocked = false;
                    ng2_cookies_1.Cookie.set("voteCookie", 'Kuldes tiltva.', 0.00138889, "/");
                }
                else if (form.controls['wantVerifyFormCode'].value == "Nem") {
                    this.http.post('http://localhost:8080/salary/add?code=null', salaryForm, httpOptions).subscribe();
                    this.warningFillEverything = false;
                    this.warningWrongSalary = false;
                    this.ipBlocked = false;
                    this.verifyingCode = '';
                    ng2_cookies_1.Cookie.set("voteCookie", 'Kuldes tiltva.', 0.00138889, "/");
                }
            }
        }
        else {
            this.ipBlocked = true;
        }
    };
    SalaryComponent.prototype.validateForm = function (salaryForm, wantVerifyFormCode) {
        var error = false;
        if (salaryForm.gender == '' || salaryForm.gender == null ||
            salaryForm.age == '' || salaryForm.age == null ||
            salaryForm.foreignLanguages == '' || salaryForm.foreignLanguages == null ||
            salaryForm.position == '' || salaryForm.position == null ||
            salaryForm.experience == '' || salaryForm.experience == null ||
            salaryForm.placeOfWork == '' || salaryForm.placeOfWork == null ||
            salaryForm.educationAttained == '' || salaryForm.educationAttained == null ||
            salaryForm.salary == null) {
            this.warningFillEverything = true;
            error = true;
        }
        if (salaryForm.salary != null && salaryForm.salary < 100000) {
            this.warningWrongSalary = true;
            error = true;
        }
        if (salaryForm.salary != null && salaryForm.salary > 1000000) {
            this.warningWrongSalary = true;
            error = true;
        }
        return error;
    };
    SalaryComponent.prototype.clearForm = function (form) {
        form.resetForm();
        this.userWantVerifyingCode = false;
        this.warningFillEverything = false;
        this.warningWrongSalary = false;
    };
    SalaryComponent.prototype.navigateToSearchForm = function () {
        this.router.navigateByUrl('/salary/search');
    };
    SalaryComponent.prototype.navigateToCodeVerification = function () {
        this.router.navigateByUrl('/salary/verification');
    };
    SalaryComponent = __decorate([
        core_1.Component({
            selector: 'app-salary',
            template: __webpack_require__("./src/app/salary/salary.component.html"),
            styles: [__webpack_require__("./src/app/salary/salary.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], SalaryComponent);
    return SalaryComponent;
}());
exports.SalaryComponent = SalaryComponent;


/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = "#container {\r\n  text-align: center;\r\n  background-color: lightgray;\r\n}\r\n\r\nbutton {\r\n  background-color: #008CBA;\r\n  border: none;\r\n  color: white;\r\n  padding: 10px 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <br>\r\n  <button (click)=\"logOut()\">Logout</button>\r\n  <button (click)=\"navigateToSalaryData()\">Fizetés</button>\r\n  <button (click)=\"navigateToClientData()\">Kliens</button>\r\n  <button (click)=\"navigateToUserData()\">Felhasználó</button>\r\n  <button (click)=\"navigateToDeletedData()\">Törölt adat</button>\r\n  <button (click)=\"navigateToVerifyingCodeData()\">Ellenőrző kód</button>\r\n  <br>\r\n<br>\r\n<p>Felhasználó hozzáadása:</p>\r\n<form #userForm=\"ngForm\" (ngSubmit)=\"addUser(userForm)\">\r\n  <div>\r\n    <label>Felhasználónév:</label>\r\n    <input type=\"text\" name=\"username\" value=\"username\" ngModel>\r\n  </div>\r\n  <div>\r\n    <label>Jelszó:</label>\r\n    <input type=\"password\" name=\"password\" value=\"password\" ngModel>\r\n  </div>\r\n  <br>\r\n  <button type=\"submit\">Új felhasználó</button>\r\n</form>\r\n<p>Jelszó változtatása:</p>\r\n<form #userPasswordChangeForm=\"ngForm\" (ngSubmit)=\"changePassword(userPasswordChangeForm)\">\r\n  <div>\r\n    <label>Felhasználónév:</label>\r\n    <input type=\"text\" name=\"username\" value=\"username\" ngModel>\r\n  </div>\r\n  <div>\r\n    <label>Régi jelszó:</label>\r\n    <input type=\"password\" name=\"password\" value=\"password\" ngModel>\r\n  </div>\r\n  <div>\r\n    <label>Új jelszó:</label>\r\n    <input type=\"password\" name=\"newPassword\" value=\"newPassword\" ngModel>\r\n  </div>\r\n  <br>\r\n  <button type=\"submit\">Jelszóváltás</button>\r\n</form>\r\n<p>Felhasználó törlése</p>\r\n<form #userDeleteForm=\"ngForm\" (ngSubmit)=\"deleteUser(userDeleteForm)\">\r\n  <div>\r\n    <label>Felhasználónév:</label>\r\n    <input type=\"text\" name=\"username\" value=\"username\" ngModel>\r\n  </div>\r\n  <div>\r\n    <br>\r\n  <button type=\"submit\">Felhasználó törlése</button>\r\n  </div>\r\n</form>\r\n  <br>\r\n<button (click)=\"getUsers()\">Felhasználók listázása</button>\r\n  <br>\r\n  <p>Felhasználók:</p>\r\n  <ul class=\"user\">\r\n    <li *ngFor=\"let user of users\">\r\n      <span class=\"badge\">{{user.id}}</span> {{user.username}} {{user.roles}}\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var UserComponent = /** @class */ (function () {
    function UserComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("http://localhost:8080/loggedin").subscribe(function (data) { return _this.loggedInCheck(data); });
    };
    UserComponent.prototype.loggedInCheck = function (data) {
        if (data == false) {
            this.router.navigateByUrl('/login');
        }
    };
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.http.get('http://localhost:8080/user/list', httpOptions).subscribe(function (data) { return _this.users = data; });
    };
    UserComponent.prototype.addUser = function (form) {
        if (!(form.controls['username'].value == '' || form.controls['password'].value == '')) {
            var user = {
                username: form.controls['username'].value,
                password: form.controls['password'].value,
                roles: [''],
            };
            this.http.post('http://localhost:8080/user/add', user, httpOptions).subscribe();
        }
    };
    UserComponent.prototype.changePassword = function (form) {
        if (!(form.controls['username'].value == '' || form.controls['password'].value == '' || form.controls['newPassword'].value == '')) {
            var user = {
                username: form.controls['username'].value,
                password: form.controls['password'].value,
                roles: [''],
            };
            this.http.post('http://localhost:8080/user/changepw?newPassword=' + form.controls['newPassword'].value, user, httpOptions).subscribe();
        }
    };
    UserComponent.prototype.deleteUser = function (form) {
        if (!(form.controls['username'].value == '')) {
            this.http.delete('http://localhost:8080/user/delete?username=' + form.controls['username'].value, httpOptions).subscribe();
        }
    };
    UserComponent.prototype.logOut = function () {
        this.http.get('http://localhost:8080/logout', httpOptions).subscribe();
        this.router.navigateByUrl('/login');
    };
    UserComponent.prototype.navigateToSalaryData = function () {
        this.router.navigateByUrl("/salarydata");
    };
    UserComponent.prototype.navigateToClientData = function () {
        this.router.navigateByUrl("/clientdata");
    };
    UserComponent.prototype.navigateToUserData = function () {
        this.router.navigateByUrl("/user");
    };
    UserComponent.prototype.navigateToDeletedData = function () {
        this.router.navigateByUrl("/deleteddata");
    };
    UserComponent.prototype.navigateToVerifyingCodeData = function () {
        this.router.navigateByUrl("/codedata");
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            template: __webpack_require__("./src/app/user/user.component.html"),
            styles: [__webpack_require__("./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;


/***/ }),

/***/ "./src/app/verifying-code-data/verifying-code-data.component.css":
/***/ (function(module, exports) {

module.exports = "#container {\r\n  text-align: center;\r\n  background-color: lightgray;\r\n}\r\n\r\nbutton {\r\n  background-color: #008CBA;\r\n  border: none;\r\n  color: white;\r\n  padding: 10px 10px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/verifying-code-data/verifying-code-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <br>\r\n  <button (click)=\"logOut()\">Logout</button>\r\n  <button (click)=\"navigateToSalaryData()\">Fizetés</button>\r\n  <button (click)=\"navigateToClientData()\">Kliens</button>\r\n  <button (click)=\"navigateToUserData()\">Felhasználó</button>\r\n  <button (click)=\"navigateToDeletedData()\">Törölt adat</button>\r\n  <button (click)=\"navigateToVerifyingCodeData()\">Ellenőrző kód</button>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <button (click)=\"getCodes()\">Kódok listázása:</button>\r\n  <br>\r\n  <p>Kódok:</p>\r\n<ul class=\"code\">\r\n  <li *ngFor=\"let code of codes\">\r\n    <span class=\"badge\">{{code.id}}</span> {{code.verifyingCode}}\r\n  </li>\r\n</ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/verifying-code-data/verifying-code-data.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var VerifyingCodeDataComponent = /** @class */ (function () {
    function VerifyingCodeDataComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    VerifyingCodeDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("http://localhost:8080/loggedin").subscribe(function (data) { return _this.loggedInCheck(data); });
    };
    VerifyingCodeDataComponent.prototype.loggedInCheck = function (data) {
        if (data == false) {
            this.router.navigateByUrl('/login');
        }
    };
    VerifyingCodeDataComponent.prototype.getCodes = function () {
        var _this = this;
        this.http.get("http://localhost:8080/code/list").subscribe(function (data) { return _this.codes = data; });
    };
    VerifyingCodeDataComponent.prototype.logOut = function () {
        this.http.get('http://localhost:8080/logout', httpOptions).subscribe();
        this.router.navigateByUrl('/login');
    };
    VerifyingCodeDataComponent.prototype.navigateToSalaryData = function () {
        this.router.navigateByUrl("/salarydata");
    };
    VerifyingCodeDataComponent.prototype.navigateToClientData = function () {
        this.router.navigateByUrl("/clientdata");
    };
    VerifyingCodeDataComponent.prototype.navigateToUserData = function () {
        this.router.navigateByUrl("/user");
    };
    VerifyingCodeDataComponent.prototype.navigateToDeletedData = function () {
        this.router.navigateByUrl("/deleteddata");
    };
    VerifyingCodeDataComponent.prototype.navigateToVerifyingCodeData = function () {
        this.router.navigateByUrl("/codedata");
    };
    VerifyingCodeDataComponent = __decorate([
        core_1.Component({
            selector: 'app-verifying-code-data',
            template: __webpack_require__("./src/app/verifying-code-data/verifying-code-data.component.html"),
            styles: [__webpack_require__("./src/app/verifying-code-data/verifying-code-data.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], VerifyingCodeDataComponent);
    return VerifyingCodeDataComponent;
}());
exports.VerifyingCodeDataComponent = VerifyingCodeDataComponent;


/***/ }),

/***/ "./src/app/workExperienceList.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WORKEXPERIENCES = [
    "kevesebb mint egy év",
    "1-2 év",
    "3-5 év",
    "6-10 év",
    "több mint 10 év"
];


/***/ }),

/***/ "./src/app/workPositionList.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WORKPOSITIONS = [
    'Adminisztráció, Irodai munka',
    'Bank, Biztosítás, Bróker',
    'Cégvezetés, Menedzsment',
    "Egészségügy, Gyógyszeripar",
    "Építőipar, Ingatlan",
    "Értékesítés, Kereskedelem",
    "Fizikai, Segéd, Betanított munka",
    "Gyártás, Termelés",
    "HR, Munkaügy",
    "IT programozás, Fejlesztés",
    "IT üzemeltetés, Telekom",
    "Jog, Jogi tanácsadás",
    "Közigazgatás",
    "Marketing, Média, PR",
    "Mérnök",
    "Mezőgazdaság, Környezet",
    "Oktatás, Kutatás, Tudomány",
    "Pénzügy, Könyvelés",
    "Szakmunka",
    "Szállítás, Beszerzés, Logisztika",
    "Ügyfélszolgálat, Vevőszolgálat",
    "Üzleti támogató központok",
    "Vendéglátás, Idegenforgalom"
];


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map