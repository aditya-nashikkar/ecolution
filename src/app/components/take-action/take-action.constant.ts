export class TakeActionConstant {
    static readonly USER_QUESTIONS = [
        {
            question: 'Please select applicable age group?',
            options: [
                {
                    optionKey: 'Below 18',
                    optionValue: 'below_18'
                },
                {
                    optionKey: '18-45',
                    optionValue: 'in_18_45'
                },
                {
                    optionKey: 'Above 45',
                    optionValue: 'above_45'
                }
            ],
            factImage: './../../../assets/images/question/question_1.jpg',
            fact: {
                factHeader: 'DID YOU KNOW?',
                factMainContent: '10% of the plastic produced in Europe is used in the Automotive industry. An average car lasts 8 years and contains over 300 kg of plastic. \n\n Cars per capita range from a high of 1.27 in San Marino to only .002 in Sao Tome and Principe. The US average is .838 cars per person.'
            }
        }
    ];
}