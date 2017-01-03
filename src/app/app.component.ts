///<reference path="../../typings/index.d.ts" />
import { Component, AfterViewInit, OnInit, OnDestroy} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PostService } from './post.service';
import { GithubService } from './github.service';

import {Observable} from 'rxjs/Rx';
// import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/fromArray';
import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/flatMap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [PostService, GithubService]
})
export class AppComponent implements OnInit, OnDestroy {
    form: FormGroup;
    isLoading = true;

    constructor(fb: FormBuilder, private _postService: PostService, private _githubService: GithubService) {
        // this._postService.getPosts()
        // .subscribe(posts => console.log (posts))
        this._postService.createPost({
            userId: 1,
            title: 'a',
            body: 'p'
        })

       

        this.form = fb.group({
            search: []
        });
        let search = this.form.get('search');
        search.valueChanges.debounceTime(400)
        .map(str => <string>str.replace(/\s+/g, '-') )
        .subscribe((x: any) => { console.log (x)});


        // let startDates = [];
        // let startDate = new Date();

        // for (let day = -2; day <= 2; day++) {
        //     let date = new Date(
        //         startDate.getFullYear(),
        //         startDate.getMonth(),
        //         startDate.getDate()
        //         + day
        //     );
        //     startDates.push(date);
        // }
        // Observable.from(startDates)
        // .map( (date: any) => { 
        //     console.log ('Getting deals for date '+ date);
        //     return [1, 2, 3];
        // })
        // .subscribe(x => console.log (x));

////////////////////////////
        // let observable = Observable.empty();
        // let observable = Observable.range(1,5);
        // let observable = Observable.from([1, 2, 3]);
        // let observable = Observable.of([1, 2, 3]);
        // observable.subscribe(x => console.log ('observable x=>',x));

////////////////////////////
        // let observable = Observable.interval(1000);
        // // observable.map( x => {
        // //     console.log ('Calling the server to get latest news');
        // //     return "here is the news of the day...";
        // // })
        // observable.flatMap( x => {
        //     console.log ('Calling the server for latest news');
        //     return Observable.of([
        //         { 'title': 'news1', 'url' : 'http://newsitem.1'},
        //         { 'title': 'news2', 'url' : 'http://newsitem.2'},
        //         { 'title': 'news3', 'url' : 'http://newsitem.3'},
        //     ]);
        // })
        // .subscribe(news => console.log ('interval x=>',news));

////////////////////////////
        // let userStream = Observable.of({
        //     userId: 1, username: 'david'
        // }).delay(2000);
        // let tweetStream = Observable.of([1,2,3]).delay(3000);
        // Observable.forkJoin(userStream, tweetStream)
        // .map(joined => new Object({user: joined[0], tweets: joined[1]}))
        // .subscribe(result => console.log (result), error => console.error(error) );

////////////////////////////
        // let errorObservable = Observable.throw(new Error ('Something failed'))
        // errorObservable.subscribe(x => console.log (x), error => console.error(error))
        // errorObservable.retry(3);

////////////////////////////
        // let counter = 0;
        // let ajaxCall = Observable.of('url')
        // .flatMap( () => {
        //     if (++counter < 2) {
        //      return Observable.throw(new Error('Request failed'));
        //     }
        //         return Observable.of([1, 2, 3]);
        // })
        // ajaxCall.retry(1).subscribe(x => console.log (x), error => console.error(error) );

////////////////////////////
        // let remoteStream = Observable.throw(new Error('Something failed.'));
        // let remoteStream = Observable.of([4, 5, 6]).delay(1500);
        // let remoteStream = Observable.from([4, 5, 6]).delay(1000);
        // remoteStream
        //     .timeout(2000)
        //     .catch( err => {
        //         let localDataStream = Observable.of([1, 2, 3]);
        //         return localDataStream;
        //     })
        //     .subscribe( x => console.log ('remoteStream?', x), 
        //     error => console.error(error),
        //     () => console.log ('completed')
        //      );

      }  // constructor


    ngOnInit () {
        // rxJS method
        // this._postService.getPosts()
        // .subscribe(posts => {
        //     this.isLoading = false;
        //     console.log (posts[0].body)}
        // )
        
        // Promise method
         this._postService.getPosts()
        .then(posts => {
            this.isLoading = false;
            console.log (posts[0].body)}
        )

        // let userStream = this._githubService.getUsers()
        // let followersStream = this._githubService.getFollowers();
        // Observable.forkJoin(userStream, followersStream)
        // .map(joined => new Object({user: joined[0], followers: joined[1]}))
        // .subscribe(result => console.log (result), error => console.error(error) );


        // this._githubService.getUsers()
        // .subscribe(users => {
        //     console.log (users);
        // })

        // this._githubService.getFollowers()
        // .subscribe(followers => {
        //     console.log (followers);
        // })

        // let $input = $('#search');
        // let keyups = Observable.fromEvent($input, 'keyup')
        // .map((e:any) => { return e.target.value; })
        // .filter( (text: string) => { return text.length >= 3; })
        // .debounceTime(400)
        // .distinctUntilChanged()
        // .flatMap( (searchTerm: string) => {
        //     let url: string = 'https://api.spotify.com/v1/search?type=artist&q=' + searchTerm;
        //     let jqueryXhr: JQueryXHR = $.getJSON(url);
        //     let promise: Promise<any> = Promise.resolve(jqueryXhr);
        //     return Observable.fromPromise(promise);
        // });

        // let subscription = keyups.subscribe((data:any) => { console.log(data) } );
        // subscription.unsubscribe();
    } //ngOnInit

    ngOnDestroy () {

    } // ngOnDestroy
// ***********************OLD METHOD WITH CALLBACKS
        // let debounced = _.debounce(function(text){
        //     let url="https://api.spotify.com/v1/search?type=artist&q="+text;
        //     $.getJSON(url,function(artists){
        //         console.log (artists);
        //     })
        // },400);
        // $('#search').keyup(function(e:any){
        //     let text = e.target.value;
        //     if (text.length<3) return;
        //     debounced(text);
        // })
}
