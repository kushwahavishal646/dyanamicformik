import React from "react";

import "./App.css";
import { ShopContextProvider } from "./context/shopContext";
import RootNavigation from "./navigation";
import "../src/localization";
import "../src/config/i18n";

const App: React.FunctionComponent = () => {
  return (
    <ShopContextProvider>
      <RootNavigation />
    </ShopContextProvider>
  );
};

export default App;
