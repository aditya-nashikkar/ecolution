import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TakeActionComponent } from './components/take-action/take-action.component';
import { EcoChoiceComponent } from './components/eco-choice/eco-choice.component';
import { HomeComponent } from './components/home/home.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { HighchartApiComponent } from './components/highchart-api/highchart-api.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    TopNavComponent,
    AboutUsComponent,
    TakeActionComponent,
    EcoChoiceComponent,
    HomeComponent,
    AlertsComponent,
    AdvertisementComponent,
    HighchartApiComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
