/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from "redux";

import { ShoppingCartActionTypes, ShoppingCartActions } from "./action";
import { ICart, modifyCart, getDefaultCart, getTotalCartAmount } from "./model";
import { CartOperationType } from "../constants/strings";

export interface IShoppingCartState {
  totalAmountCart: number;
  cartItems: ICart;
}

const initialShoppingCartState: IShoppingCartState = {
  totalAmountCart: 0,
  cartItems: getDefaultCart(),
};

const ShoppingCartReducer: Reducer<IShoppingCartState, ShoppingCartActions> = (
  state = initialShoppingCartState,
  action: ShoppingCartActions
): IShoppingCartState => {
  switch (action.type) {
    case ShoppingCartActionTypes.ADD_TO_CART:
      return modifyCart(
        action.payload.itemId,
        state.cartItems,
        CartOperationType.ADD
      );
    case ShoppingCartActionTypes.GET_TOTAL_CART_AMOUNT:
      return { ...state, totalAmountCart: getTotalCartAmount(state.cartItems) };
    case ShoppingCartActionTypes.REMOVE_FROM_CART:
      return modifyCart(
        action.payload.itemId,
        state.cartItems,
        CartOperationType.REMOVE
      );
    case ShoppingCartActionTypes.UPDATE_CART_ITEM_COUNT:
      return modifyCart(
        action.payload.itemId,
        state.cartItems,
        CartOperationType.UPDATE,
        action.payload.newItemCount
      );
    case ShoppingCartActionTypes.CHECKOUT:
      return state;
    default:
      return state;
  }
};

export default ShoppingCartReducer;
