import React from "react";
import { Provider } from "react-redux";

import "../src/localization";
import "../src/config/i18n";
import { ShopContextProvider } from "./context/shopContext";
import RootNavigation from "./navigation";
import RootStore from "./store";
import "./App.css";

const App: React.FunctionComponent = () => {
  return (
    <Provider store={RootStore}>
      <ShopContextProvider>
        <RootNavigation />
      </ShopContextProvider>
    </Provider>
  );
};

export default App;
