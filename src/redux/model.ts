import { IShoppingCartState } from "./reducer";
import { CartOperationType } from "../constants/strings";
import { PRODUCTS } from "../features/shop/helper";

export interface ICart {
  [index: number]: number;
}

export const getDefaultCart = () => {
  let cart: ICart = {};
  for (let i = 0; i < PRODUCTS.length; i++) {
    cart[PRODUCTS[i].id] = 0;
  }
  return cart;
};

export const getTotalCartAmount = (cartItems: ICart) => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
      totalAmount += cartItems[item] * (itemInfo?.price ?? 0);
    }
  }
  return totalAmount;
};

export const modifyCart = (
  itemId: number,
  cartItems: ICart,
  operation: CartOperationType,
  newItemCount?: number
) => {
  let updatedCartItem: ICart = cartItems;
  if (operation === CartOperationType.ADD) {
    updatedCartItem = {
      ...cartItems,
      [itemId]: cartItems[itemId] + 1,
    };
  }
  if (operation === CartOperationType.REMOVE) {
    updatedCartItem = {
      ...cartItems,
      [itemId]: cartItems[itemId] - 1,
    };
  }
  if (operation === CartOperationType.UPDATE) {
    updatedCartItem = {
      ...cartItems,
      [itemId]: newItemCount ?? 0,
    };
  }
  const totalAmount = getTotalCartAmount(updatedCartItem);
  return {
    totalAmountCart: totalAmount,
    cartItems: updatedCartItem,
  } as IShoppingCartState;
};
