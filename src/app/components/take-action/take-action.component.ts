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
  infoSectionMain = ['The Earth’s average temperature has increased about 1.5°F in the past hundred years. It doesn’t sound like much, but scientists think that the temperature increase has caused melting glaciers, drought, and coral reef die-off. (Coral can’t survive in water that’s too warm.) They expect the climate will warm another .5°F to 8.6°F by the year 2100.', 'Hundreds of plant and animal species have already experienced changes because of climate change. Your everyday actions affect people, plants, and animals all over the world—including YOU! So be cool by doing your best to keep Earth well … cool!'];
  userQuestion: Array<UserQuestion> = takeActionConstant.USER_QUESTIONS;
  selectedQuestionNumber = 0;
  selectedQuestion = this.userQuestion[this.selectedQuestionNumber];

  constructor() { }

  ngOnInit(): void {
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
