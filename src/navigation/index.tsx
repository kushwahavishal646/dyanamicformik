import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar.tsx";
import LoadingFallback from "../components/LoadingFallback";

// Lazy load route components with chunk naming and preload hints
const Cart = lazy(() =>
  import(/* webpackChunkName: "cart", webpackPrefetch: true */ "../features/cart")
);
const Checkout = lazy(() =>
  import(/* webpackChunkName: "checkout", webpackPrefetch: true */ "../features/checkout")
);
const ConfigRendering = lazy(() =>
  import(/* webpackChunkName: "config", webpackPrefetch: true */ "../features/configRendering")
);
const IMForm = lazy(() =>
  import(/* webpackChunkName: "imform", webpackPrefetch: true */ "../features/imForm")
);
const Shop = lazy(() =>
  import(/* webpackChunkName: "shop", webpackPrefetch: true */ "../features/shop")
);

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
