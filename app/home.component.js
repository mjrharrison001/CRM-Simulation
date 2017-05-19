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
var core_1 = require('@angular/core');
//import {Router} from '@angular/router';
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-page',
            template: "\n              <h2>CRM Simulation Task</h2>\n              <div class=\"row\">\n              <div class=\"col-md-12\">\n              <p>This application models the following simulation task:</p>\n              <p>A CRM module exists with a \"lead\" module which represents the very first step of\n              signing up a customer.  Based on various information (i.e. person's credit score),\n              in that particular lead we may or may not sign up that person as a cusomter.</p>\n              <p>Currently service reps. are creating those leads manually from the\n              infromation they got from the phone call with the cusomter. We wish\n              automize this process to remove human mustakes our of the equation.</p>\n              <p>We will integrate this process with a 3rd party application called\n              <a href=\"https://veriscanonline.com\">VeriScan online.</a> This application\n              will scan a driver's license of a customer and create an object\n              in thier database with cusomer's info. This is thier API:\n              <a href=\"https://github.com/IDScanNet/VSOnlineHistoryExportSample\">VSOnlineHistoryExportSample</a></p>\n              <p class=\"text-info\">Task: Create a sheduled job that queries thier API every 15 seconds\n              to check whether there are any new scans in thier database and push any new ones\n              into the CRM back-end Lead Table.</p>\n              Solution:\n              <ul>\n                <li>Create Daemon running on Node.JS back-end (on 15 second interval)</li>\n                <li>Call VeriScan API and collect a list of all recently scanned IDs</li>\n                <li>Call CRM database and return stored IDs</li>\n                <li>If number of VeriScan IDs > CRM sort VeriScan IDs and add only the most recent</li>\n                <li>Store onto CRM database</li>\n                <li>Create this Angular 2 interface to track updates</li>\n              </ul>\n              <p>Note: Updates will only occur if scans are made under - <br>\n              Login: mjrharrison001@gmail.com<br>\n              Password: 5e1443c1<br><i>(30 day trial)</i></p>\n              <p><a href=\"https://crm-simulation.herokuapp.com/users\">Node.JS URL</a></p>\n              <p><a href=\"https://crm-simulation.herokuapp.com/users\">Node.JS GitHub</a></p>\n              <p><a routerLink=\"users\">See Scanned Driver's Licences</a></p>\n              <p><a href=\"https://crm-simulation.herokuapp.com/users\">This Angular 2 GitHub</a></p>\n              <p> - Michael Harrison</p>\n              </div>\n              </div>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map