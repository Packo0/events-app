(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./user/user.module": [
		"./src/app/user/user.module.ts",
		"user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, checkDirtyState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDirtyState", function() { return checkDirtyState; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./src/app/events/index.ts");
/* harmony import */ var _events_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events-app.component */ "./src/app/events-app.component.ts");
/* harmony import */ var _nav_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav-bar.component */ "./src/app/nav/nav-bar.component.ts");
/* harmony import */ var _common_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/toastr.service */ "./src/app/common/toastr.service.ts");
/* harmony import */ var _common_collapsible_well_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/collapsible-well.component */ "./src/app/common/collapsible-well.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../routes */ "./src/routes.ts");
/* harmony import */ var _error_404_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error/404.component */ "./src/app/error/404.component.ts");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/auth.service */ "./src/app/user/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_8__["appRoutes"])
            ],
            declarations: [
                _events_app_component__WEBPACK_IMPORTED_MODULE_4__["EventsAppComponent"],
                _events__WEBPACK_IMPORTED_MODULE_3__["EventsListComponent"],
                _events__WEBPACK_IMPORTED_MODULE_3__["EventThumbnailComponent"],
                _events__WEBPACK_IMPORTED_MODULE_3__["EventDetailsComponent"],
                _nav_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                _error_404_component__WEBPACK_IMPORTED_MODULE_9__["Error404Component"],
                _events__WEBPACK_IMPORTED_MODULE_3__["CreateEventComponent"],
                _error_404_component__WEBPACK_IMPORTED_MODULE_9__["Error404Component"],
                _events__WEBPACK_IMPORTED_MODULE_3__["CreateSessionComponent"],
                _events__WEBPACK_IMPORTED_MODULE_3__["SessionListComponent"],
                _common_collapsible_well_component__WEBPACK_IMPORTED_MODULE_7__["CollapsibleWellComponent"],
                _events__WEBPACK_IMPORTED_MODULE_3__["DurationPipe"],
            ],
            providers: [
                _events__WEBPACK_IMPORTED_MODULE_3__["EventService"],
                _common_toastr_service__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
                _events__WEBPACK_IMPORTED_MODULE_3__["EventRouteActivator"],
                _events__WEBPACK_IMPORTED_MODULE_3__["EventListResolver"],
                _user_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                {
                    provide: 'canDeactivateCreateEvent',
                    useValue: checkDirtyState
                }
            ],
            bootstrap: [_events_app_component__WEBPACK_IMPORTED_MODULE_4__["EventsAppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function checkDirtyState(component) {
    if (component.isDirty) {
        return window.confirm("You have not save this event, do you really want to cancel?");
    }
    return true;
}


/***/ }),

/***/ "./src/app/common/collapsible-well.component.ts":
/*!******************************************************!*\
  !*** ./src/app/common/collapsible-well.component.ts ***!
  \******************************************************/
/*! exports provided: CollapsibleWellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsibleWellComponent", function() { return CollapsibleWellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CollapsibleWellComponent = /** @class */ (function () {
    function CollapsibleWellComponent() {
        this.visible = true;
    }
    CollapsibleWellComponent.prototype.toggleContent = function () {
        this.visible = !this.visible;
    };
    CollapsibleWellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'collapsible-well',
            template: "\n    <div (click)=\"toggleContent()\" class=\"well pointable\">\n      <h4>\n        <ng-content select=\"[well-title]\"></ng-content>\n      </h4>\n      <ng-content *ngIf=\"visible\" select=\"[well-body]\"></ng-content>\n    </div>\n  "
        })
    ], CollapsibleWellComponent);
    return CollapsibleWellComponent;
}());



/***/ }),

/***/ "./src/app/common/toastr.service.ts":
/*!******************************************!*\
  !*** ./src/app/common/toastr.service.ts ***!
  \******************************************/
/*! exports provided: ToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return ToastrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ToastrService = /** @class */ (function () {
    function ToastrService() {
    }
    ToastrService.prototype.success = function (message, title) {
        toastr.success(message, title);
    };
    ToastrService.prototype.info = function (message, title) {
        toastr.info(message, title);
    };
    ToastrService.prototype.warning = function (message, title) {
        toastr.warning(message, title);
    };
    ToastrService.prototype.error = function (message, title) {
        toastr.error(message, title);
    };
    ToastrService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ToastrService);
    return ToastrService;
}());



/***/ }),

/***/ "./src/app/error/404.component.ts":
/*!****************************************!*\
  !*** ./src/app/error/404.component.ts ***!
  \****************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <h1 class=\"errorMessage\">404'd</h1>\n  ",
            styles: ["\n    .errorMessage {\n      margin-top:150px;\n      font-size: 170px;\n      text-align: center;\n    }"]
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/events-app.component.ts":
/*!*****************************************!*\
  !*** ./src/app/events-app.component.ts ***!
  \*****************************************/
/*! exports provided: EventsAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsAppComponent", function() { return EventsAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EventsAppComponent = /** @class */ (function () {
    function EventsAppComponent() {
        this.title = 'app';
    }
    EventsAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'events-app',
            template: "\n    <nav-bar></nav-bar>\n    <router-outlet></router-outlet>\n  "
        })
    ], EventsAppComponent);
    return EventsAppComponent;
}());



/***/ }),

