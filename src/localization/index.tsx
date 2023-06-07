import common_en from "./en/common.json";
import shop_en from "./en/shop.json";
import cart_en from "./en/cart.json";
import chekout_en from "./en/checkout.json";

const langSetupOptions = {
  resources: {
    en: {
      common: common_en,
      shop: shop_en,
      cart: cart_en,
      checkout: chekout_en,
    },
  },
  ns: ["common", "shop", "cart", "checkout"],
  defaultNS: "common",
};

export default langSetupOptions;
