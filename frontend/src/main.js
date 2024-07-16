import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/common/scroll-to-top.tsx";
ReactDOM.createRoot(document.getElementById("root")).render(_jsxs(BrowserRouter, { children: [_jsx(ScrollToTop, {}), _jsx(React.StrictMode, { children: _jsx(App, {}) })] }));
