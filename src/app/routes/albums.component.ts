import { Component, OnInit } from '@angular/core';
import {PhotoService} from './photo.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styles: []
})
export class AlbumsComponent implements OnInit {
 
  isLoading = true;
  albums;

  constructor(private _photoService: PhotoService){
  }
  
    ngOnInit(){
        this._photoService.getAlbums()
            .subscribe(albums => {
                this.isLoading = false;
                this.albums = albums;
            });
    }
}
