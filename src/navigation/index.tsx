import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar.tsx";
import Cart from "../features/cart";
import Shop from "../features/shop";

const RootNavigation: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
