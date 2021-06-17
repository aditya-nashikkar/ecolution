import { ProductInfo } from "./product-info";

export interface AlternativeProduct {
    searchedProduct: ProductInfo
    alternativeProducts: Array<ProductInfo>;
}