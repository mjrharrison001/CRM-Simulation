import { Component, OnInit }        from '@angular/core';
import { Observable }       from 'rxjs/Rx';

import { UsersService }    from './users.service';

@Component({
  selector: 'users-page',
  template: `
              <h2>CRM - Scanned Driver's Licences</h2>
              <div class="row">
              <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-20x"></i>
              <div class="col-md-12">
              <h4>Last Succesful API call - {{ lastDate.date }}</h4>
                <table class="table table-bordered">
                <tr><th>Name</th><th>Middle Name</th><th>Jurisdiction</th><th>Edit</th><th>Delete</th></tr>
                <tr *ngFor="let user of users">
                  <td>{{ user.FirstName }}</td>
                  <td>{{ user.MiddleName }}</td>
                  <td>{{ user.JurisdictionCode }}</td>
                  <td><a><i class="glyphicon glyphicon-edit"></i></a></td>
                  <td><a><i class="glyphicon glyphicon-remove"></i></a></td>
                </tr>
                </table>
              </div>
              </div>
            `
})
export class UsersComponent implements OnInit {
  isLoading = true;
  users = [];
  lastDate = "Never";

  constructor(private _usersService : UsersService){
  }

  ngOnInit(){
    this.updateDate();
    this.updateUsers();

    let intervalId = setInterval(() => {
       this.updateDate();
    }, 15000);

    let intervalId2 = setInterval(() => {
       this.updateUsers();
    }, 15000);
  }

  updateDate(){
    this._usersService.getDate()
      .subscribe(res => {
        console.log(res);
        this.lastDate = res;
      },
      null,
      () => {this.isLoading = false}
      );
  }

  updateUsers(){
    this._usersService.getUsers()
      .subscribe(res => {
        console.log(res);
        this.users = res;
      },
      null,
      () => {this.isLoading = false}
      );
  }
}
