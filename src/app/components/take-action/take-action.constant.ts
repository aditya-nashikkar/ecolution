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
                factMainContent: 'A polar bear walks along a rocky shore, looking for food. The bear would usually be on the sea ice hunting for seals, pouncing when the seal comes up to breathe. But the ice has started to melt earlier and re-form later than it has in the past. Without the sea ice, the polar bear must scavenge for other, less nutritious food. These changes in polar sea ice are a result of climate change. But this isn’t just affecting polar bears—climate change affects everyone.'
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
                factMainContent: 'Higher temperatures and drought increase the potential for wildfire. Climate change exacerbates the factors that create perfect fire conditions. Lower precipitation and warmer air temperatures dry the forests and other vegetation. Add strong winds and decades of fire suppression into the mix and you have a dangerous recipe for wildfire.'
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
                factMainContent: 'Climate change is depleting our essential fisheries. Over the past 80 years, a warming planet has disrupted critical fisheries worldwide--and many have declined precipitously. Warmer waters can make some fisheries smaller by putting metabolic stress on the fish, making it harder for them to reproduce or find food. Warm waters can also cause zooplankton, essential fish food, to decline. The impacts on smaller organisms then have cascading impacts on the rest of the food chain.'
            }
        },
        {
            question: 'Please select your state',
            options: TakeActionConstant.INDIAN_STATE_NAMES,
            factImage: './../../../assets/images/question/question_4.jpg',
            fact: {
                factHeader: 'DID YOU KNOW?',
                factMainContent: 'The Maldives archipelago in the Indian Ocean includes 1,192 islands. In 1992, the government added one more—an artificial construct that serves as a landfill, where 500 tons of trash are dumped every day.\n\nTwo truisms of island-living everywhere are especially true in the Maldives: Most consumer goods must be shipped in, and most waste is produced by tourists. In the Maldives, a developing nation that lacks much local manufacturing, a single tourist produces almost twice as much trash per day as a resident of the capital city of Malé, and five times as much as residents of the other 200 populated islands, according to government statistics. Consequently, the tiny island nation was ranked as the world’s fourth largest producer per capita of mismanaged waste, in 2019.'
            }
        }
    ];

    
}