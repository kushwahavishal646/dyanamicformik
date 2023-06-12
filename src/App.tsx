import React from "react";
import { Provider } from "react-redux";

import { StyledEngineProvider, ThemeProvider } from "@mui/material";

import theme from "./config/theme";
import { ShopContextProvider } from "./context/shopContext";
import RootNavigation from "./navigation";
import RootStore from "./store";
import "../src/localization";
import "../src/config/i18n";
import "./App.css";

const App: React.FunctionComponent = () => {
  return (
    <Provider store={RootStore}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ShopContextProvider>
            <RootNavigation />
          </ShopContextProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
};

export default App;
