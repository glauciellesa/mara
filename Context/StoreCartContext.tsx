import { Cart } from "@/model/Cart";
import { CartItem } from "@/model/CartItem";
import { Dispatch, ReactNode, createContext, useReducer } from "react";
import Cookies from "js-cookie";

type StoreCartProviderProps = {
  children: ReactNode;
};

type StoreProps = {
  state: {
    cart: Cart;
  };
  dispatch: Dispatch<{
    type: string;
    payload: any;
  }>;
};

export const Store = createContext({
  state: { cart: { cartItems: [] as CartItem[] } },
  dispatch: () => null,
} as StoreProps);

const reducerFn = (
  state: { cart: Cart },
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.product?.slug === newItem.product?.slug
      );

      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.product?.name === existItem.product?.name
              ? { ...newItem, quantity: item.quantity + 1 }
              : item
          )
        : [...state.cart.cartItems, newItem];

      Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));

      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case "CART_UPDATE_QNT": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.product?.slug === newItem.product?.slug
      );

      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.product?.name === existItem.product?.name
              ? { ...newItem, quantity: item.quantity - 1 }
              : item
          )
        : [...state.cart.cartItems, newItem];

      Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));

      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.product?.slug !== action.payload.product?.slug
      );

      Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));

      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case "CART_RESET":
      return {
        ...state,
        cart: {
          cartItems: [],
          shippingAddress: { location: {} },
          paymentMethod: "",
        },
      };

    case "SAVE_SHIPPING_ADDRESS":
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            ...action.payload,
          },
        },
      };

    case "SAVE_PAYMENT_METHOD":
      return {
        ...state,
        cart: {
          ...state.cart,
          paymentMethod: action.payload,
        },
      };

    default:
      return state;
  }
};

const getCartFromCookie = () => {
  const cart = Cookies.get("cart");
  if (cart) {
    return JSON.parse(cart);
  }
  return { cartItems: [], shippingAddress: null, paymentMethod: "" };
};

const initialState: { cart: Cart } = {
  cart: getCartFromCookie(),
};

export function StoreCartProvider({ children }: StoreCartProviderProps) {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
