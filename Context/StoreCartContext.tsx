import { Cart } from "@/model/Cart";
import { CartItem } from "@/model/CartItem";
import { Dispatch, ReactNode, createContext, useReducer } from "react";

type StoreCartProviderProps = {
  children: ReactNode;
};

type StoreProps = {
  state: {
    cart: Cart;
  };
  dispatch: Dispatch<{
    type: string;
    payload: CartItem;
  }>;
};

export const Store = createContext({
  state: { cart: { cartItems: [] } },
  dispatch: () => null,
} as StoreProps);

const reducerFn = (
  state: { cart: Cart },
  action: { type: string; payload: CartItem }
) => {
  console.log("pay", action.payload);
  switch (action.type) {
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.product.slug === newItem.product.slug
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.product.name === existItem.product.name
              ? { ...newItem, quantity: item.quantity + newItem.quantity }
              : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
};

const initialState = { cart: { cartItems: [] } };

export function StoreCartProvider({ children }: StoreCartProviderProps) {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  console.log({ dispatch });
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
