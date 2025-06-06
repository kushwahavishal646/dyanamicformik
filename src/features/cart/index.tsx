import React, { useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartItem from "./CartItem";
import { checkout } from "../../redux/action";
import { useTypedSelector } from "../../store";
import { PRODUCTS } from "../shop/helper";
import "./cart.css";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation("cart");

  const shoppingCartState = useTypedSelector((state) => state.shoppingCart);
  const totalAmount = shoppingCartState.totalAmountCart;
  const cartItems = shoppingCartState.cartItems;

  const handleCheckout = useCallback(() => {
    dispatch(checkout());
    navigate("/checkout");
  }, [dispatch, navigate]);

  const handleContinueShopping = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const cartItemsToRender = useMemo(() =>
    PRODUCTS.map((product, index) => {
      if (cartItems[product.id] !== 0) {
        return (
          <CartItem
            key={`cartItem_${product.id}_${index}`}
            id={product.id}
            price={product.price}
            productImage={product.productImage}
            productName={product.productName}
          />
        );
      }
      return null;
    }).filter(Boolean)
    , [cartItems]);

  return (
    <div className="cart">
      <div className="header">
        <h1>{t("cartItems")}</h1>
      </div>
      <div className="cart">
        {cartItemsToRender}
      </div>
      {totalAmount > 0 ? (
        <>
          <h2>{t("subtotal").replace("{totalAmount}", `${totalAmount}`)}</h2>
          <div className="checkout">
            <button onClick={handleContinueShopping}>
              {t("continueShopping")}
            </button>
            <button onClick={handleCheckout}>
              {t("checkout")}
            </button>
          </div>
        </>
      ) : (
        <h1>{t("emptyShoppingCart")}</h1>
      )}
    </div>
  );
};

export default Cart;
