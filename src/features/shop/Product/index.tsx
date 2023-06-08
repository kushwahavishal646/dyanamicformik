import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { addToCart } from "../../../redux/action";
import { useTypedSelector } from "../../../store";
import "./product.css";
export interface IProduct {
  id: number;
  productName: string;
  price: number;
  productImage: string;
}

const Product: React.FunctionComponent<IProduct> = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation("shop");

  const shoppingCartState = useTypedSelector((state) => state.shoppingCart);
  const cartItemCount = shoppingCartState.cartItems[props.id];

  const addItemToCart = () => {
    dispatch(addToCart({ itemId: props.id }));
  };

  return (
    <div className="productContainer">
      <img
        src={props.productImage}
        alt={`${props.productName}`}
        className="productImage"
      />
      <div className="description">
        <p className="productName">
          <b>{props.productName}</b>
        </p>
        <h5 className="productPrize">
          <b>${props.price}</b>
        </h5>
        <button className="addToCartBttn" onClick={addItemToCart}>
          {t("addToCart")} {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};

export default React.memo(Product);
