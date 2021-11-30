import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalleryViewComponent } from './gallery-view/gallery-view.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ViewWorkComponent } from './view-work/view-work.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      OurWorkComponent,
      AboutComponent,
      WorkComponent,
      ContactComponent,
      GalleryViewComponent,
      ViewWorkComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [
      HttpClient
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
