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
  CARBON_FOOTPRINT = 'Carbon footprint';
  productsList = ecoChoiceConstant.PRODUCTS_LIST;
  selectedProject: AlternativeProduct = {
    searchedProduct: {
      productName: '',
      carbonFootprint: 0,
      imagePath: ''
    }, 
    alternativeProducts: []
  };
  selectedAlternativeProduct = {
    productName: '',
    carbonFootprint: 0,
    imagePath: ''
  };
  selectedProjectName = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  selectProduct(): void {
    this.selectedProject = this.productsList.filter(fl => fl.searchedProduct.productName === this.selectedProjectName)[0];
    this.selectedAlternativeProduct = this.selectedProject.alternativeProducts[0];
  }

  selectAlternativeProduct(index: number): void {

    for (const counter in this.selectedProject.alternativeProducts) {
      this.selectedProject.alternativeProducts[counter].isSelected = false;
    }
    this.selectedProject.alternativeProducts[index].isSelected = true;
    this.selectedAlternativeProduct = this.selectedProject.alternativeProducts[index];
  }

}
