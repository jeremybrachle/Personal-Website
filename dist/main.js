(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*profile image */\nimg.profileImg {\n  width: 15vw;\n  margin-left: auto;\n  margin-right: 1em;\n  border-radius: 5em 0.3em;\n  float: left;\n}\n/* disclaimer */\n.disclaimer {\n  clear: left;\n}\n/* table section */\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\ntd, th {\n  border: 0.1em solid #dddddd;\n  text-align: left;\n  padding: 8px;\n  opacity: 1.0;\n}\ntd:hover {\n  opacity: 0.5;\n}\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n/* end table section */\n/* media queries */\n/* after collapse */\n@media only screen and (max-width: 767px) {\n  img.profileImg {\n    width: 9em;\n  }\n}\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>About</h2>\n\n  <p>\n    <img class=\"profileImg\" src=\"../../assets/images/Me.JPG\" alt=\"Jeremy\">\n    I'm a Computer Science major in my junior year at\n    Southern Methodist University in Dallas, Texas.\n    I was born in Denver, Colorado and raised in Naples, Florida.\n    I'm the youngest of four and the godfather to two of my five nieces.\n    When I'm not programming, I'm usually running on the beach, taking pictures of said beach,\n    contributing to the literary zeitgeist with my debilitatingly sarcastic short stories, or\n    composing cacophonous percussion music for my own personal enjoyment (so as to spare any victim's\n    ear from the recesses of my aural insanity for what I define as music).\n    I also drink tea.\n    Below you'll find lists of my hobbies and interests:\n  </p>\n  <div class=\"disclaimer\">\n    <hr>\n    <strong>NOTE: </strong> all images used on this site were taken by me.\n  </div>\n\n  <br>\n\n  <section>\n  <div>\n      <table>\n          <tr>\n              <th>Hobbies:</th>\n          </tr>\n          <tr>\n              <td>Programming</td>\n          </tr>\n          <tr>\n              <td>Photography</td>\n          </tr>\n          <tr>\n              <td>Running</td>\n          </tr>\n          <tr>\n              <td>Writing short stories</td>\n          </tr>\n          <tr>\n              <td>Composing music</td>\n          </tr>\n      </table>\n  </div>\n\n  <br>\n  <hr>\n  <br>\n\n  <div>\n      <table>\n          <tr>\n              <th>Interests:</th>\n          </tr>\n          <tr>\n              <td>Computer Science</td>\n          </tr>\n          <tr>\n              <td>Technology</td>\n          </tr>\n          <tr>\n              <td>Romantic period classical music</td>\n          </tr>\n          <tr>\n              <td>Film</td>\n          </tr>\n          <tr>\n              <td>Sarcasm</td>\n          </tr>\n          <tr>\n              <td>Star Wars</td>\n          </tr>\n      </table>\n  </div>\n  </section>\n</div>\n<br>\n<br>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import the components




// set up the routes
var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'experience', component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<!-- wrap router outlet inside of a div tag to section off this class -->\n<div class=\"PageContent\">\n  <router-outlet></router-outlet>\n</div>\n<!-- this is done so that everything in each page can't... -->\n<!-- ...be clicked when the nav bar is expanded is lower width mode -->\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Website of Jeremy Brachle';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
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
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contactMe {\n\twidth: 30em;\n\tposition: fixed;\n  border: 0.1em solid black;\n  padding-left: 1em;\n  padding-right: 1em;\n  padding-bottom: 1em;\n  background-color: lightgrey;\n  margin: 0em 1em 4em 9em;\n  border: 0.135em solid black;\n  box-shadow: .2em .2em #003F87;\n}\n\nh2{\n  margin-top: 0.5em;\n}\n\nimg {\n  z-index: -1;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n}\n\n.inputData {\n  margin: 0.2em 0em;\n  width: 100%;\n  padding: 1em;\n  display: block;\n}\n\n#message {\n  height: 12em;\n  resize: vertical;\n}\n\nbutton {\n  background-color: #333;\n  color: white;\n}\n\n/* media queries */\n\n/* before collapse */\n\n@media only screen and (min-width: 768px) {\n  h2{\n    font-size: 2.5em;\n  }\n  .contactMe{\n    font-size: 0.7em;\n  }\n  img{\n    top: 0px;\n  }\n}\n\n/* after collapse */\n\n@media only screen and (max-width: 767px) { /* navbar collapses at 767 pixels */\n  h2{\n    font-size: 3.4em;\n  }\n  .contactMe{\n    font-size: 0.5em;\n    margin-left: 3em;\n    display: block;\n  }\n  img{\n    top: 62px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contactMe\">\n  <h2>Contact</h2>\n  <p>Send me a message and I'll get in touch with you within 24 hours!</p>\n\n  <form id=\"contact\" action=\"\" method=\"post\">\n    <input placeholder=\"Name\" class=\"inputData\" type=\"text\" tabindex=\"1\" required autofocus>\n    <br>\n    <input placeholder=\"Email\" class=\"inputData\" type=\"text\" tabindex=\"2\" required>\n    <br>\n    <textarea id=\"message\" placeholder=\"Type your message here\" class=\"inputData\" tabindex=\"3\" required></textarea>\n    <br>\n    <button name=\"submit\" class=\"inputData\" type=\"submit\" id=\"contact-submit\" data-submit=\"...Sending\">\n      Submit\n    </button>\n  </form>\n</div>\n\n<div>\n  <img class=\"contactImg\" src=\"../../assets/images/Sunset.jpg\" alt=\"Sunset\">\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* table section */\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\ntd, th {\n  border: 0.1em solid #dddddd;\n  text-align: left;\n  padding: 8px;\n  opacity: 1.0;\n}\ntd:hover {\n  opacity: 0.5;\n}\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n/* end table section */\n"

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2>Courses</h2>\n    <p>Below are some courses I have taken at Southern Methodist University for my Computer Science Degree</p>\n\n    <section>\n    <div>\n        <table>\n            <tr>\n                <th>Relevant Coursework:</th>\n            </tr>\n            <tr>\n                <td>Data Structures</td>\n            </tr>\n            <tr>\n                <td>Algorithms</td>\n            </tr>\n            <tr>\n                <td>Programming Languages</td>\n            </tr>\n            <tr>\n                <td>Databases</td>\n            </tr>\n            <tr>\n                <td>Graphical User Interfaces</td>\n            </tr>\n            <tr>\n                <td>Digital Computer Design using Verilog</td>\n            </tr>\n            <tr>\n                <td>Operating Systems</td>\n            </tr>\n            <tr>\n                <td>Information Assurance and Security</td>\n            </tr>\n            <tr>\n                <td>Software Engineering</td>\n            </tr>\n        </table>\n    </div>\n    </section>\n</div>\n\n<br>\n<br>\n"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
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

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-bottom text-center bg-dark\">\n    <div class=\"text-white\">\n      &copy; 2018 Jeremy Brachle\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* navbar brand */\n.navbar-brand{\n  position: fixed;\n  top: 0em;\n  left: 2em;\n  background-color: lightgrey;\n  border: 0.05em solid black;\n  font-size: 2.7vw;\n  padding: 0.7em 0.7em;\n  z-index: 2;\n  display: block;\n  text-decoration: none;\n  color: black;\n  box-shadow: .15em .15em #003F87;\n}\n/* make sure hovering doesn't change the color of it */\n.navbar-brand:hover {\n  color: black;\n}\n.navbar-brand:focus {\n  color: black;\n}\n/* navbar */\n.navbar{\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  margin-bottom: 3em;\n\n}\nnav{\n  background-color: #333;\n}\n/* navbar items */\nul li a {\n  font-size: 0.8em;\n  text-align: center;\n  text-decoration: none;\n  display: block;\n  padding: 2.3em 3em;\n  border-radius: 5em 0.3em;\n}\n/* hovering over other items */\nul li a:hover {\n  background-color: #111;\n  color: white;\n}\n/* button for the active page, override the blue color for current */\n.active {\n  background-color: #003F87 !important;\n}\n/* media queries: */\n/* before collapse */\n@media only screen and (min-width: 768px) {\n  .nav-item {\n    font-size: 1.5vw;\n  }\n  .nav-link {\n    margin: 0em 0.25em;\n  }\n  .navbar{\n    padding: 0em\n  }\n}\n/* after collapse */\n@media only screen and (max-width: 767px) { /* navbar collapses at 767 pixels */\n  .navbar-brand{\n    font-size: 1.4em;\n    left: 1em;\n  }\n  .navbar{\n    padding: 0.7em\n  }\n  .nav-link {\n    margin: 0em;\n    font-size: 0.7em;\n  }\n  /* shift the top link down for the drop down to account for the navbar brand */\n  .topLink{\n    margin-top: 25px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- check to see which link is activated, but use exact match for the home page -->\n<nav class=\"navbar navbar-expand-md navbar-dark navbar-fixed-top CustomHeader\">\n\n  <!-- navbar brand -->\n  <a class=\"navbar-brand\" routerLink=\"/\">Jeremy Brachle</a>\n\n  <!-- toggler -->\n  <button class=\"navbar-toggler ml-auto\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <!-- navbar content -->\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item topLink\">\n        <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/experience\" routerLinkActive=\"active\">Experience</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a>\n      </li>\n    </ul>\n  </div>\n\n\n\n\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // collapse the navbar when a link is clicked
        $('.navbar-brand, ul > li > a').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        });
        // collapse if clicked outside of the navbar
        $(document).click(function (e) {
            if (!$(e.target).is('panel-body')) {
                $('.navbar-collapse').collapse('hide');
            }
        });
        /*
        // enable everything to be clicked when the navbar is not collapsed
        $('.navbar-collapse').on('show.bs.collapse', function () {
          $('.SpecialCase *').prop('disabled', true);
        });
    
        // disable everything when the navbar is collapsed
        // (prevents unwanted clicking when the user just
        // wants to exit the navbar)
        $('.navbar-collapse').on('hide.bs.collapse', function () {
          $('.SpecialCase *').prop('disabled', false);
        });
        */
        // EXPANDED NAV BAR
        // enable everything to be clicked when the navbar is not collapsed
        $('.navbar-collapse').on('show.bs.collapse', function () {
            $('.PageContent *').prop('disabled', true);
        });
        // COLLAPSED NAV BAR
        // disable everything when the navbar is collapsed
        // (prevents unwanted clicking when the user just
        // wants to exit the navbar)
        $('.navbar-collapse').on('hidden.bs.collapse', function () {
            $('.PageContent *').prop('disabled', false);
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* statement */\n.statement {\n  border: 0.1em solid black;\n  padding: 0em;\n  text-align: center;\n  background-color: lightgrey;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: .2em .2em #003F87;\n}\n.container{\n  -webkit-text-fill-color: white;\n  /* text-shadow: 2px 2px 4px #000000; */\n  text-shadow: 1px 1px 2px black, 0 0 5px black, 0 0 3px #003F87;\n}\nimg {\n  z-index: -1;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0px;\n}\n/* media queries */\n/* before collapse */\n@media only screen and (min-width: 768px) {\n  .statement {\n    font-size: 1em;\n    width: 60%;\n  }\n}\n/* after collapse */\n@media only screen and (max-width: 767px) {\n  .statement {\n    font-size: 1.9vw;\n    width: 60%;\n  }\n}\n/* override to make the font readable on mobile screens */\n@media only screen and (max-width: 567px) {\n  .statement {\n    font-size: 2.7vw;\n    width: 90%;\n  }\n}\n\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<!--PAGE DATA-->\n    <h2>Home</h2>\n\n    <p>Welcome to the website of Jeremy Brachle! Click on the links above to learn stuff about me</p>\n\n</div>\n\n\n<div class=\"statement\">\n  <strong>Statement of Skill:</strong><br>\n  I am the very model of a modern major programmer<br>\n  I've information: algorithms, data-structures, tech support<br>\n  I code in many languages, I list their names syntactically, <br>\n  from C++ to JavaScript in order polymorphically<br>\n  I'm very well acquianted too with matters compilational<br>\n  I understand numerics both binary, hexadecimal<br>\n  About full stack development I'm brimming with a lot of skill...<br>\n  With much dexterity in coding CSS and MySQL<br>\n  I'm very good at data-mining, information processing <br>\n  I know assembly code and principles of mulitprogramming <br>\n  In short in matters algorithms, data-structures, tech support<br>\n  I am the very model model of a modern major programmer <br>\n</div>\n\n<div>\n  <img class=\"homeImg\" src=\"../../assets/images/Beach.jpg\" alt=\"Beach\">\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jeremybrachle/Documents/Programming/Angular/PersonalWebsite/BrachleWebsite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map