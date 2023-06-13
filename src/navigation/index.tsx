import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar.tsx";
import Cart from "../features/cart";
import Checkout from "../features/checkout";
import ConfigRendering from "../features/configRendering";
import Shop from "../features/shop";

const RootNavigation: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/configRendering" element={<ConfigRendering />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
