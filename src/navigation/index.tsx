import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar.tsx";
import Cart from "../features/cart";
import Shop from "../features/shop";
import Checkout from "../features/checkout";

const RootNavigation: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
