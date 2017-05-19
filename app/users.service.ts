import { Injectable  }        from '@angular/core';
import { Http }               from '@angular/http';
import { Observable }         from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  private _baseUrls = "https://crm-simulation.herokuapp.com/";

  constructor(private _http: Http) { }

  getUsers() {
      return this._http.get(this._baseUrls + 'users')
          .map(res => res.json());
  }

  getDate() {
    return this._http.get(this._baseUrls + 'users/lastUpdated')
        .map(res => res.json());
  }
}
