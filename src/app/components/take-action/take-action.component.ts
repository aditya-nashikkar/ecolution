import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eco-take-action',
  templateUrl: './take-action.component.html',
  styleUrls: ['./take-action.component.scss']
})
export class TakeActionComponent implements OnInit {

  activeLink = 'takeAction';
  infoSectionHeader = 'How does your carbon footprint compare?​'
  infoSectionMain = ['Plastic surrounds us and is part of everything we do. From our clothes to our cars, packaging for everything from our lunch to our online orders, plastic is in every room of our homes. It is even in our walls.', 'Our Carbon Footprint Calculator looks beyond single use plastics/non-degradable items to help us understand the full story of plastics and  in our lives and the impact of our choices.'];

  constructor() { }

  ngOnInit(): void {
  }

}
