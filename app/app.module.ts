import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { routing }            from './app.routing';

import { AppComponent }       from './app.component';
import { NavComponent }       from './nav.component';
import { HomeComponent }      from './home.component';
import { NotFoundComponent }  from './not-found.component';
import { UsersComponent }     from './users.component';
import { PostsComponent }     from './posts.component';
import { UsersService }       from './users.service';


@NgModule({
  imports: [
    BrowserModule,
    routing, HttpModule, JsonpModule
  ],
  declarations: [
    AppComponent, NavComponent, HomeComponent,
    NotFoundComponent, UsersComponent, PostsComponent
  ],
  providers: [
    UsersService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
