import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';



@Injectable()
export class GithubService {
  private _urlGithub = 'https:/api.github.com/users/';
  // private _urlUsers = 'https:/api.github.com/users/octocat';
  // private _urlFolllowers = 'https://api.github.com/users/octocat/followers'  ;

  constructor(private _http: Http){  }
  
  getUser(username) {
    return this._http.get(this._urlGithub+username).map(res => res.json() )
  }

  getFollowers(username) {
    return this._http.get(this._urlGithub+username+"/followers").map(res => res.json() )
  }


}
