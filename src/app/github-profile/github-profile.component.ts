import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  isLoading = true;
  username = 'octocat';
  user = {};
  followers = [];

  constructor(private _githubService: GithubService) {   }

  ngOnInit() {
    let userStream = this._githubService.getUser(this.username)
    let followersStream = this._githubService.getFollowers(this.username);
    Observable.forkJoin(userStream, followersStream)
    .subscribe(
      result => {
        this.user = result[0];
        this.followers = result[1];
      },
      null,
      () => { this.isLoading = false; } )
  }
}