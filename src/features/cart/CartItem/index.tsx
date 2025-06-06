import React, { useCallback, memo } from "react";
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

const CartItem: React.FC<IProduct> = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation("cart");

  const cartItems = useTypedSelector((state) => state.shoppingCart.cartItems);

  const addItemToCart = useCallback(() => {
    dispatch(addToCart({ itemId: props.id }));
  }, [dispatch, props.id]);

  const removeItemFromCart = useCallback(() => {
    dispatch(removeFromCart({ itemId: props.id }));
  }, [dispatch, props.id]);

  const updateCartItemCount = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0) {
      dispatch(
        modifyCartItemCount({
          newItemCount: value,
          itemId: props.id,
        })
      );
    }
  }, [dispatch, props.id]);

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
          <input
            type="number"
            min="0"
            value={cartItems[props.id]}
            onChange={updateCartItemCount}
          />
          <button onClick={addItemToCart}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
