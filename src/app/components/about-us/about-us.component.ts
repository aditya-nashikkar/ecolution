import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'eco-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  providers: [NgbCarouselConfig]

})
export class AboutUsComponent implements OnInit {

  activeLink = 'aboutUs';

  showNavigationArrows = false;
  showNavigationIndicators = false;
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    }

  ngOnInit(): void {
  }

}
