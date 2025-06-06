import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar.tsx";
import LoadingFallback from "../components/LoadingFallback";

// Lazy load route components
const Cart = lazy(() => import(/* webpackChunkName: "cart" */ "../features/cart"));
const Checkout = lazy(() => import(/* webpackChunkName: "checkout" */ "../features/checkout"));
const ConfigRendering = lazy(() => import(/* webpackChunkName: "config" */ "../features/configRendering"));
const IMForm = lazy(() => import(/* webpackChunkName: "imform" */ "../features/imForm"));
const Shop = lazy(() => import(/* webpackChunkName: "shop" */ "../features/shop"));

const RootNavigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<IMForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/config" element={<ConfigRendering />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RootNavigation;
