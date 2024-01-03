import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  RouterProvider,
  Routes,
  createRoutesFromElements,
} from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";

const router = createBrowserRouter(createRoutesFromElements);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
  </React.StrictMode>
);
