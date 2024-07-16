import { jsx as _jsx } from "react/jsx-runtime";
import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoute = () => {
    const token = localStorage.getItem("Token");
    return token ? _jsx(Outlet, {}) : _jsx(Navigate, { to: "/login" });
};
export default ProtectedRoute;
