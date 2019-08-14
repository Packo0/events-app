(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/app/user/login.component.html":
/*!*******************************************!*\
  !*** ./src/app/user/login.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\r\n<hr>\r\n<div class=\"col-md-4\">\r\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm.value)\" autocomplete=\"off\" novalidate>\r\n    <div class=\"form-group\" >\r\n      <label for=\"userName\">User Name:</label>\r\n      <em *ngIf=\"loginForm.controls.userName?.invalid &&\r\n                 (loginForm.controls.userName?.touched || mouseoverLogin)\">Required</em>\r\n      <input\r\n        (ngModel)=\"userName\"\r\n        name=\"userName\"\r\n        id=\"userName\"\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"User Name...\"\r\n        required />\r\n    </div>\r\n    <div class=\"form-group\" >\r\n      <label for=\"password\">Password:</label>\r\n      <em *ngIf=\"loginForm.controls.password?.invalid &&\r\n                 (loginForm.controls.password?.touched || mouseoverLogin)\">Required</em>\r\n      <input\r\n        (ngModel)=\"password\"\r\n        name=\"password\"\r\n        id=\"password\"\r\n        type=\"password\"\r\n        class=\"form-control\"\r\n        placeholder=\"Password...\"\r\n        required/>\r\n    </div>\r\n    <span (mouseenter)=\"mouseoverLogin=true\" (mouseleave)=\"mouseoverLogin=false\">\r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"loginForm.invalid\">Login</button>\r\n    </span>\r\n    <button type=\"button\" (click)= \"cancel()\" class=\"btn btn-default\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/login.component.ts":
/*!*****************************************!*\
  !*** ./src/app/user/login.component.ts ***!
  \*****************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.login = function (formValues) {
        this.authService
            .loginUser(formValues.userName, formValues.password);
        this.router.navigate(['events']);
    };
    LoginComponent.prototype.cancel = function () {
        this.router.navigate(['events']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login.component.html"),
            styles: ["\n    em {float: right; color:#E05C65; padding-left: 10px;}\n  "]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/profile.component.html":
/*!*********************************************!*\
  !*** ./src/app/user/profile.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1>Edit Your Profile </h1>\r\n    <hr>\r\n    <div class=\"col-md-4\">\r\n      <form [formGroup]=\"profileForm\" (ngSubmit)=\"saveProfile(profileForm.value)\" autocomplete=\"off\" novalidate>\r\n        <div class=\"form-group\"\r\n             [ngClass]=\"{'error': !validateFirstName()}\">\r\n          <label for=\"firstName\">First Name:</label>\r\n          <em *ngIf=\"!validateFirstName() && profileForm.controls.firstName.errors.required\">Required</em>\r\n          <em *ngIf=\"!validateFirstName() && profileForm.controls.firstName.errors.pattern\">Must start with letter</em>\r\n          <input\r\n            formControlName=\"firstName\"\r\n            id=\"firstName\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"First Name...\" />\r\n        </div>\r\n        <div class=\"form-group\"\r\n             [ngClass]=\"{'error': !validateLastName()}\">\r\n          <label for=\"lastName\">Last Name:</label>\r\n          <em *ngIf=\"!validateLastName()\">Required</em>\r\n          <input\r\n            formControlName=\"lastName\"\r\n            id=\"lastName\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"Last Name...\" />\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/user/profile.component.ts":
/*!*******************************************!*\
  !*** ./src/app/user/profile.component.ts ***!
  \*******************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.auth.currentUser.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z].*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.auth.currentUser.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: this.firstName,
            lastName: this.lastName
        });
    };
    ProfileComponent.prototype.saveProfile = function (formsValues) {
        if (this.profileForm.valid) {
            this.auth.updateCurrentUser(formsValues.firstName, formsValues.lastName);
            this.router.navigate(['events']);
        }
    };
    ProfileComponent.prototype.validateFirstName = function () {
        return this.firstName.valid || this.firstName.untouched;
    };
    ProfileComponent.prototype.validateLastName = function () {
        return this.lastName.valid || this.lastName.untouched;
    };
    ProfileComponent.prototype.cancel = function () {
        this.router.navigate(['events']);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/user/profile.component.html"),
            styles: ["\n        em {float: right; color:#E05C65; padding-left: 10px;}\n        .error input {background-color: #E3C3C5;}\n        .error ::-webkit-input-placeholder {color: #999;}\n        .error ::-moz-placeholder {color: #999;}\n        .error :-moz-placeholder {color: #999;}\n        .error :ms-input-placeholder {color: #999;}\n  "]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "./src/app/user/profile.component.ts");
/* harmony import */ var _user_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.routes */ "./src/app/user/user.routes.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/user/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_user_routes__WEBPACK_IMPORTED_MODULE_5__["userRoutes"])
            ],
            declarations: [
                _profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                _login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            ],
            providers: []
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/user.routes.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.routes.ts ***!
  \*************************************/
/*! exports provided: userRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRoutes", function() { return userRoutes; });
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ "./src/app/user/profile.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/app/user/login.component.ts");


var userRoutes = [
    { path: 'profile', component: _profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"] },
    { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
];


/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map