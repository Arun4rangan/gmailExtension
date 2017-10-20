webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    {{title}}!\n  </h1>\n</div>\n<create-event (onInsert)=\"taskList.setListofEvents()\"></create-event>\n<tasks-list #taskList></tasks-list>\n\n"


/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'gTasker';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__task_list_component__ = __webpack_require__("../../../../../src/app/task-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__create_event_component__ = __webpack_require__("../../../../../src/app/create-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_token_service__ = __webpack_require__("../../../../../src/app/user-token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calendar_service__ = __webpack_require__("../../../../../src/app/calendar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__task_list_component__["a" /* TaskListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__create_event_component__["a" /* CreateEventComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_pagination__["a" /* NgxPaginationModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__user_token_service__["a" /* UserTokenService */],
            __WEBPACK_IMPORTED_MODULE_9__calendar_service__["a" /* CalendarService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/calendar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarService = (function () {
    function CalendarService(http) {
        this.http = http;
        this.url = 'https://www.googleapis.com/calendar/v3';
    }
    CalendarService.prototype.getEvents = function (calendar, token, pageToken) {
        var get_event = '/calendars/' + calendar + '/events?access_token=' + token;
        if (pageToken) {
            get_event = get_event + '&pageToken=' + pageToken;
        }
        return this.http.get(this.url + get_event)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CalendarService.prototype.createEvent = function (calendar, token, event) {
        var create_event = '/calendars/' + calendar + '/events?access_token=' + token;
        return this.http.post(this.url + create_event, event)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CalendarService.prototype.deleteEvent = function (calendar, event, token) {
        var delete_event = '/calendars/' + calendar + '/events/' + event + '?access_token=' + token;
        return this.http.delete(this.url + delete_event)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CalendarService.prototype.handleError = function (error) {
        console.log('Error has occured', error);
        return Promise.reject(error.message || error);
    };
    return CalendarService;
}());
CalendarService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], CalendarService);

var _a;
//# sourceMappingURL=calendar.service.js.map

/***/ }),

/***/ "../../../../../src/app/create-event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-event.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid grid-pad\">\n  <select [(ngModel)]=\"type\">\n    <option *ngFor=\"let type of types\">{{type}}</option>\n  </select>\n  <input [(ngModel)]=\"summary\" placeholder=\"summary\" type=\"text\" required=\"true\">\n  <input [(ngModel)]=\"startDatetime\" type=\"date\">\n  <button (click)=\"insertEventInCalender()\">Create</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/create-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_token_service__ = __webpack_require__("../../../../../src/app/user-token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_service__ = __webpack_require__("../../../../../src/app/calendar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateEventComponent = (function () {
    function CreateEventComponent(userTokenService, calendarService) {
        this.userTokenService = userTokenService;
        this.calendarService = calendarService;
        this.type = 'Homework';
        this.startDatetime = new Date().toISOString().slice(0, 10);
        this.types = ['Homework', 'Task', 'Project'];
        this.userDetail = {};
        this.onInsert = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    CreateEventComponent.prototype.getUser = function () {
        return [
            this.userTokenService.getUserInfo(),
            this.userTokenService.getIdentity()
        ];
    };
    CreateEventComponent.prototype.insertEventInCalender = function () {
        var _this = this;
        var event = this.createEvent();
        var userPromise = this.getUser();
        Promise.all(userPromise)
            .then(function (userDetail) {
            _this.userDetail = userDetail[0];
            _this.token = userDetail[1];
            _this.calendarService.createEvent(_this.userDetail.email, _this.token, event)
                .then(function (data) {
                console.log(data);
                _this.onInsert.emit(null);
            });
        });
    };
    CreateEventComponent.prototype.createEvent = function () {
        if (!this.summary) {
            throw "Summary cannot be undefined";
        }
        return {
            'summary': this.type + ':' + this.summary,
            'start': {
                'dateTime': new Date(this.startDatetime).toISOString(),
                'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
            },
            'end': {
                'dateTime': this.addDay(this.startDatetime).toISOString(),
                'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
            },
            'attendees': [],
            'reminders': {
                'useDefault': false,
                'overrides': [
                    { 'method': 'popup', 'minutes': 24 * 60 },
                ]
            }
        };
    };
    CreateEventComponent.prototype.addDay = function (date) {
        var extra_day = new Date(date);
        extra_day.setDate(extra_day.getDate() + 1);
        return extra_day;
    };
    return CreateEventComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], CreateEventComponent.prototype, "onInsert", void 0);
CreateEventComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'create-event',
        template: __webpack_require__("../../../../../src/app/create-event.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__user_token_service__["a" /* UserTokenService */], __WEBPACK_IMPORTED_MODULE_2__calendar_service__["a" /* CalendarService */]],
        styles: [__webpack_require__("../../../../../src/app/create-event.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_token_service__["a" /* UserTokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_token_service__["a" /* UserTokenService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__calendar_service__["a" /* CalendarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__calendar_service__["a" /* CalendarService */]) === "function" && _b || Object])
], CreateEventComponent);

var _a, _b;
//# sourceMappingURL=create-event.component.js.map

/***/ }),

