import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {TwitterService} from './twitter.service';
import {CallbackComponent} from './callback.component';
import {SignInSuccessService} from './sign-in-success.service';
import {Angular2FontawesomeModule} from 'angular2-fontawesome/angular2-fontawesome';

import { SignedComponent } from './signed/signed.component';
import { UIRouterModule, Transition} from '@uirouter/angular';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {
  MdButtonModule, MdCoreModule, MdIconModule, MdIconRegistry, MdInputModule,
  MdMenuModule
} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {States} from './states';


@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    SignedComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdIconModule, MdMenuModule, MdCoreModule, MdButtonModule, MdInputModule,
    InfiniteScrollModule,
    UIRouterModule.forRoot({states: [States.signedState, States.callbackState, States.signedUserState], useHash: false}),
  ],
  providers: [TwitterService, SignInSuccessService, MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }




