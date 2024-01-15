import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar.tsx";
import Cart from "../features/cart";
import Checkout from "../features/checkout";
import ConfigRendering from "../features/configRendering";
import IMForm from "../features/imForm";
import Shop from "../features/shop";

const RootNavigation: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<IMForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/config" element={<ConfigRendering />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
