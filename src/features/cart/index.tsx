import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import CartItem from "./CartItem";
import { ShopContext } from "../../context/shopContext";
import { PRODUCTS } from "../shop/helper";
import "./cart.css";

const Cart: React.FunctionComponent = () => {
  const { t } = useTranslation("cart");
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
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
        <div className="checkout">
          <h2>{t("subtotal").replace("{totalAmount}", `${totalAmount}`)}</h2>
          <button onClick={() => navigate("/")}>{t("continueShopping")}</button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {t("checkout")}
          </button>
        </div>
      ) : (
        <h1>{t("emptyShoppingCart")}</h1>
      )}
    </div>
  );
};

export default Cart;
