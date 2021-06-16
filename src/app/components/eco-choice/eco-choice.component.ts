import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eco-eco-choice',
  templateUrl: './eco-choice.component.html',
  styleUrls: ['./eco-choice.component.scss']
})
export class EcoChoiceComponent implements OnInit {

  activeLink = 'ecoChoice';

  constructor() { }

  ngOnInit(): void {
  }

}
