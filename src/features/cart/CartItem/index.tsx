import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import {
  addToCart,
  modifyCartItemCount,
  removeFromCart,
} from "../../../redux/action";
import { useTypedSelector } from "../../../store";
import { IProduct } from "../../shop/Product";
import "./cartItem.css";

const CartItem: React.FunctionComponent<IProduct> = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation("cart");

  const shoppingCartState = useTypedSelector((state) => state.shoppingCart);
  const cartItems = shoppingCartState.cartItems;

  const addItemToCart = () => {
    dispatch(addToCart({ itemId: props.id }));
  };

  const removeItemFromCart = () => {
    dispatch(removeFromCart({ itemId: props.id }));
  };

  const updateCartItemCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      modifyCartItemCount({
        newItemCount: Number(e.target.value),
        itemId: props.id,
      })
    );
  };

  return (
    <div className="cartItem">
      <img src={props.productImage} alt={props.productName} />
      <div className="description">
        <p>
          <b>{props.productName}</b>
        </p>
        <p>{t("price").replace("{price}", `${props.price}`)}</p>
        <div className="countHandler">
          <button onClick={removeItemFromCart}> - </button>
          <input value={cartItems[props.id]} onChange={updateCartItemCount} />
          <button onClick={addItemToCart}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
