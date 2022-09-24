import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./utils/Theme";
import store from "./store/index";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./utils/costumHooks/useSnack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={Theme}>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <SnackbarProvider>
            <SnackbarUtilsConfigurator />
            <App />
          </SnackbarProvider>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ThemeProvider>
);
reportWebVitals();
