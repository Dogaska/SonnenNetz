import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import AxiosInstance from "../axios/AxiosInstance";
import { SocialLogin } from "./social-button";
import { FormHeader } from "../form/header";
import { InputBox } from "../form/input";
import { FormLabel } from "../form/label";
import { FormButton } from "../form/button";
export function LoginForm() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const [showMessage, setShowMessage] = useState(false);
    const submission = (data) => {
        AxiosInstance.post(`login/`, {
            email: data.email,
            password: data.password,
        })
            .then((response) => {
            localStorage.setItem("Token", response.data.token);
            if (location.pathname === "/login" || location.pathname === "/signup") {
                navigate("/home"); // Redirect to home if coming from login or signup
            }
            else {
                navigate(location); // Otherwise, go back to the previous page
            }
        })
            .catch((error) => {
            setShowMessage(true);
            console.error("Error during login", error.message);
        });
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [_jsx("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: _jsx(FormHeader, { children: "Login to your account" }) }), _jsxs("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: [showMessage ? (_jsx("div", { children: _jsx("div", { className: "flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm leading-6 text-white shadow-sm", children: _jsx("p", { className: "my-2 justify-center text-center text-sm text-white", children: "Login has failed, please try again or reset your password." }) }) })) : null, _jsxs("form", { onSubmit: handleSubmit(submission), className: "space-y-6", children: [_jsxs("div", { children: [_jsx(FormLabel, { htmlFor: "email", isRequired: true, children: "Email address" }), _jsx("div", { className: "mt-2", children: _jsx(InputBox, { id: "email", name: "email", type: "email", autoComplete: "email", required: true, placeholder: "Email address", register: register }) })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { className: "flex items-center justify-between", children: _jsx(FormLabel, { htmlFor: "password", isRequired: true, children: "Password" }) }), _jsx("div", { className: "text-sm", children: _jsx(Link, { to: "/request/password-reset", className: "font-semibold leading-6 text-indigo-600 hover:text-indigo-500", children: "Forgot password?" }) })] }), _jsx("div", { children: _jsx("div", { className: "mt-2", children: _jsx(InputBox, { id: "password", name: "password", type: "password", autoComplete: "password", required: true, placeholder: "Password", register: register }) }) })] }), _jsx("div", { children: _jsx(FormButton, { type: "submit", className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Login" }) })] }), _jsxs("p", { className: "mt-10 text-center text-sm text-gray-500", children: ["Not a member?", " ", _jsx(Link, { to: "/signup", className: "font-semibold leading-6 text-indigo-600 hover:text-indigo-500", children: "Create an account" }), _jsxs("div", { className: "flex w-full items-center space-x-4 mt-10 mb-10", children: [_jsx("div", { className: "flex-1 border-b border-gray-200" }), _jsx("span", { className: "flex items-center justify-center text-gray-400 text-lg font-normal leading-7 px-5", children: "OR" }), _jsx("div", { className: "flex-1 border-b border-gray-200" })] }), _jsx(SocialLogin, {})] })] })] }) }));
}
