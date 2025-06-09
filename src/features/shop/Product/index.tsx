import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { addToCart } from "../../../redux/action";
import { useTypedSelector } from "../../../store";
import OptimizedImage from "../../../components/OptimizedImage";
import "./product.css";

export interface IProduct {
  id: number;
  productName: string;
  price: number;
  productImage: string;
}

const Product: React.FC<IProduct> = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation("shop");

  const cartItemCount = useTypedSelector(
    (state) => state.shoppingCart.cartItems[props.id]
  );

  const addItemToCart = useCallback(() => {
    dispatch(addToCart({ itemId: props.id }));
  }, [dispatch, props.id]);

  return (
    <div className="productContainer">
      <OptimizedImage
        src={props.productImage}
        alt={props.productName}
        className="productImage"
        width={200}
        height={200}
      />
      <div className="description">
        <p className="productName">
          <b>{props.productName}</b>
        </p>
        <h5 className="productPrize">
          <b>${props.price.toFixed(2)}</b>
        </h5>
        <button className="addToCartBttn" onClick={addItemToCart}>
          {t("addToCart")} {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};

export default React.memo(Product);
