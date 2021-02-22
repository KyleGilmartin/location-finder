import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2'
import { FormsModule } from '@angular/forms'
import {HttpClient} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component'

export const firebaseConfig = {
 
  apiKey: "AIzaSyDMGvMuOAbqztSzo7gq6okKEDeIuk_BXmw",
  authDomain: "locationapp-9a780.firebaseapp.com",
  projectId: "locationapp-9a780",
  storageBucket: "locationapp-9a780.appspot.com",
  messagingSenderId: "372934126302",
  appId: "1:372934126302:web:f2486d72196ccca23fb04f",
  measurementId: "G-7RM9W3TT9C"

};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClient,
    AngularFireModule.initializeApp(firebaseConfig),
    routes

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
