import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Post } from './post';

@Injectable()
export class PostService {
  private _url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private _http: Http){

  }
  
  // getPosts() : Observable<Post>{
  //   return this._http.get(this._url).map(res => res.json() )
  // }

  getPosts() : Promise<Post>{
    return this._http.get(this._url).map(res => res.json()).toPromise();
  }

  createPost(post: Post){
    return this._http.post(this._url, JSON.stringify(post) )
              .map(res => res.json() )
  }
}
