import React from "react";
import { PRODUCTS } from "./helper";
import Product from "./Product";
import "./shop.css";
import { useTranslation } from "react-i18next";

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
