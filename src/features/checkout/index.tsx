import React from "react";
import { useTranslation } from "react-i18next";
import "./checkout.css";

const Checkout: React.FunctionComponent = () => {
  const { t } = useTranslation("checkout");

  return (
    <div className="checkout">
      <h1>{t("orderPlaced")}</h1>
    </div>
  );
};

export default Checkout;
