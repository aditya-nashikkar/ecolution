import { Advertisement } from "./advertisement";

export interface ProductInfo {
    productName: string;
    carbonFootprint?: string;
    imagePath: string;
    isSelected?: boolean;
    advertisement?: Array<Advertisement>;
}