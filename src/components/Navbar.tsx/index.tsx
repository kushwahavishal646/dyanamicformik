import React from "react";
import { Link } from "react-router-dom";

import { ShoppingCart } from "phosphor-react";
import "./styles.css";

const Navbar: React.FunctionComponent = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">IM Form</Link>
        <Link to="/config">Config Rendering</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
