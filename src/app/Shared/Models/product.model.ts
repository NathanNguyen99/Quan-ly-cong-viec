import { subProduct } from "./subProduct.model";

export interface Product {
    id: number;
    name: string;
    fromDate: string;
    toDate: string;
    desc: string
    //subProduct: subProduct[];
}