import React, { ProfilerOnRenderCallback, useCallback } from "react";
import { Provider } from "react-redux";

import { StyledEngineProvider, ThemeProvider } from "@mui/material";

import theme from "./config/theme";
import { ShopContextProvider } from "./context/shopContext";
import RootNavigation from "./navigation";
import RootStore from "./store";
import "../src/localization";
import "./config/i18n";
import "./App.css";


const App: React.FunctionComponent = () => {
  const onRender: ProfilerOnRenderCallback = useCallback(
    (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
      // Log performance data
      console.log({
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
      });
    },
    []
  );

  const AppContent = (
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

  // Only enable Profiler in development
  if (process.env.NODE_ENV === 'development') {
    return (
      <React.Profiler id="App" onRender={onRender}>
        {AppContent}
      </React.Profiler>
    );
  }

  return AppContent;
};

export default App;
