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
  return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
    if (quantity > 0) {
      const itemInfo = PRODUCTS.find((product) => product.id === Number(itemId));
      return total + quantity * (itemInfo?.price ?? 0);
    }
    return total;
  }, 0);
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
  if (operation === CartOperationType.UPDATE && !!newItemCount) {
    updatedCartItem = {
      ...cartItems,
      [itemId]: newItemCount,
    };
  }
  const totalAmount = getTotalCartAmount(updatedCartItem);
  return {
    totalAmountCart: totalAmount,
    cartItems: updatedCartItem,
  } as IShoppingCartState;
};
