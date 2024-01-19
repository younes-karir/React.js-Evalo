import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App";
import Theme from "./helpers/Theme";
import StoreProvider from './store/StoreProvider';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreProvider>
    <Theme>
      <App />
    </Theme>
  </StoreProvider>
);
