import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import ClientThemeWrapper from "./context/ClientThemeWrapper.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ClientThemeWrapper>
        <App />
      </ClientThemeWrapper>
    </ThemeProvider>
  </React.StrictMode>
);
