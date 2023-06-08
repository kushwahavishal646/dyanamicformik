import { createAction, ActionType } from "typesafe-actions";

interface ICartItem {
  itemId: number;
}

interface IUpdateCartItemCount extends ICartItem {
  newItemCount: number;
}

export enum ShoppingCartActionTypes {
  GET_TOTAL_CART_AMOUNT = "GET_TOTAL_CART_AMOUNT",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  UPDATE_CART_ITEM_COUNT = "UPDATE_CART_ITEM_COUNT",
  CHECKOUT = "CHECKOUT",
}

export const getTotalCartAmount = createAction(
  ShoppingCartActionTypes.GET_TOTAL_CART_AMOUNT
)();
export const addToCart = createAction(
  ShoppingCartActionTypes.ADD_TO_CART
)<ICartItem>();
export const removeFromCart = createAction(
  ShoppingCartActionTypes.REMOVE_FROM_CART
)<ICartItem>();
export const modifyCartItemCount = createAction(
  ShoppingCartActionTypes.UPDATE_CART_ITEM_COUNT
)<IUpdateCartItemCount>();
export const checkout = createAction(ShoppingCartActionTypes.CHECKOUT)();

export type GetTotalCartAmountAction = ActionType<typeof getTotalCartAmount>;
export type AddToCartAction = ActionType<typeof addToCart>;
export type RemoveFromCartAction = ActionType<typeof removeFromCart>;
export type UpdateCartItemCountAction = ActionType<typeof modifyCartItemCount>;
export type CheckoutAction = ActionType<typeof checkout>;

export type ShoppingCartActions =
  | GetTotalCartAmountAction
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateCartItemCountAction
  | CheckoutAction;
