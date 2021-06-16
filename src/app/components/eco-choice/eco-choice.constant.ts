import { AlternativeProduct } from "src/app/models/alternative-product";

export class EcoChoiceConstant {

    static readonly AVAILABLE_PRODUCTS: Array<string> = ['Toothbrush', 'Bottle', 'Plastic bag', 'Disposable cup', 'Straw'];

    static readonly PRODUCTS_LIST: Array<AlternativeProduct> = [
        {
            searchedProduct: {
                productName: 'Toothbrush',
                carbonFootprint: 60,
                imagePath: './../../../assets/images/eco-choice/Toothbrush-Plastic.jpg'
            },
            alternativeProducts: [
                {
                    productName: 'Bamboo toothbrush',
                    carbonFootprint: 50,
                    imagePath: './../../../assets/images/eco-choice/Toothbrush-Bamboo.jpg'
                },
                {
                    productName: 'Reusable brush',
                    carbonFootprint: 40,
                    imagePath: './../../../assets/images/eco-choice/toothbrush-reusable.jpg'
                }
            ]
        },
        {
            searchedProduct: {
                productName: 'Bottle',
                carbonFootprint: 60,
                imagePath: './../../../assets/images/eco-choice/WaterBottle-Plastic-UseNThrow.jpg'
            },
            alternativeProducts: [
                {
                    productName: 'Clay water bottle',
                    carbonFootprint: 50,
                    imagePath: './../../../assets/images/eco-choice/WaterBottle-Clay.jpg'
                },
                {
                    productName: 'Steel water bottle',
                    carbonFootprint: 40,
                    imagePath: './../../../assets/images/eco-choice/WaterBottle-Steel.jpg'
                }
            ]
        },
        {
            searchedProduct: {
                productName: 'Plastic bag',
                carbonFootprint: 60,
                imagePath: './../../../assets/images/eco-choice/WaterBottle-Plastic.jpg'
            },
            alternativeProducts: [
                {
                    productName: 'Plastic reusable bag',
                    carbonFootprint: 50,
                    imagePath: './../../../assets/images/eco-choice/Bag-plastic-Reusable.jpg'
                },
                {
                    productName: 'Jute bag',
                    carbonFootprint: 40,
                    imagePath: './../../../assets/images/eco-choice/Jute-bag-No-Plastic.jpg'
                }
            ]
        },
        {
            searchedProduct: {
                productName: 'Disposable cups',
                carbonFootprint: 60,
                imagePath: './../../../assets/images/eco-choice/Cup-Plastic.jpg'
            },
            alternativeProducts: [
                {
                    productName: 'Thermacol cup',
                    carbonFootprint: 50,
                    imagePath: './../../../assets/images/eco-choice/Cup-thermacol.jpg'
                }
            ]
        },
        {
            searchedProduct: {
                productName: 'Straw',
                carbonFootprint: 60,
                imagePath: './../../../assets/images/eco-choice/Straw-Plastic.jpg'
            },
            alternativeProducts: [
                {
                    productName: 'Paper straw',
                    carbonFootprint: 50,
                    imagePath: './../../../assets/images/eco-choice/Straw-paper.jpg'
                },
                {
                    productName: 'Bamboo straw',
                    carbonFootprint: 40,
                    imagePath: './../../../assets/images/eco-choice/Straw-Bamboo.jpg'
                },
                {
                    productName: 'Reusable straw',
                    carbonFootprint: 40,
                    imagePath: './../../../assets/images/eco-choice/Straw-reusable.jpg'
                }
            ]
        },
    ]
}