/***/ "./src/app/events/create-event.component.html":
/*!****************************************************!*\
  !*** ./src/app/events/create-event.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>New Event</h1>\r\n<hr>\r\n<div class=\"col-md-6\">\r\n  <form #newEventForm=\"ngForm\"\r\n        (ngSubmit)=\"saveEvent(newEventForm.value)\"\r\n        autocomplete=\"off\"\r\n        novalidate>\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'error': newEventForm.controls.name?.invalid && newEventForm.controls.name?.touched}\">\r\n      <label for=\"eventName\">Event Name:</label>\r\n      <em *ngIf=\"newEventForm.controls.name?.invalid && (newEventForm.controls.name?.touched)\">Required</em>\r\n      <input (ngModel)=\"newEvent.name\"\r\n             name=\"name\"\r\n             required id=\"name\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             placeholder=\"Name of your event...\" />\r\n    </div>\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'error': newEventForm.controls.date?.invalid && newEventForm.controls.date?.touched}\">\r\n      <label for=\"eventDate\">Event Date:</label>\r\n      <em *ngIf=\"newEventForm.controls.date?.invalid && (newEventForm.controls.date?.touched)\">Required</em>\r\n      <input (ngModel)=\"newEvent.date\"\r\n             name=\"date\"\r\n             required\r\n             id=\"eventDate\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             placeholder=\"format (mm/dd/yyyy)...\" />\r\n    </div>\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'error': newEventForm.controls.time?.invalid && newEventForm.controls.time?.touched}\">\r\n      <label for=\"eventTime\">Event Time:</label>\r\n      <em *ngIf=\"newEventForm.controls.time?.invalid && (newEventForm.controls.time?.touched)\">Required</em>\r\n      <input (ngModel)=\"newEvent.time\"\r\n             name=\"time\"\r\n             required\r\n             id=\"eventTime\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             placeholder=\"start and end time...\" />\r\n    </div>\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'error': newEventForm.controls.price?.invalid && newEventForm.controls.price?.touched}\">\r\n      <label for=\"eventPrice\">Event Price:</label>\r\n      <em *ngIf=\"newEventForm.controls.price?.invalid && (newEventForm.controls.price?.touched)\">Required</em>\r\n      <input (ngModel)=\"newEvent.price\"\r\n             name=\"price\"\r\n             required\r\n             id=\"eventPrice\"\r\n             type=\"text\"\r\n             type=\"number\"\r\n             class=\"form-control\"\r\n             placeholder=\"event price...\" />\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"address\">Event Location:</label>\r\n      <input (ngModel)=\"newEvent.address\"\r\n             name=\"address\"\r\n             id=\"address\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             placeholder=\"Address of event...\" />\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <input (ngModel)=\"newEvent.city\"\r\n               name=\"city\"\r\n               id=\"city\"\r\n               type=\"text\"\r\n               class=\"form-control\"\r\n               placeholder=\"City...\" />\r\n      </div>\r\n      <div class=\"col-md-6\" >\r\n        <input (ngModel)=\"newEvent.country\"\r\n               name=\"country\"\r\n               id=\"country\"\r\n               type=\"text\"\r\n               class=\"form-control\"\r\n               placeholder=\"Country...\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"onlineUrl\">Online Url:</label>\r\n      <input (ngModel)=\"newEvent.onlineUrl\"\r\n             name=\"onlineUrl\"\r\n             id=\"onlineUrl\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             placeholder=\"Online Url...\" />\r\n    </div>\r\n\r\n    <div class=\"form-group\"\r\n        [ngClass]=\"{'error': newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched}\">\r\n      <label for=\"imageUrl\">Image:</label>\r\n      <em *ngIf=\"newEventForm.controls.imageUrl?.invalid &&\r\n                 newEventForm.controls.imageUrl?.touched &&\r\n                 newEventForm.controls.imageUrl?.errors.required\">Required</em>\r\n      <em *ngIf=\"newEventForm.controls.imageUrl?.invalid &&\r\n                 newEventForm.controls.imageUrl?.touched &&\r\n                 newEventForm.controls.imageUrl?.errors.pattern\">Must be a png or jpg url</em>\r\n      <input (ngModel)=\"newEvent.imageUrl\"\r\n             name=\"imageUrl\"\r\n             required\r\n             pattern=\".*\\/.*.(png|jpg)\"\r\n             id=\"imageUrl\"\r\n             type=\"text\"\r\n             class=\"form-control\"\r\n             placeholder=\"url of image...\" />\r\n      <img [src]=\"newEventForm.controls.imageUrl.value\" *ngIf=\"newEventForm.controls.imageUrl?.valid\" />\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n    <button type=\"button\"\r\n            [disabled]=\"newEventForm.invalid\"\r\n            class=\"btn btn-default\"\r\n            (click)=\"cancel()\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/events/create-event.component.ts":
/*!**************************************************!*\
  !*** ./src/app/events/create-event.component.ts ***!
  \**************************************************/
/*! exports provided: CreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ "./src/app/events/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateEventComponent = /** @class */ (function () {
    function CreateEventComponent(router, eventService) {
        this.router = router;
        this.eventService = eventService;
        this.isDirty = true;
    }
    CreateEventComponent.prototype.saveEvent = function (formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    };
    CreateEventComponent.prototype.cancel = function () {
        this.router.navigate(['/events']);
    };
    CreateEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./create-event.component.html */ "./src/app/events/create-event.component.html"),
            styles: ["\n        em {float: right; color:#E05C65; padding-left: 10px;}\n        .error input {background-color: #E3C3C5;}\n        .error ::-webkit-input-placeholder {color: #999;}\n        .error ::-moz-placeholder {color: #999;}\n        .error :-moz-placeholder {color: #999;}\n        .error :ms-input-placeholder {color: #999;}\n  "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared__WEBPACK_IMPORTED_MODULE_2__["EventService"]])
    ], CreateEventComponent);
    return CreateEventComponent;
}());



/***/ }),

