import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Post2Component } from './post2/post2.component';
import {Post4Component} from "./post4/post4.component";
import { PostTrainingComponent } from './post-training/post-training.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    Post2Component,
    Post4Component,
    PostTrainingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
