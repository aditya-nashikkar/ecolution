import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eco-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  activeLink = 'aboutUs';

  constructor() { }

  ngOnInit(): void {
  }

}