/***/ "./src/app/events/event-details/create-session.component.html":
/*!********************************************************************!*\
  !*** ./src/app/events/event-details/create-session.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <h3>Create Session</h3>\r\n</div>\r\n<div class=\"col-md-6\">\r\n  <form [formGroup]=\"newSessionForm\" (ngSubmit)=\"saveSession(newSessionForm.value)\" autocomplete=\"off\">\r\n    <div class=\"form-group\" [ngClass]=\"{'error': name.invalid && name.dirty}\">\r\n      <label for=\"sessionName\">Session Name:</label>\r\n      <em *ngIf=\"name.invalid && name.dirty\">Required</em>\r\n      <input formControlName=\"name\" id=\"sessionName\" type=\"text\" class=\"form-control\" placeholder=\"session name...\" />\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{'error': presenter.invalid && presenter.dirty}\">\r\n      <label for=\"eventDate\">Presenter:</label>\r\n      <em *ngIf=\"presenter.invalid && presenter.dirty\">Required</em>\r\n      <input formControlName=\"presenter\" id=\"presenter\" type=\"text\" class=\"form-control\" placeholder=\"presenter...\" />\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{'error': duration.invalid && duration.dirty}\">\r\n      <label for=\"duration\">Duration:</label>\r\n      <em *ngIf=\"duration.invalid && duration.dirty\">Required</em>\r\n      <select formControlName=\"duration\" class=\"form-control\">\r\n        <option value=\"\">select duration...</option>\r\n        <option value=\"1\">Half Hour</option>\r\n        <option value=\"2\">1 Hour</option>\r\n        <option value=\"3\">Half Day</option>\r\n        <option value=\"4\">Full Day</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{'error': level.invalid && level.dirty}\">\r\n      <label for=\"level\">Level:</label>\r\n      <em *ngIf=\"level.invalid && level.dirty\">Required</em>\r\n      <select formControlName=\"level\" class=\"form-control\">\r\n        <option value=\"\">select level...</option>\r\n        <option value=\"Beginner\">Beginner</option>\r\n        <option value=\"Intermediate\">Intermediate</option>\r\n        <option value=\"Advanced\">Advanced</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{'error': abstract.invalid && abstract.dirty}\">\r\n      <label for=\"abstract\">Abstract:</label>\r\n      <em *ngIf=\"abstract.invalid && abstract.dirty && abstract?.errors.required\">Required</em>\r\n      <em *ngIf=\"abstract.invalid && abstract.dirty && abstract?.errors.maxlength\">Cannot exceed 400 characters</em>\r\n      <em *ngIf=\"abstract.invalid && abstract.dirty && abstract?.errors.restrictedWords\">Restricted words found:\r\n        {{abstract.errors.restrictedWords}}</em>\r\n      <textarea formControlName=\"abstract\" id=\"abstract\" rows=3 class=\"form-control\"\r\n        placeholder=\"abstract...\"></textarea>\r\n    </div>\r\n    <button type=\"submit\" [disabled]=\"newSessionForm.invalid\" class=\"btn btn-primary\">Save</button>\r\n    <button type=\"button\" (click)=\"cancel()\" class=\"btn btn-default\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/events/event-details/create-session.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/events/event-details/create-session.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSessionComponent", function() { return CreateSessionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "./src/app/events/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateSessionComponent = /** @class */ (function () {
    function CreateSessionComponent() {
        this.saveNewSession = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelAddSession = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CreateSessionComponent.prototype.ngOnInit = function () {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.presenter = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.duration = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.level = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.abstract = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(400), Object(_shared__WEBPACK_IMPORTED_MODULE_2__["restrictedWords"])(['foo', 'bar'])]);
        this.newSessionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    };
    CreateSessionComponent.prototype.saveSession = function (formValues) {
        var session = {
            id: undefined,
            name: formValues.name,
            duration: +formValues.duration,
            level: formValues.level,
            presenter: formValues.presenter,
            abstract: formValues.abstract,
            voters: []
        };
        this.saveNewSession.emit(session);
        console.log(session);
    };
    CreateSessionComponent.prototype.cancel = function () {
        this.cancelAddSession.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreateSessionComponent.prototype, "saveNewSession", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreateSessionComponent.prototype, "cancelAddSession", void 0);
    CreateSessionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'create-session',
            template: __webpack_require__(/*! ./create-session.component.html */ "./src/app/events/event-details/create-session.component.html"),
            styles: ["\n        em {float: right; color:#E05C65; padding-left: 10px;}\n        .error input, .error select, .error textarea {background-color: #E3C3C5;}\n        .error ::-webkit-input-placeholder {color: #999;}\n        .error ::-moz-placeholder {color: #999;}\n        .error :-moz-placeholder {color: #999;}\n        .error :ms-input-placeholder {color: #999;}\n  "]
        })
    ], CreateSessionComponent);
    return CreateSessionComponent;
}());



/***/ }),

