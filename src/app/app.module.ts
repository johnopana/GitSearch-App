import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { ProfileService } from "./profile.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
import { CustomDateFormat } from './date.pipe';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [AppComponent, ProfileComponent, CustomDateFormat, FooterComponent, HomeComponent, HighlightDirective],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})

export class AppModule {}
