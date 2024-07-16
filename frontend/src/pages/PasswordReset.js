import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import AxiosInstance from "../components/axios/AxiosInstance";
import { FormHeader } from "../components/form/header";
import { InputBox } from "../components/form/input";
import { FormLabel } from "../components/form/label";
import { FormButton } from "../components/form/button";
import { useState } from "react";
export function PasswordReset() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { token } = useParams();
    const [showMessage, setShowMessage] = useState(false);
    const submission = (data) => {
        AxiosInstance.post(`api/password_reset/confirm/`, {
            password: data.password,
            token: token,
        }).then(() => {
            setShowMessage(true);
            setTimeout(() => {
                navigate("/login");
            }, 6000);
        });
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [_jsx("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: _jsx(FormHeader, { children: "Reset your password" }) }), _jsxs("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: [showMessage ? (_jsx("div", { children: _jsx("div", { className: "flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm leading-6 text-white shadow-sm", children: _jsx("p", { className: "my-2 justify-center text-center text-sm text-white", children: "Your password reset was successful, you will be directed to login page..." }) }) })) : null, _jsxs("form", { onSubmit: handleSubmit(submission), className: "space-y-6", children: [_jsxs("div", { children: [_jsx("div", { className: "flex items-center justify-between", children: _jsx(FormLabel, { htmlFor: "password", isRequired: true, children: "Password" }) }), _jsx("div", { className: "mt-2", children: _jsx(InputBox, { id: "password", name: "password", type: "password", autoComplete: "password", required: true, placeholder: "Password", register: register }) })] }), _jsxs("div", { children: [_jsx("div", { className: "flex items-center justify-between", children: _jsx(FormLabel, { htmlFor: "password", isRequired: true, children: "Confirm password" }) }), _jsx("div", { className: "mt-2", children: _jsx(InputBox, { id: "password", name: "password2", type: "password", autoComplete: "password", required: true, placeholder: "Confirm password", register: register }) })] }), _jsx("div", { children: _jsx(FormButton, { type: "submit", className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Reset password" }) })] })] })] }) }));
}