/***/ "./src/app/events/event-details/event-details.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/events/event-details/event-details.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <img [src]=\"event?.imageUrl\" [alt]=\"event?.name\" class=\"event-image\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-11\">\r\n      <h2>{{event?.name | uppercase}} </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div><strong>Date:</strong> {{event?.date | date:'shortDate'}}</div>\r\n      <div><strong>Time:</strong> {{event?.time}}</div>\r\n      <div><strong>Price:</strong> {{event?.price | currency: 'USD'}}</div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <address>\r\n        <strong>Address:</strong><br />\r\n        {{event?.location?.address}}<br />\r\n        {{event?.location?.city}}, {{event?.location?.country}}\r\n      </address>\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n        <h3 style=\"margin:0\">Sessions</h3>\r\n      </div>\r\n\r\n      <div class=\"col-md-7\" style=\"margin-bottom: 10px\">\r\n        <div class=\"btn-group btn-group-sm\" style=\"margin: 0 20px\">\r\n          <button class=\"btn btn-default\" [class.active]=\"sortBy==='name'\" (click)=\"sortBy='name'\">By Name</button>\r\n          <button class=\"btn btn-default\" [class.active]=\"sortBy==='vote'\" (click)=\"sortBy='vote'\">By Vote</button>\r\n        </div>\r\n        <div class=\"btn-group btn-group-sm\">\r\n          <button class=\"btn btn-default\" [class.active]=\"filterBy==='all'\" (click)=\"filterBy='all'\">All</button>\r\n          <button class=\"btn btn-default\" [class.active]=\"filterBy==='beginner'\" (click)=\"filterBy='beginner'\">Beginner</button>\r\n          <button class=\"btn btn-default\" [class.active]=\"filterBy==='intermediate'\" (click)=\"filterBy='intermediate'\">Intermediate</button>\r\n          <button class=\"btn btn-default\" [class.active]=\"filterBy==='advanced'\" (click)=\"filterBy='advanced'\">Advanced</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-2\">\r\n        <a (click)=\"addSession()\">Add Session</a>\r\n      </div>\r\n    </div>\r\n\r\n    <session-list *ngIf=\"!addMode\" [sortBy]=\"sortBy\" [filterBy]=\"filterBy\" [sessions]=\"event?.sessions\"></session-list>\r\n\r\n    <create-session *ngIf=\"addMode\" (saveNewSession)=\"saveNewSession($event)\" (cancelAddSession)=\"cancelAddSession()\">\r\n    </create-session>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/events/event-details/event-details.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/events/event-details/event-details.component.ts ***!
  \*****************************************************************/
/*! exports provided: EventDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return EventDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/event.service */ "./src/app/events/shared/event.service.ts");
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



var EventDetailsComponent = /** @class */ (function () {
    function EventDetailsComponent(eventService, routes) {
        this.eventService = eventService;
        this.routes = routes;
        this.filterBy = 'all';
        this.sortBy = 'vote';
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        this.event = this.eventService.getEvent(+this.routes.snapshot.params['id']);
    };
    EventDetailsComponent.prototype.addSession = function () {
        this.addMode = true;
    };
    EventDetailsComponent.prototype.saveNewSession = function (session) {
        var nextId = Math.max.apply(null, this.event.sessions.map(function (s) { return s.id; }));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    };
    EventDetailsComponent.prototype.cancelAddSession = function () {
        this.addMode = false;
    };
    EventDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./event-details.component.html */ "./src/app/events/event-details/event-details.component.html"),
            styles: ["\n    .container {padding: 0 20px; }\n    .event-image {height: 100px; }\n    a { cursor: pointer; }\n  "]
        }),
        __metadata("design:paramtypes", [_shared_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EventDetailsComponent);
    return EventDetailsComponent;
}());



/***/ }),

/***/ "./src/app/events/event-details/event-route-activator.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/events/event-details/event-route-activator.service.ts ***!
  \***********************************************************************/
/*! exports provided: EventRouteActivator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRouteActivator", function() { return EventRouteActivator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/event.service */ "./src/app/events/shared/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventRouteActivator = /** @class */ (function () {
    function EventRouteActivator(eventService, router) {
        this.eventService = eventService;
        this.router = router;
    }
    EventRouteActivator.prototype.canActivate = function (route) {
        var eventExist = !!this.eventService.getEvent(+route.params['id']);
        if (!eventExist) {
            this.router.navigate(['/404']);
        }
        return eventExist;
    };
    EventRouteActivator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EventRouteActivator);
    return EventRouteActivator;
}());



/***/ }),

/***/ "./src/app/events/event-details/index.ts":
/*!***********************************************!*\
  !*** ./src/app/events/event-details/index.ts ***!
  \***********************************************/
/*! exports provided: EventDetailsComponent, EventRouteActivator, CreateSessionComponent, SessionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-details.component */ "./src/app/events/event-details/event-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return _event_details_component__WEBPACK_IMPORTED_MODULE_0__["EventDetailsComponent"]; });

/* harmony import */ var _event_route_activator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-route-activator.service */ "./src/app/events/event-details/event-route-activator.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventRouteActivator", function() { return _event_route_activator_service__WEBPACK_IMPORTED_MODULE_1__["EventRouteActivator"]; });

/* harmony import */ var _create_session_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-session.component */ "./src/app/events/event-details/create-session.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateSessionComponent", function() { return _create_session_component__WEBPACK_IMPORTED_MODULE_2__["CreateSessionComponent"]; });

/* harmony import */ var _session_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-list.component */ "./src/app/events/event-details/session-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionListComponent", function() { return _session_list_component__WEBPACK_IMPORTED_MODULE_3__["SessionListComponent"]; });







/***/ }),

/***/ "./src/app/events/event-details/session-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/events/event-details/session-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngFor=\"let session of visibleSessions\">\r\n  <div class=\"col-md-10\">\r\n    <collapsible-well>\r\n      <div well-title>\r\n        {{session.name}}\r\n        <i style=\"color:red\" *ngIf=\"session.voters.length > 3\" class=\"glyphicon glyphicon-fire\"></i>\r\n      </div>\r\n      <div well-body>\r\n        <h6>{{session.presenter}}</h6>\r\n        <span>Duration: {{session.duration | duration}}</span><br />\r\n        <span>Level: {{session.level}}</span>\r\n        <p>{{session.abstract}}</p>\r\n      </div>\r\n    </collapsible-well>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/events/event-details/session-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/events/event-details/session-list.component.ts ***!
  \****************************************************************/