/***/ "../../../../../src/app/task-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div *ngFor=\"let item of events | paginate: { itemsPerPage: 3, currentPage: page }\">\n      <p>{{item.summary}}</p>\n      <button (click)=\"deleteEvent(item)\">x</button>\n    </div>\n    <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\n</div>"

/***/ }),

/***/ "../../../../../src/app/task-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_token_service__ = __webpack_require__("../../../../../src/app/user-token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_service__ = __webpack_require__("../../../../../src/app/calendar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskListComponent = (function () {
    function TaskListComponent(userTokenService, calendarService) {
        this.userTokenService = userTokenService;
        this.calendarService = calendarService;
        this.page = 1;
        this.userDetail = {};
        this.types = ['Homework', 'Task', 'Project'];
        this.eventCall = null;
    }
    TaskListComponent.prototype.getUser = function () {
        return [
            this.userTokenService.getUserInfo(),
            this.userTokenService.getIdentity()
        ];
    };
    TaskListComponent.prototype.ngOnInit = function () {
        this.setListofEvents();
    };
    TaskListComponent.prototype.setListofEvents = function () {
        var _this = this;
        this.events = [];
        var userPromise = this.getUser();
        Promise.all(userPromise)
            .then(function (userDetail) {
            _this.userDetail = userDetail[0];
            _this.token = userDetail[1];
            _this.getListofEvents(null);
        }).catch(function (error) { _this.handleError(error, 'userDetails'); });
    };
    TaskListComponent.prototype.getListofEvents = function (nextPage) {
        var _this = this;
        this.eventCall = this.calendarService.getEvents(this.userDetail.email, this.token, nextPage);
        this.eventCall.then(function (events) {
            var filtered_events = events.items.filter(function (event) {
                for (var i = 0; i < _this.types.length; i++) {
                    if (event.summary.includes(_this.types[i])) {
                        return true;
                    }
                }
                return false;
            });
            _this.events.push.apply(_this.events, filtered_events);
            if (events.nextPageToken) {
                _this.getListofEvents(events.nextPageToken);
            }
            else {
                return;
            }
        }).catch(function (error) { _this.handleError(error, 'getEvents'); });
    };
    TaskListComponent.prototype.deleteEvent = function (event) {
        var _this = this;
        this.calendarService.deleteEvent(event.creator.email, event.id, this.token)
            .then(function (data) {
            _this.events = _this.events.filter(function (array_event) {
                if (array_event != event) {
                    return true;
                }
                else {
                    return false;
                }
            });
        })
            .catch(function (error) { _this.handleError(error, 'deleteEvent'); });
    };
    TaskListComponent.prototype.handleError = function (error, location) {
        console.log('Error has occured in' + location);
        console.log('Error has occured', error);
        return Promise.reject(error.message || error);
    };
    return TaskListComponent;
}());
TaskListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'tasks-list',
        template: __webpack_require__("../../../../../src/app/task-list.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_token_service__["a" /* UserTokenService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_token_service__["a" /* UserTokenService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__calendar_service__["a" /* CalendarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__calendar_service__["a" /* CalendarService */]) === "function" && _b || Object])
], TaskListComponent);

var _a, _b;
//# sourceMappingURL=task-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-token.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserTokenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_service__ = __webpack_require__("../../../../../src/app/calendar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserTokenService = (function () {
    function UserTokenService(calendarService) {
        this.calendarService = calendarService;
    }
    UserTokenService.prototype.getIdentity = function () {
        return new Promise(function (resolve, reject) {
            chrome.identity.getAuthToken({ 'interactive': true }, function (token) {
                resolve(token);
            });
        });
    };
    UserTokenService.prototype.getUserInfo = function () {
        return new Promise(function (resolve, reject) {
            chrome.identity.getProfileUserInfo(function (data) {
                resolve(data);
            });
        });
    };
    UserTokenService.prototype.handleError = function (error) {
        console.log('Error has occured', error);
        return Promise.reject(error.message || error);
    };
    return UserTokenService;
}());
UserTokenService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__calendar_service__["a" /* CalendarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__calendar_service__["a" /* CalendarService */]) === "function" && _a || Object])
], UserTokenService);

var _a;
//# sourceMappingURL=user-token.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map