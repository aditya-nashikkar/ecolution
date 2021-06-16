import { Component, OnInit } from '@angular/core';
import { UserQuestion } from 'src/app/models/user-question';
import { TakeActionConstant as takeActionConstant } from './take-action.constant';

@Component({
  selector: 'eco-take-action',
  templateUrl: './take-action.component.html',
  styleUrls: ['./take-action.component.scss']
})
export class TakeActionComponent implements OnInit {

  activeLink = 'takeAction';
  infoSectionHeader = 'How does your carbon footprint compare?​'
  infoSectionMain = ['Plastic surrounds us and is part of everything we do. From our clothes to our cars, packaging for everything from our lunch to our online orders, plastic is in every room of our homes. It is even in our walls.', 'Our Carbon Footprint Calculator looks beyond single use plastics/non-degradable items to help us understand the full story of plastics and  in our lives and the impact of our choices.'];
  userQuestion: Array<UserQuestion> = takeActionConstant.USER_QUESTIONS;
  selectedQuestionNumber = 0;
  selectedQuestion = this.userQuestion[this.selectedQuestionNumber];

  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedQuestion);
  }

  getQuestionByNumber(step: string) {
    if (step === 'next') {
      this.selectedQuestionNumber += 1;
    } else if (step === 'previous') {
      this.selectedQuestionNumber -= 1;
    }
    this.selectedQuestion = this.userQuestion[this.selectedQuestionNumber];
  }

}
