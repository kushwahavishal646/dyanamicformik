import common_en from "./en/common.json";
import shop_en from "./en/shop.json";
import cart_en from "./en/cart.json";

const langSetupOptions = {
  resources: {
    en: {
      common: common_en,
      shop: shop_en,
      cart: cart_en,
    },
  },
  ns: ["common", "shop", "cart"],
  defaultNS: "common",
};

export default langSetupOptions;
