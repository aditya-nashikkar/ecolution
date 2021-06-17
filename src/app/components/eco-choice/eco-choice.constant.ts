import { AlternativeProduct } from "src/app/models/alternative-product";

export class EcoChoiceConstant {

    static readonly AVAILABLE_PRODUCTS: Array<string> = ['Toothbrush', 'Bottle', 'Plastic bag', 'Disposable cups', 'Straw'];

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
                    imagePath: './../../../assets/images/eco-choice/Toothbrush-Bamboo.jpg',
                    isSelected: true
                },
                {
                    productName: 'Reusable brush',
                    carbonFootprint: 40,
                    imagePath: './../../../assets/images/eco-choice/toothbrush-reusable.jpg',
                    isSelected: false
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
                    imagePath: './../../../assets/images/eco-choice/WaterBottle-Clay.jpg',
                    isSelected: true
                },
                {
                    productName: 'Steel water bottle',
                    carbonFootprint: 40,
                    imagePath: './../../../assets/images/eco-choice/WaterBottle-Steel.png',
                    isSelected: false
                }
            ]
        },
        {
            searchedProduct: {
                productName: 'Plastic bag',
                carbonFootprint: 60,
                imagePath: './../../../assets/images/eco-choice/Bag-plastic.jpg'
            },
            alternativeProducts: [
                {
                    productName: 'Plastic reusable bag',
                    carbonFootprint: 50,
                    imagePath: './../../../assets/images/eco-choice/Bag-plastic-Reusable.jpg',
                    isSelected: true
                },
                {
                    productName: 'Jute bag',
                    carbonFootprint: 40,
                    imagePath: './../../../assets/images/eco-choice/Jute-bag-No-Plastic.jpg',
                    isSelected: false
                }
            ]
        },
        {
            searchedProduct: {
                productName: 'Disposable cups',
                carbonFootprint: 60,
                imagePath: './../../../assets/images/eco-choice/Cup-Plastic.jfif'
            },
            alternativeProducts: [
                {
                    productName: 'Thermacol cup',
                    carbonFootprint: 50,
                    imagePath: './../../../assets/images/eco-choice/Cup-thermacol.jpg',
                    isSelected: true
                }
            ]
        },
        {
            searchedProduct: {
                productName: 'Straw',
                carbonFootprint: 60,
                imagePath: './../../../assets/images/eco-choice/Straw-Plastic.jfif',
            },
            alternativeProducts: [
                {
                    productName: 'Paper straw',
                    carbonFootprint: 50,
                    imagePath: './../../../assets/images/eco-choice/Straw-paper.jpg',
                    isSelected: true
                },
                {
                    productName: 'Bamboo straw',
                    carbonFootprint: 40,
                    imagePath: './../../../assets/images/eco-choice/Straw-Bamboo.jfif',
                    isSelected: false
                },
                {
                    productName: 'Reusable straw',
                    carbonFootprint: 40,
                    imagePath: './../../../assets/images/eco-choice/Straw-reusable.jpeg',
                    isSelected: false
                }
            ]
        },
    ]
}

