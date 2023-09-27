import { Product } from "./ProductType";

export interface CartItem {
  quantity: number;
  product?: Product;
}