/*! exports provided: SessionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionListComponent", function() { return SessionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SessionListComponent = /** @class */ (function () {
    function SessionListComponent() {
        this.visibleSessions = [];
    }
    SessionListComponent.prototype.ngOnChanges = function () {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ?
                this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVoteDesc);
        }
    };
    SessionListComponent.prototype.filterSessions = function (filter) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        }
        else {
            this.visibleSessions = this.sessions.filter(function (session) {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SessionListComponent.prototype, "sessions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SessionListComponent.prototype, "filterBy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SessionListComponent.prototype, "sortBy", void 0);
    SessionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'session-list',
            template: __webpack_require__(/*! ./session-list.component.html */ "./src/app/events/event-details/session-list.component.html")
        })
    ], SessionListComponent);
    return SessionListComponent;
}());

function sortByNameAsc(s1, s2) {
    if (s1.name > s2.name)
        return 1;
    else if (s1.name === s2.name)
        return 0;
    else
        return -1;
}
function sortByVoteDesc(s1, s2) {
    return s2.voters.length - s1.voters.length;
}


/***/ }),

/***/ "./src/app/events/event-thumbnail.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/events/event-thumbnail.component.ts ***!
  \*****************************************************/
/*! exports provided: EventThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventThumbnailComponent", function() { return EventThumbnailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventThumbnailComponent = /** @class */ (function () {
    function EventThumbnailComponent() {
    }
    EventThumbnailComponent.prototype.getStartTimeStyle = function () {
        if (this.event && this.event.time === '8:00 am')
            return { color: '#003300', 'font-weight': 'bold' };
        return {};
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EventThumbnailComponent.prototype, "event", void 0);
    EventThumbnailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'event-thumbnail',
            template: "\n    <div [routerLink]=\"['/events', event.id]\" class=\"well hoverwell thumbnail\">\n      <h2>{{event?.name | uppercase}}</h2>\n      <div>Date: {{event?.date | date: 'shortDate'}}</div>\n      <div [ngStyle]=\"getStartTimeStyle()\" [ngSwitch]=\"event?.time\">Time: {{event?.time}}\n        <span *ngSwitchCase=\"'8:00 am'\">(Early Start)</span>\n        <span *ngSwitchCase=\"'10:00 am'\">(Late Start)</span>\n        <span *ngSwitchDefault>(Normal Start)</span>\n      </div>\n      <div>Price: {{event?.price | currency:'USD'}}</div>\n      <div *ngIf=\"event?.location\">\n        <span>Location: {{event?.location?.address}}</span>\n        <span class=\"pad-left\">{{event?.location?.city}}, {{event?.location?.country}}</span>\n      </div>\n      <div *ngIf=\"event?.onlineUrl\">\n        Online URL: {{event?.onlineUrl}}\n      </div>\n    </div>\n  ",
            styles: ["\n    .thumbnail { min-height: 210px; }\n    .pad-left { margin-left: 10px; }\n    .well div { color: #bbb; }\n  "]
        })
    ], EventThumbnailComponent);
    return EventThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/events/events-list-resolver.service.ts":
/*!********************************************************!*\
  !*** ./src/app/events/events-list-resolver.service.ts ***!
  \********************************************************/
/*! exports provided: EventListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListResolver", function() { return EventListResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/event.service */ "./src/app/events/shared/event.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventListResolver = /** @class */ (function () {
    function EventListResolver(eventService) {
        this.eventService = eventService;
    }
    EventListResolver.prototype.resolve = function () {
        return this.eventService.getEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (events) { return events; }));
    };
    EventListResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]])
    ], EventListResolver);
    return EventListResolver;
}());



/***/ }),

/***/ "./src/app/events/events-list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/events/events-list.component.ts ***!
  \*************************************************/
/*! exports provided: EventsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsListComponent", function() { return EventsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_toastr_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/toastr.service */ "./src/app/common/toastr.service.ts");
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



var EventsListComponent = /** @class */ (function () {
    function EventsListComponent(toastr, route) {
        this.toastr = toastr;
        this.route = route;
    }
    EventsListComponent.prototype.ngOnInit = function () {
        this.events = this.route.snapshot.data['events'];
    };
    EventsListComponent.prototype.handleThumbnailClick = function (eventName) {
        this.toastr.success(eventName);
    };
    EventsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <div>\n    <h1>Upcoming Angular Events</h1>\n    <hr/>\n    <div class=\"row\">\n      <div *ngFor=\"let event of events\" class=\"col-md-5\">\n        <event-thumbnail (click)=\"handleThumbnailClick(event.name)\" [event]=\"event\"></event-thumbnail>\n      </div>\n    </div>\n  </div>\n  "
        }),
        __metadata("design:paramtypes", [_common_toastr_service__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EventsListComponent);
    return EventsListComponent;
}());



/***/ }),

/***/ "./src/app/events/index.ts":
/*!*********************************!*\
  !*** ./src/app/events/index.ts ***!
  \*********************************/
/*! exports provided: CreateEventComponent, EventThumbnailComponent, EventListResolver, EventsListComponent, EventService, restrictedWords, DurationPipe, EventDetailsComponent, EventRouteActivator, CreateSessionComponent, SessionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_event_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-event.component */ "./src/app/events/create-event.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return _create_event_component__WEBPACK_IMPORTED_MODULE_0__["CreateEventComponent"]; });

/* harmony import */ var _event_thumbnail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-thumbnail.component */ "./src/app/events/event-thumbnail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventThumbnailComponent", function() { return _event_thumbnail_component__WEBPACK_IMPORTED_MODULE_1__["EventThumbnailComponent"]; });

/* harmony import */ var _events_list_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events-list-resolver.service */ "./src/app/events/events-list-resolver.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventListResolver", function() { return _events_list_resolver_service__WEBPACK_IMPORTED_MODULE_2__["EventListResolver"]; });

