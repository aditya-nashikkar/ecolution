import { Component, OnInit } from '@angular/core';
import { AlternativeProduct } from 'src/app/models/alternative-product';
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
  selectedProject: AlternativeProduct = {
    searchedProduct: {
      productName: '',
      carbonFootprint: 0,
      imagePath: ''
    }, 
    alternativeProducts: []
  };
  selectedProjectName = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.productsList);
  }

  selectProduct(): void {
    this.selectedProject = this.productsList.filter(fl => fl.searchedProduct.productName === this.selectedProjectName)[0];
    console.log(this.selectedProject.searchedProduct.imagePath);
  }

}
