import {Router, RouterModule } from '@angular/router';
// import {AppComponent } from './app.component';
import {Page1Component } from './routes/page1/page1.component';
import {Page2Component } from './routes/page2/page2.component';
import {HomeComponent } from './routes/home/home.component';


export const routing = RouterModule.forRoot([
    {   path: '', component: HomeComponent  },
    {   path: 'page1', component: Page1Component},
    {   path: 'page2', component: Page2Component},
    {   path: '**', component: HomeComponent}

])