import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {PhotoService} from './photo.service';

@Component({
  selector: 'app-album',
  template: `
   <h1>Album</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <div>
            <img *ngFor="let photo of photos" src="{{ photo.thumbnailUrl }}">
        </div>
  `,
  styles: []
})
export class AlbumComponent implements OnInit {
   isLoading = true;
    photos;
  constructor(private _photoService: PhotoService){
    }
    
    ngOnInit(){
        this._photoService.getPhotos(1)
            .subscribe(photos => {
                this.isLoading = false;
                this.photos = photos;
            });
    }

}
