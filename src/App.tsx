import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";

import theme from "./config/theme";
import { ShopContextProvider } from "./context/shopContext";
import RootStore from "./store";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingFallback from "./components/LoadingFallback";
import "./config/i18n"; // Import i18n configuration

// Lazy load RootNavigation component with chunk naming
const RootNavigation = lazy(() =>
  import(/* webpackChunkName: "root-navigation" */ "./navigation")
);

const AppContent: React.FC = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <RootNavigation />
      </Suspense>
    </ErrorBoundary>
  );
};

AppContent.displayName = 'AppContent';

const App: React.FC = () => {
  return (
    <Provider store={RootStore}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <ShopContextProvider>
            <AppContent />
          </ShopContextProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
};

export default App;
