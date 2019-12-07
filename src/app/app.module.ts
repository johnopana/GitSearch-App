import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClietModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { profileService } from './services/profile/services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule



  ],
  providers: [profileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
