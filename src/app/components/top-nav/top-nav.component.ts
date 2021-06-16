import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { GlobalConstant as globalConstant } from 'src/app/constant/global-constant';
import { TopNav } from 'src/app/models/top-nav';

@Component({
  selector: 'eco-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  @Input('activeLink') activeLink: string = '';

  links: Array<TopNav> = [
    {
      linkName: 'Home',
      linkValue: 'home',
      routeTo: '/home'
    },
    {
      linkName: 'About us',
      linkValue: 'aboutUs',
      routeTo: '/about-us'
    },
    {
      linkName: 'Take action',
      linkValue: 'takeAction',
      routeTo: '/take-action'
    },
    {
      linkName: 'Eco choice',
      linkValue: 'ecoChoice',
      routeTo: '/eco-choice'
    },
  ];
  
  logoName = globalConstant.ECOLUTION;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeToPage(routeLink: string): void {
    this.router.navigate([routeLink]);
  }

}