/* harmony import */ var _events_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-list.component */ "./src/app/events/events-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsListComponent", function() { return _events_list_component__WEBPACK_IMPORTED_MODULE_3__["EventsListComponent"]; });

/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./src/app/events/shared/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return _shared__WEBPACK_IMPORTED_MODULE_4__["EventService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restrictedWords", function() { return _shared__WEBPACK_IMPORTED_MODULE_4__["restrictedWords"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return _shared__WEBPACK_IMPORTED_MODULE_4__["DurationPipe"]; });

/* harmony import */ var _event_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-details */ "./src/app/events/event-details/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return _event_details__WEBPACK_IMPORTED_MODULE_5__["EventDetailsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventRouteActivator", function() { return _event_details__WEBPACK_IMPORTED_MODULE_5__["EventRouteActivator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateSessionComponent", function() { return _event_details__WEBPACK_IMPORTED_MODULE_5__["CreateSessionComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionListComponent", function() { return _event_details__WEBPACK_IMPORTED_MODULE_5__["SessionListComponent"]; });









/***/ }),

/***/ "./src/app/events/shared/duration.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/events/shared/duration.pipe.ts ***!
  \************************************************/
/*! exports provided: DurationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return DurationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DurationPipe = /** @class */ (function () {
    function DurationPipe() {
    }
    DurationPipe.prototype.transform = function (value) {
        switch (value) {
            case 1: return 'Half Hour';
            case 2: return '1 Hour';
            case 3: return 'Half Day';
            case 4: return 'Full Day';
            default: return value.toString();
        }
    };
    DurationPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'duration' })
    ], DurationPipe);
    return DurationPipe;
}());



/***/ }),

/***/ "./src/app/events/shared/event.service.ts":
/*!************************************************!*\
  !*** ./src/app/events/shared/event.service.ts ***!
  \************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EventService = /** @class */ (function () {
    function EventService() {
    }
    EventService.prototype.getEvents = function () {
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        setTimeout(function () { subject.next(EVENTS); subject.complete(); }, 100);
        return subject;
    };
    EventService.prototype.getEvent = function (id) {
        return EVENTS.find(function (event) { return event.id === id; });
    };
    EventService.prototype.updateEvent = function (event) {
        var index = EVENTS.findIndex(function (x) { return x.id = event.id; });
        EVENTS[index] = event;
    };
    EventService.prototype.saveEvent = function (event) {
        event.id = 999;
        event.session = [];
        EVENTS.push(event);
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], EventService);
    return EventService;
}());

