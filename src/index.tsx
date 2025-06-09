import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Preconnect to external domains
[
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com'
].forEach(href => {
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = href;
  document.head.appendChild(link);
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for production
if (process.env.NODE_ENV === 'production') {
  serviceWorker.register();
} else {
  serviceWorker.unregister();
}
