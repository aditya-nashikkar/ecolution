import { Advertisement } from "./advertisement";

export interface ProductInfo {
    productName: string;
    carbonFootprint: number;
    imagePath: string;
    isSelected?: boolean;
    advertisement?: Array<Advertisement>;
}