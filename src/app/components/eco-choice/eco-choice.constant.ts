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
                    isSelected: true,
                    advertisement: [
                        {
                            productName: 'Bamboo toothbrush',
                            price: '100',
                            imagePath: './../../../assets/images/eco-choice/Toothbrush-Bamboo.jpg',
                            sellerName: 'Newdigital...'
                        },
                        {
                            productName: 'Bamboo brush',
                            price: '110',
                            imagePath: './../../../assets/images/eco-choice/Toothbrush-Bamboo.jpg',
                            sellerName: 'Rdigital...'
                        }
                    ]
                },
                {
                    productName: 'Reusable brush',
                    carbonFootprint: 40,
                    imagePath: './../../../assets/images/eco-choice/toothbrush-reusable.jpg',
                    isSelected: false,
                    advertisement: [
                        {
                            productName: 'Electric brush',
                            price: '400',
                            imagePath: './../../../assets/images/eco-choice/toothbrush-reusable.jpg',
                            sellerName: 'Newdigital...'
                        },
                        {
                            productName: 'Electric reusable brush',
                            price: '510',
                            imagePath: './../../../assets/images/eco-choice/toothbrush-reusable.jpg',
                            sellerName: 'Rdigital...'
                        }
                    ]
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
                    isSelected: true,
                    advertisement: [
                        {
                            productName: 'Clay water bottle',
                            price: '200',
                            imagePath: './../../../assets/images/eco-choice/WaterBottle-Clay.jpg',
                            sellerName: 'Newdigital...'
                        },
                        {
                            productName: 'Clay water bottle',
                            price: '250',
                            imagePath: './../../../assets/images/eco-choice/WaterBottle-Clay.jpg',
                            sellerName: 'Rdigital...'
                        }
                    ]
                },
                {
                    productName: 'Steel water bottle',
                    carbonFootprint: 40,
                    imagePath: './../../../assets/images/eco-choice/WaterBottle-Steel.png',
                    isSelected: false,
                    advertisement: [
                        {
                            productName: 'Steel water bottle',
                            price: '600',
                            imagePath: './../../../assets/images/eco-choice/WaterBottle-Steel.png',
                            sellerName: 'Newdigital...'
                        },
                        {
                            productName: 'Steel water bottle',
                            price: '500',
                            imagePath: './../../../assets/images/eco-choice/WaterBottle-Steel.png',
                            sellerName: 'Rdigital...'
                        }
                    ]
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
                    isSelected: true,
                    advertisement: [
                        {
                            productName: 'Plastic reusable bag',
                            price: '80',
                            imagePath: './../../../assets/images/eco-choice/Bag-plastic-Reusable.jpg',
                            sellerName: 'Newdigital...'
                        },
                        {
                            productName: 'Plastic reusable bag',
                            price: '74',
                            imagePath: './../../../assets/images/eco-choice/Bag-plastic-Reusable.jpg',
                            sellerName: 'Rdigital...'
                        }
                    ]
                },
                {
                    productName: 'Jute bag',
                    carbonFootprint: 40,
                    imagePath: './../../../assets/images/eco-choice/Jute-bag-No-Plastic.jpg',
                    isSelected: false,
                    advertisement: [
                        {
                            productName: 'Jute bag',
                            price: '100',
                            imagePath: './../../../assets/images/eco-choice/Jute-bag-No-Plastic.jpg',
                            sellerName: 'Newdigital...'
                        },
                        {
                            productName: 'Jute bag',
                            price: '100',
                            imagePath: './../../../assets/images/eco-choice/Jute-bag-No-Plastic.jpg',
                            sellerName: 'Rdigital...'
                        }
                    ]
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
                    isSelected: true,
                    advertisement: [
                        {
                            productName: 'Thermacol cup',
                            price: '100 (100pcs)',
                            imagePath: './../../../assets/images/eco-choice/Cup-thermacol.jpg',
                            sellerName: 'etraders...'
                        },
                        {
                            productName: 'Thermacol cup',
                            price: '90 (100pcs)',
                            imagePath: './../../../assets/images/eco-choice/Cup-thermacol.jpg',
                            sellerName: 'ecomm...'
                        }
                    ]
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
                    isSelected: true,
                    advertisement: [
                        {
                            productName: 'Paper straw',
                            price: '150 (100pcs)',
                            imagePath: './../../../assets/images/eco-choice/Straw-paper.jpg',
                            sellerName: 'etraders...'
                        },
                        {
                            productName: 'Paper straw',
                            price: '100 (100pcs)',
                            imagePath: './../../../assets/images/eco-choice/Straw-paper.jpg',
                            sellerName: 'ecomm...'
                        }
                    ]
                },
                {
                    productName: 'Bamboo straw',
                    carbonFootprint: 40,
                    imagePath: './../../../assets/images/eco-choice/Straw-Bamboo.jfif',
                    isSelected: false,
                    advertisement: [
                        {
                            productName: 'Bamboo straw',
                            price: '150 (100pcs)',
                            imagePath: './../../../assets/images/eco-choice/Straw-Bamboo.jfif',
                            sellerName: 'etraders...'
                        },
                        {
                            productName: 'Bamboo straw',
                            price: '100 (100pcs)',
                            imagePath: './../../../assets/images/eco-choice/Straw-Bamboo.jfif',
                            sellerName: 'ecomm...'
                        }
                    ]
                },
                {
                    productName: 'Reusable straw',
                    carbonFootprint: 40,
                    imagePath: './../../../assets/images/eco-choice/Straw-reusable.jpeg',
                    isSelected: false,
                    advertisement: [
                        {
                            productName: 'Reusable straw',
                            price: '20/ pc',
                            imagePath: './../../../assets/images/eco-choice/Straw-reusable.jpeg',
                            sellerName: 'etraders...'
                        },
                        {
                            productName: 'Reusable straw',
                            price: '20/pc',
                            imagePath: './../../../assets/images/eco-choice/Straw-reusable.jpeg',
                            sellerName: 'ecomm...'
                        }
                    ]
                }
            ]
        },
    ]
}

