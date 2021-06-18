import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'eco-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent implements OnInit {

  @Input() imagePath = '';
  @Input() productName = '';
  @Input() price = '';
  @Input() sellerName = '';

  constructor() { }

  ngOnInit(): void {
    
  }

}
