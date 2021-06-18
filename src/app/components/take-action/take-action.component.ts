import { Component, OnInit } from '@angular/core';
import { UserQuestion } from 'src/app/models/user-question';
import { TakeActionService } from 'src/app/services/take-action.service';
import { TakeActionConstant as takeActionConstant } from './take-action.constant';
import * as HighCharts from 'highcharts';

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
  selectedOptions = ['below 18', 'Rural', 'Student', 'Andaman and Nicobar Islands'];
  cityFootPrint = [3.7];
  userFootPrint = [];

  finalObject = [
    {
      Age: [
        {
          'Below 18': 0,
          '18 to 45': 1,
          'Above 45': 0
        }
      ],
      Location: [
        {
          'Rural': 0,
          'Urban': 1
        }
      ],
      Occupation: [
        {
          'Student': 1,
          'Professional': 0,
          'Self-emplyed': 0,
          'Housewife': 0,
          'Other': 0
        }
      ]
    }
  ];

  message = '';

  constructor(private takeActionService: TakeActionService) { }

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

  submitForm(): void {
    this.userFootPrint = [];
    this.takeActionService.predict(this.finalObject).subscribe((data) => {
      this.userFootPrint.push(data.prediction);
      this.barChartPopulation();
      // if (parseInt(data.prediction) > parseInt(this.userFootPrint[0])) {
      //   this.message = 'Your carbon footprint is ' + (parseInt(data.prediction) - parseInt(this.userFootPrint[0])) + ' lesser than your entire city\'\s footprint';
      // } else {
      //   this.message = 'Your carbon footprint is ' + (parseInt(this.userFootPrint[0]) - parseInt(data.prediction)) + ' greater than your entire city\'\s footprint';
      // }
      
      document.getElementById('modal-trigger').click();
    })
  }

  barChartPopulation() {
    HighCharts.chart('barChart', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Carbon footprint'
      },
      xAxis: {
        categories: ['Comparision']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Carbon footprint (KG)',
          align: 'high'
        },
      },
      tooltip: {
        valueSuffix: ' carbon footprint (KG)'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [{
        type: undefined,
        name: 'Your annual footprint',
        data: this.userFootPrint
      }, {
        type: undefined,
        name: 'Avg in your city',
        data: this.cityFootPrint
      }]
    });
  }

}
