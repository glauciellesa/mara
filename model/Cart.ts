import { Address } from "./Address";
import { CartItem } from "./CartItem";

export interface Cart {
  cartItems: CartItem[];
  shippingAddress?: Address;
  paymentMethod?: string;
}
