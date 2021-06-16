import { Component, OnInit } from '@angular/core';
import { EcoChoiceConstant as ecoChoiceConstant } from './eco-choice.constant';

@Component({
  selector: 'eco-eco-choice',
  templateUrl: './eco-choice.component.html',
  styleUrls: ['./eco-choice.component.scss']
})
export class EcoChoiceComponent implements OnInit {

  activeLink = 'ecoChoice';
  availableProducts = ecoChoiceConstant.AVAILABLE_PRODUCTS;
  productsList = ecoChoiceConstant.PRODUCTS_LIST;

  constructor() { }

  ngOnInit(): void {
    console.log(this.productsList);
  }

}
