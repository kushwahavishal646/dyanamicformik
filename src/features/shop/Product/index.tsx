import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { ShopContext } from "../../../context/shopContext";
import "./product.css";

export interface IProduct {
  id: number;
  productName: string;
  price: number;
  productImage: string;
}

const Product: React.FunctionComponent<IProduct> = (props) => {
  const { t } = useTranslation("shop");
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[props.id];

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
        <button className="addToCartBttn" onClick={() => addToCart(props.id)}>
          {t("addToCart")} {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};

export default React.memo(Product);
