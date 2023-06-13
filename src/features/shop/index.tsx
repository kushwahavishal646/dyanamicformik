import React from "react";
import { useTranslation } from "react-i18next";

import { Box } from "@mui/material";

import { PRODUCTS } from "./helper";
import Product from "./Product";
import useStyles from "./style";

const Shop: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <>
      <Box sx={classes.shopTitle}>
        <h1>{t("companyName")}</h1>
      </Box>
      <Box sx={[classes.products]}>
        {PRODUCTS.map((item, index) => (
          <Product
            key={`cartItem_${item.id}_${index}`}
            id={item.id}
            productName={item.productName}
            price={item.price}
            productImage={item.productImage}
          />
        ))}
      </Box>
    </>
  );
};

export default Shop;
