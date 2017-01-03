import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { AlbumComponent } from './routes/album.component';
import { AlbumsComponent } from './routes/albums.component';
import { ContactComponent } from './routes/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubProfileComponent,
    AlbumComponent,
    AlbumsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    JsonpModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
