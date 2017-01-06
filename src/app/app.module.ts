import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { AlbumComponent } from './routes/album.component';
import { AlbumsComponent } from './routes/albums.component';
import { ContactComponent } from './routes/contact.component';
import { routing }  from './app.routing';
import { Page1Component } from './routes/page1/page1.component';
import { Page2Component } from './routes/page2/page2.component';
import { HomeComponent } from './routes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubProfileComponent,
    AlbumComponent,
    AlbumsComponent,
    ContactComponent,
    Page1Component,
    Page2Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    JsonpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
