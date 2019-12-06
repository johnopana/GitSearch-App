import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { profileService } from './services/profile.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
    HttpModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [profileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