var EVENTS = [
    {
        id: 1,
        name: 'Angular Connect',
        date: new Date('9/26/2036'),
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        },
        sessions: [
            {
                id: 1,
                name: "Using Angular 4 Pipes",
                presenter: "Peter Bacon Darwin",
                duration: 1,
                level: "Intermediate",
                abstract: "Learn all about the new pipes in Angular 4, both\n          how to write them, and how to get the new AI CLI to write\n          them for you. Given by the famous PBD, president of Angular\n          University (formerly Oxford University)",
                voters: ['bradgreen', 'igorminar', 'martinfowler']
            },
            {
                id: 2,
                name: "Getting the most out of your dev team",
                presenter: "Jeff Cross",
                duration: 1,
                level: "Intermediate",
                abstract: "We all know that our dev teams work hard, but with\n          the right management they can be even more productive, without\n          overworking them. In this session I'll show you how to get the\n          best results from the talent you already have on staff.",
                voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
            },
            {
                id: 3,
                name: "Angular 4 Performance Metrics",
                presenter: "Rob Wormald",
                duration: 2,
                level: "Advanced",
                abstract: "Angular 4 Performance is hot. In this session, we'll see\n          how Angular gets such great performance by preloading data on\n          your users devices before they even hit your site using the\n          new predictive algorithms and thought reading software\n          built into Angular 4.",
                voters: []
            },
            {
                id: 4,
                name: "Angular 5 Look Ahead",
                presenter: "Brad Green",
                duration: 2,
                level: "Advanced",
                abstract: "Even though Angular 5 is still 6 years away, we all want\n          to know all about it so that we can spend endless hours in meetings\n          debating if we should use Angular 4 or not. This talk will look at\n          Angular 6 even though no code has yet been written for it. We'll\n          look at what it might do, and how to convince your manager to\n          hold off on any new apps until it's released",
                voters: []
            },
            {
                id: 5,
                name: "Basics of Angular 4",
                presenter: "John Papa",
                duration: 2,
                level: "Beginner",
                abstract: "It's time to learn the basics of Angular 4. This talk\n          will give you everything you need to know about Angular 4 to\n          get started with it today and be building UI's for your self\n          driving cars and butler-bots in no time.",
                voters: ['bradgreen', 'igorminar']
            }
        ]
    },
    {
        id: 2,
        name: 'ng-nl',
        date: new Date('4/15/2037'),
        time: '9:00 am',
        price: 950.00,
        imageUrl: '/assets/images/ng-nl.png',
        onlineUrl: 'http://ng-nl.org/',
        sessions: [
            {
                id: 1,
                name: "Testing Angular 4 Workshop",
                presenter: "Pascal Precht & Christoph Bergdorf",
                duration: 4,
                level: "Beginner",
                abstract: "In this 6 hour workshop you will learn not only how to test Angular 4,\n          you will also learn how to make the most of your team's efforts. Other topics\n          will be convincing your manager that testing is a good idea, and using the new\n          protractor tool for end to end testing.",
                voters: ['bradgreen', 'igorminar']
            },
            {
                id: 2,
                name: "Angular 4 and Firebase",
                presenter: "David East",
                duration: 3,
                level: "Intermediate",
                abstract: "In this workshop, David East will show you how to use Angular with the new\n          ultra-real-time 5D Firebase back end, hosting platform, and wine recommendation engine.",
                voters: ['bradgreen', 'igorminar', 'johnpapa']
            },
            {
                id: 3,
                name: "Reading the Angular 4 Source",
                presenter: "Patrick Stapleton",
                duration: 2,
                level: "Intermediate",
                abstract: "Angular 4's source code may be over 25 million lines of code, but it's really\n          a lot easier to read and understand then you may think. Patrick Stapleton will talk\n          about his secretes for keeping up with the changes, and navigating around the code.",
                voters: ['martinfowler']
            },
            {
                id: 4,
                name: "Hail to the Lukas",
                presenter: "Lukas Ruebbelke",
                duration: 1,
                level: "Beginner",
                abstract: "In this session, Lukas will present the\n          secret to being awesome, and how he became the President\n          of the United States through his amazing programming skills,\n          showing how you too can be success with just attitude.",
                voters: ['bradgreen']
            },
        ]
    },
    {
        id: 3,
        name: 'ng-conf 2037',
        date: new Date('5/4/2037'),
        time: '9:00 am',
        price: 759.00,
        imageUrl: '/assets/images/ng-conf.png',
        location: {
            address: 'The Palatial America Hotel',
            city: 'Salt Lake City',
            country: 'USA'
        },
        sessions: [
            {
                id: 1,
                name: "How Elm Powers Angular 4",
                presenter: "Murphy Randle",
                duration: 2,
                level: "Intermediate",
                abstract: "We all know that Angular is written in Elm, but did you\n          know how the source code is really written? In this exciting look\n          into the internals of Angular 4, we'll see exactly how Elm powers\n          the framework, and what you can do to take advantage of this knowledge.",
                voters: ['bradgreen', 'martinfowler', 'igorminar']
            },
            {
                id: 2,
                name: "Angular and React together",
                presenter: "Jamison Dance",
                duration: 2,
                level: "Intermediate",
                abstract: "React v449.6 has just been released. Let's see how to use\n          this new version with Angular to create even more impressive applications.",
                voters: ['bradgreen', 'martinfowler']
            },
            {
                id: 3,
                name: "Redux Woes",
                presenter: "Rob Wormald",
                duration: 1,
                level: "Intermediate",
                abstract: "Everyone is using Redux for everything from Angular to React to\n          Excel macros, but you're still having trouble grasping it? We'll take a look\n          at how farmers use Redux when harvesting grain as a great introduction to\n          this game changing technology.",
                voters: ['bradgreen', 'martinfowler', 'johnpapa']
            },
            {
                id: 4,
                name: "ng-wat again!!",
                presenter: "Shai Reznik",
                duration: 1,
                level: "Beginner",
                abstract: "Let's take a look at some of the stranger pieces of Angular 4,\n          including neural net nets, Android in Androids, and using pipes with actual pipes.",
                voters: ['bradgreen', 'martinfowler', 'igorminar', 'johnpapa']
            },
            {
                id: 5,
                name: "Dressed for Success",
                presenter: "Ward Bell",
                duration: 2,
                level: "Beginner",
                abstract: "Being a developer in 2037 is about more than just writing bug-free code.\n          You also have to look the part. In this amazing expose, Ward will talk you through\n          how to pick out the right clothes to make your coworkers and boss not only\n          respect you, but also want to be your buddy.",
                voters: ['bradgreen', 'martinfowler']
            },
            {
                id: 6,
                name: "These aren't the directives you're looking for",
                presenter: "John Papa",
                duration: 2,
                level: "Intermediate",
                abstract: "Coinciding with the release of Star Wars Episode 18, this talk will show how\n          to use directives in your Angular 4 development while drawing lessons from the new movie,\n          featuring all your favorite characters like Han Solo's ghost and Darth Jar Jar.",
                voters: ['bradgreen', 'martinfowler']
            },
        ]
    },
    {
        id: 4,
        name: 'UN Angular Summit',
        date: new Date('6/10/2037'),
        time: '8:00 am',
        price: 800.00,
        imageUrl: '/assets/images/basic-shield.png',
        location: {
            address: 'The UN Angular Center',
            city: 'New York',
            country: 'USA'
        },
        sessions: [
            {
                id: 1,
                name: "Diversity in Tech",
                presenter: "Sir Dave Smith",
                duration: 2,
                level: "Beginner",
                abstract: "Yes, we all work with cyborgs and androids and Martians, but\n          we probably don't realize that sometimes our internal biases can make it difficult for\n          these well-designed coworkers to really feel at home coding alongside us. This talk will\n          look at things we can do to recognize our biases and counteract them.",
                voters: ['bradgreen', 'igorminar']
            },
            {
                id: 2,
                name: "World Peace and Angular",
                presenter: "US Secretary of State Zach Galifianakis",
                duration: 2,
                level: "Beginner",
                abstract: "Angular has been used in most of the major peace brokering that has\n          happened in the last decade, but there is still much we can do to remove all\n          war from the world, and Angular will be a key part of that effort.",
                voters: ['bradgreen', 'igorminar', 'johnpapa']
            },
            {
                id: 3,
                name: "Using Angular with Androids",
                presenter: "Dan Wahlin",
                duration: 3,
                level: "Advanced",
                abstract: "Androids may do everything for us now, allowing us to spend all day playing\n          the latest Destiny DLC, but we can still improve the massages they give and the handmade\n          brie they make using Angular 4. This session will show you how.",
                voters: ['igorminar', 'johnpapa']
            },
        ]
    },
    {
        id: 5,
        name: 'ng-vegas',
        date: new Date('2/10/2037'),
        time: '9:00 am',
        price: 400.00,
        imageUrl: '/assets/images/ng-vegas.png',
        location: {
            address: 'The Excalibur',
            city: 'Las Vegas',
            country: 'USA'
        },
        sessions: [
            {
                id: 1,
                name: "Gambling with Angular",
                presenter: "John Papa",
                duration: 1,
                level: "Intermediate",
                abstract: "No, this talk isn't about slot machines. We all know that\n          Angular is used in most waiter-bots and coke vending machines, but\n          did you know that was also used to write the core engine in the majority\n          of voting machines? This talk will look at how all presidential elections\n          are now determined by Angular code.",
                voters: ['bradgreen', 'igorminar']
            },
            {
                id: 2,
                name: "Angular 4 in 60ish Minutes",
                presenter: "Dan Wahlin",
                duration: 2,
                level: "Beginner",
                abstract: "Get the skinny on Angular 4 for anyone new to this great new technology.\n          Dan Wahlin will show you how you can get started with Angular in 60ish minutes,\n          guaranteed!",
                voters: ['bradgreen', 'igorminar', 'johnpapa']
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/events/shared/index.ts":
/*!****************************************!*\
  !*** ./src/app/events/shared/index.ts ***!
  \****************************************/
/*! exports provided: EventService, restrictedWords, DurationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.service */ "./src/app/events/shared/event.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return _event_service__WEBPACK_IMPORTED_MODULE_0__["EventService"]; });

/* harmony import */ var _restricted_words_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restricted-words.validator */ "./src/app/events/shared/restricted-words.validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restrictedWords", function() { return _restricted_words_validator__WEBPACK_IMPORTED_MODULE_1__["restrictedWords"]; });

/* harmony import */ var _duration_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./duration.pipe */ "./src/app/events/shared/duration.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return _duration_pipe__WEBPACK_IMPORTED_MODULE_2__["DurationPipe"]; });






/***/ }),

