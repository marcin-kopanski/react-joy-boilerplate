import "./index.css";
import "@fontsource/public-sans";

import React from "react";
import ReactDOM from "react-dom/client";
import { Providers } from "./components/Providers";
import { Router } from "./components/Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <Router />
    </Providers>
  </React.StrictMode>,
);
