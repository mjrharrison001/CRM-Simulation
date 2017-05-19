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
var users_service_1 = require('./users.service');
var UsersComponent = (function () {
    function UsersComponent(_usersService) {
        this._usersService = _usersService;
        this.isLoading = true;
        this.users = [];
        this.lastDate = "Never";
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateDate();
        this.updateUsers();
        var intervalId = setInterval(function () {
            _this.updateDate();
        }, 15000);
        var intervalId2 = setInterval(function () {
            _this.updateUsers();
        }, 15000);
    };
    UsersComponent.prototype.updateDate = function () {
        var _this = this;
        this._usersService.getDate()
            .subscribe(function (res) {
            console.log(res);
            _this.lastDate = res;
        }, null, function () { _this.isLoading = false; });
    };
    UsersComponent.prototype.updateUsers = function () {
        var _this = this;
        this._usersService.getUsers()
            .subscribe(function (res) {
            console.log(res);
            _this.users = res;
        }, null, function () { _this.isLoading = false; });
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'users-page',
            template: "\n              <h2>CRM - Scanned Driver's Licences</h2>\n              <div class=\"row\">\n              <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin fa-20x\"></i>\n              <div class=\"col-md-12\">\n              <h4>Last Succesful API call - {{ lastDate.date }}</h4>\n                <table class=\"table table-bordered\">\n                <tr><th>Name</th><th>Middle Name</th><th>Jurisdiction</th><th>Edit</th><th>Delete</th></tr>\n                <tr *ngFor=\"let user of users\">\n                  <td>{{ user.FirstName }}</td>\n                  <td>{{ user.MiddleName }}</td>\n                  <td>{{ user.JurisdictionCode }}</td>\n                  <td><a><i class=\"glyphicon glyphicon-edit\"></i></a></td>\n                  <td><a><i class=\"glyphicon glyphicon-remove\"></i></a></td>\n                </tr>\n                </table>\n              </div>\n              </div>\n            "
        }), 
        __metadata('design:paramtypes', [users_service_1.UsersService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map