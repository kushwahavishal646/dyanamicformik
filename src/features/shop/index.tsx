import React from "react";
import { useTranslation } from "react-i18next";

import { PRODUCTS } from "./helper";
import Product from "./Product";

import "./shop.css";

const Shop: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>{t("companyName")}</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((item, index) => (
          <Product
            key={`cartItem_${item.id}_${index}`}
            id={item.id}
            productName={item.productName}
            price={item.price}
            productImage={item.productImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
