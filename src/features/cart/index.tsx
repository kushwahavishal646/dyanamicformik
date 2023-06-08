import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartItem from "./CartItem";
import { checkout } from "../../redux/action";
import { useTypedSelector } from "../../store";
import { PRODUCTS } from "../shop/helper";
import "./cart.css";

const Cart: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation("cart");

  const shoppingCartState = useTypedSelector((state) => state.shoppingCart);
  const totalAmount = shoppingCartState.totalAmountCart;
  const cartItems = shoppingCartState.cartItems;

  return (
    <>
      <div className="cart">
        <div className="header">
          <h1>{t("cartItems")}</h1>
        </div>
        <div className="cart">
          {PRODUCTS.map((product, index) => {
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
            return undefined;
          })}
        </div>
        {totalAmount > 0 ? (
          <>
            <h2>{t("subtotal").replace("{totalAmount}", `${totalAmount}`)}</h2>
            <div className="checkout">
              <button onClick={() => navigate("/")}>
                {t("continueShopping")}
              </button>
              <button
                onClick={() => {
                  dispatch(checkout());
                  navigate("/checkout");
                }}
              >
                {t("checkout")}
              </button>
            </div>
          </>
        ) : (
          <h1>{t("emptyShoppingCart")}</h1>
        )}
      </div>
      <div className="lowerSpace" />
    </>
  );
};

export default Cart;
