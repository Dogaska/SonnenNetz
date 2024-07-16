import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Resources } from "./pages/Resources";
import { Projects } from "./pages/Projects";
import { ProjectOffer } from "./pages/ProjectOffer";
import { SurfaceOffer } from "./pages/SurfaceOffer";
import { InvestmentOffer } from "./pages/InvestmentOffer";
import { SurfaceFeatures } from "./pages/SurfaceFeatures";
import { InvestmentFeatures } from "./pages/InvestmentFeatures";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { PasswordResetRequest } from "./pages/PasswordResetRequest";
import { PasswordReset } from "./pages/PasswordReset";
import { BlogArticle } from "./pages/BlogArticle";
import ProtectedRoute from "./components/authentication/protected-route";
import { Chat } from "./components/chat/chat";
export default function App() {
    return (_jsx("div", { children: _jsxs(Routes, { children: [_jsx(Route, { index: true, element: _jsx(Home, {}) }), _jsx(Route, { path: "/home", element: _jsx(Home, {}) }), _jsx(Route, { path: "/resources", element: _jsx(Resources, {}) }), _jsx(Route, { path: "/resources/:slug", element: _jsx(BlogArticle, {}) }), _jsx(Route, { path: "/projects", element: _jsx(Projects, {}) }), _jsx(Route, { path: "/projects/surface-details/:slug/", element: _jsx(SurfaceFeatures, {}) }), _jsx(Route, { path: "/projects/investment-details/:slug", element: _jsx(InvestmentFeatures, {}) }), _jsxs(Route, { element: _jsx(ProtectedRoute, {}), children: [_jsx(Route, { path: "/projects/project-offer/*", element: _jsx(ProjectOffer, {}) }), _jsx(Route, { path: "/projects/surface-offer/*", element: _jsx(SurfaceOffer, {}) }), _jsx(Route, { path: "/projects/investment-offer/*", element: _jsx(InvestmentOffer, {}) }), _jsx(Route, { path: "/chat", element: _jsx(Chat, {}) }), _jsx(Route, { path: "/chat/:chat_id/:username", element: _jsx(Chat, {}) })] }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/signup", element: _jsx(Signup, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/request/password-reset", element: _jsx(PasswordResetRequest, {}) }), _jsx(Route, { path: "/password-reset/:token", element: _jsx(PasswordReset, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }));
}
