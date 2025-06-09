import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Box } from "@mui/material";

import { PRODUCTS } from "./helper";
import Product from "./Product";
import useStyles from "./style";

const Shop: React.FC = () => {
  const { t } = useTranslation("common");
  const classes = useStyles();

  const productList = useMemo(() =>
    PRODUCTS.map((item) => (
      <Product
        key={`product_${item.id}`}
        id={item.id}
        productName={item.productName}
        price={item.price}
        productImage={item.productImage}
      />
    ))
    , []);

  return (
    <>
      <Box sx={classes.shopTitle}>
        <h1>{t("companyName")}</h1>
      </Box>
      <Box sx={classes.products}>
        {productList}
      </Box>
    </>
  );
};

export default Shop;
