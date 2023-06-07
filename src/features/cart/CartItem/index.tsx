import React, { useContext } from "react";
import { ShopContext } from "../../../context/shopContext";
import { IProduct } from "../../shop/Product";
import "./cartItem.css";
import { useTranslation } from "react-i18next";

const CartItem: React.FunctionComponent<IProduct> = (props) => {
  const { t } = useTranslation("cart");
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={props.productImage} alt={props.productName} />
      <div className="description">
        <p>
          <b>{props.productName}</b>
        </p>
        <p>{t("price").replace("{price}", `${props.price}`)}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(props.id)}> - </button>
          <input
            value={cartItems[props.id]}
            onChange={(e) =>
              updateCartItemCount(Number(e.target.value), props.id)
            }
          />
          <button onClick={() => addToCart(props.id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
