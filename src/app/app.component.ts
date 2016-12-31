///<reference path="../../typings/index.d.ts" />
import { Component, AfterViewInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/fromEvent';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/flatMap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    constructor() { }

    ngAfterViewInit () {
         $('#search').keyup(function(e: any){
            console.log (e.target.value);
        });

        let $input = $('search');
        let keyups = Observable.fromEvent($input,'keyup')
        .map((e:any) => {return e.target.value })
        .filter( (text: string) => { return text.length >= 3 })
        .debounceTime(400)
        .distinctUntilChanged()
        .flatMap( (searchTerm: string) => {
            console.log ('searchTerm', searchTerm);
            let url: string = 'https://api.spotify.com/v1/search?type=artist&q=' + searchTerm;
            let jqueryXhr: JQueryXHR = $.getJSON(url);
            let promise: Promise<any> = Promise.resolve(jqueryXhr);
            return Observable.fromPromise(promise);
        });

        let subscription = keyups.subscribe((data:any) => { console.log(data) } );
        // subscription.unsubscribe();
    }

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
