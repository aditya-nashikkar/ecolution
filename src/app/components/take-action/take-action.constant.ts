export class TakeActionConstant {

    static readonly INDIAN_STATE_NAMES = [
        {
          optionKey: 'Andaman and Nicobar Islands',
          optionValue: 'Andaman and Nicobar Islands'
        },
        {
          optionKey: 'Andhra Pradesh',
          optionValue: 'Andhra Pradesh'
        },
        {
          optionKey: 'Arunachal Pradesh',
          optionValue: 'Arunachal Pradesh'
        },
        {
          optionKey: 'Assam',
          optionValue: 'Assam'
        },
        {
          optionKey: 'Bihar',
          optionValue: 'Bihar'
        },
        {
          optionKey: 'Chandigarh',
          optionValue: 'Chandigarh'
        },
        {
          optionKey: 'Chhattisgarh',
          optionValue: 'Chhattisgarh'
        },
        {
          optionKey: 'Dadra and Nagar Haveli',
          optionValue: 'Dadra and Nagar Haveli'
        },
        {
          optionKey: 'Daman and Diu',
          optionValue: 'Daman and Diu'
        },
        {
          optionKey: 'Delhi',
          optionValue: 'Delhi'
        },
        {
          optionKey: 'Goa',
          optionValue: 'Goa'
        },
        {
          optionKey: 'Gujarat',
          optionValue: 'Gujarat'
        },
        {
          optionKey: 'Haryana',
          optionValue: 'Haryana'
        },
        {
          optionKey: 'Himachal Pradesh',
          optionValue: 'Himachal Pradesh'
        },
        {
          optionKey: 'Jammu and Kashmir',
          optionValue: 'Jammu and Kashmir'
        },
        {
          optionKey: 'Jharkhand',
          optionValue: 'Jharkhand'
        },
        {
          optionKey: 'Karnataka',
          optionValue: 'Karnataka'
        },
        {
          optionKey: 'Kerala',
          optionValue: 'Kerala'
        },
        {
          optionKey: 'Lakshadweep',
          optionValue: 'Lakshadweep'
        },
        {
          optionKey: 'Madhya Pradesh',
          optionValue: 'Madhya Pradesh'
        },
        {
          optionKey: 'Maharashtra',
          optionValue: 'Maharashtra'
        },
        {
          optionKey: 'Manipur',
          optionValue: 'Manipur'
        },
        {
          optionKey: 'Meghalaya',
          optionValue: 'Meghalaya'
        },
        {
          optionKey: 'Mizoram',
          optionValue: 'Mizoram'
        },
        {
          optionKey: 'Nagaland',
          optionValue: 'Nagaland'
        },
        {
          optionKey: 'Odisha',
          optionValue: 'Odisha'
        },
        {
          optionKey: 'Puducherr',
          optionValue: 'Puducherr'
        },
        {
          optionKey: 'Punjab',
          optionValue: 'Punjab'
        },
        {
          optionKey: 'Rajasthan',
          optionValue: 'Rajasthan'
        },
        {
          optionKey: 'Sikkim',
          optionValue: 'Sikkim'
        },
        {
          optionKey: 'Tamil Nadu',
          optionValue: 'Tamil Nadu'
        },
        {
          optionKey: 'Telangana',
          optionValue: 'Telangana'
        },
        {
          optionKey: 'Tripura',
          optionValue: 'Tripura'
        },
        {
          optionKey: 'Uttar Pradesh',
          optionValue: 'Uttar Pradesh'
        },
        {
          optionKey: 'Uttarakhand',
          optionValue: 'Uttarakhand'
        },
        {
          optionKey: 'West Bengal',
          optionValue: 'West Bengal'
        }
      ]

    static readonly USER_QUESTIONS = [
        {
            question: 'Please select your applicable age group',
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
        },
        {
            question: 'Please select your Geographic area',
            options: [
                {
                    optionKey: 'Rural (Population equal to 10,000 and above and less than 1 lakh)',
                    optionValue: 'rural'
                },
                {
                    optionKey: 'Urban (Population 10 lakh and above)',
                    optionValue: 'urban'
                }
            ],
            factImage: './../../../assets/images/question/question_2.jpg',
            fact: {
                factHeader: 'DID YOU KNOW?',
                factMainContent: 'Plastic transformed our food supply. It provides inexpensive and clean packaging, increasing shelf life and safety while reducing food waste and transportation costs. Convenience foods rely heavily on single use packaging.'
            }
        },
        {
            question: 'Please select your profession',
            options: [
                {
                    optionKey: 'Student',
                    optionValue: 'student'
                },
                {
                    optionKey: 'Professional',
                    optionValue: 'professional'
                },
                {
                    optionKey: 'Self-employed',
                    optionValue: 'self-employed'
                },
                {
                    optionKey: 'Housewife',
                    optionValue: 'housewife'
                },
                {
                    optionKey: 'Other',
                    optionValue: 'other'
                }
            ],
            factImage: './../../../assets/images/question/question_3.jpg',
            fact: {
                factHeader: 'DID YOU KNOW?',
                factMainContent: 'Plastics give us polyester, nylon, and spandex and are part of many other textiles. From the tips of our toes to the top of our heads we are wrapped in plastic.\n\nYou can reduce your footprint by buying fewer items, keeping them longer, and looking for natural fabrics like wool, cotton, hemp, bamboo, and leather.'
            }
        },
        {
            question: 'Please select your state',
            options: TakeActionConstant.INDIAN_STATE_NAMES,
            factImage: './../../../assets/images/question/question_4.jpg',
            fact: {
                factHeader: 'DID YOU KNOW?',
                factMainContent: '20% of plastic produced in Europe is used in building and construction.\n\nPlastic gives us electrical systems, plumbing, and energy efficient windows. A further 17% of the plastic produced is used in things like appliances and furniture.\n\nThe larger your home, the more plastic it uses. Each person that lives in your home is accountable for a portion of that plastic footprint.'
            }
        }
    ];

    
}