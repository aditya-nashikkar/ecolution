import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TakeActionComponent } from './components/take-action/take-action.component';
import { EcoChoiceComponent } from './components/eco-choice/eco-choice.component';
import { HomeComponent } from './components/home/home.component';
import { AlertsComponent } from './components/alerts/alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    TopNavComponent,
    AboutUsComponent,
    TakeActionComponent,
    EcoChoiceComponent,
    HomeComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
