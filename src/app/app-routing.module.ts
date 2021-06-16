import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { EcoChoiceComponent } from './components/eco-choice/eco-choice.component';
import { HomeComponent } from './components/home/home.component';
import { TakeActionComponent } from './components/take-action/take-action.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'take-action', component: TakeActionComponent },
  { path: 'eco-choice', component: EcoChoiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
