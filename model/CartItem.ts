import { ProductType } from "./ProductType";

export interface CartItem {
  quantity: number;
  product?: ProductType;
}