/***/ "./src/app/events/shared/restricted-words.validator.ts":
/*!*************************************************************!*\
  !*** ./src/app/events/shared/restricted-words.validator.ts ***!
  \*************************************************************/
/*! exports provided: restrictedWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restrictedWords", function() { return restrictedWords; });
function restrictedWords(words) {
    return function (control) {
        if (!words) {
            return null;
        }
        var invalidWords = words
            .map(function (w) { return control.value.includes(w) ? w : null; })
            .filter(function (w) { return w != null; });
        return invalidWords && invalidWords.length > 0 ?
            { 'restrictedWords': invalidWords.join(', ') } :
            null;
    };
}


/***/ }),

/***/ "./src/app/nav/nav-bar.component.html":
/*!********************************************!*\
  !*** ./src/app/nav/nav-bar.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" >ngEvents</a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li>\r\n          <a\r\n            [routerLink]=\"['/events']\"\r\n            routerLinkActive=\"active\"\r\n            [routerLinkActiveOptions]=\"{exact: true}\">All Events</a>\r\n        </li>\r\n        <li><a [routerLink]=\"['/events/new']\" routerLinkActive=\"active\">Create Event</a></li>\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" >\r\n            Events\r\n            <span class=\"caret\"></span>\r\n          </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li >\r\n              <a href=\"\">Angular Connect</a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n      <div class=\"navbar-header navbar-right\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li>\r\n            <a *ngIf=\"!auth.isAuthenticated()\" [routerLink]=\"['/user/login']\" routerLinkActive=\"active\">Login</a>\r\n            <a *ngIf=\"auth.isAuthenticated()\" [routerLink]=\"['/user/profile']\" routerLinkActive=\"active\">Welcome, {{auth.currentUser.firstName}}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <form id=\"searchForm\"  class=\"navbar-form navbar-right\"  >\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search Sessions\" >\r\n        </div>\r\n        <button class=\"btn btn-default\" >\r\n          Search\r\n        </button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/nav/nav-bar.component.ts":
/*!******************************************!*\
  !*** ./src/app/nav/nav-bar.component.ts ***!
  \******************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/auth.service */ "./src/app/user/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(auth) {
        this.auth = auth;
    }
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav/nav-bar.component.html"),
            styles: ["\n    .nav.navbar-nav {font-size: 15px;}\n    #searchForm {margin-right: 100px;}\n    @media (max-width: 1200px) {#searchForm {display:none}}\n    li > a.active {color: #F97924;}\n  "]
        }),
        __metadata("design:paramtypes", [_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/user/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.loginUser = function (userName, password) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Pavel',
            lastName: 'Dimitrov'
        };
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!this.currentUser;
    };
    AuthService.prototype.updateCurrentUser = function (firstName, lastName) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _app_error_404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/error/404.component */ "./src/app/error/404.component.ts");
/* harmony import */ var _app_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/events */ "./src/app/events/index.ts");


var appRoutes = [
    {
        path: 'events',
        component: _app_events__WEBPACK_IMPORTED_MODULE_1__["EventsListComponent"],
        resolve: {
            events: _app_events__WEBPACK_IMPORTED_MODULE_1__["EventListResolver"]
        }
    },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: 'events/new', component: _app_events__WEBPACK_IMPORTED_MODULE_1__["CreateEventComponent"], canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: _app_events__WEBPACK_IMPORTED_MODULE_1__["EventDetailsComponent"], canActivate: [_app_events__WEBPACK_IMPORTED_MODULE_1__["EventRouteActivator"]] },
    { path: 'events/session/new', component: _app_events__WEBPACK_IMPORTED_MODULE_1__["CreateSessionComponent"] },
    { path: '404', component: _app_error_404_component__WEBPACK_IMPORTED_MODULE_0__["Error404Component"] },
    { path: '**', redirectTo: 'events', pathMatch: 'full' },
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\angular\events-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map