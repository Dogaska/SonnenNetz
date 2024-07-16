import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AxiosInstance from "../axios/AxiosInstance";
import { useNavigate } from "react-router-dom";
import { FormHeader } from "../form/header";
import { InputBox, DateInputBox } from "../form/input";
import { FormButton } from "../form/button";
import { FormLabel } from "../form/label";
export function SignupForm() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [showMessage, setShowMessage] = useState(false);
    const submission = (data) => {
        AxiosInstance.post(`signup/`, {
            first_name: data.first_name,
            last_name: data.last_name,
            username: data.username,
            email: data.email,
            password: data.password,
            birthday: data.birthday,
        })
            .then(() => {
            navigate("/login");
        })
            .catch((error) => {
            setShowMessage(true);
            console.error("Error during login", error);
        });
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8", children: [_jsx("div", { className: "sm:mx-auto sm:w-full sm:max-w-sm", children: _jsx(FormHeader, { children: "Create an account" }) }), _jsxs("div", { className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm", children: [showMessage ? (_jsx("div", { children: _jsx("div", { className: "flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm leading-6 text-white shadow-sm", children: _jsx("p", { className: "my-2 justify-center text-center text-sm text-white", children: "Signup has failed, please try again." }) }) })) : null, _jsxs("form", { onSubmit: handleSubmit(submission), className: "space-y-6", children: [_jsxs("div", { children: [_jsx(FormLabel, { htmlFor: "first_name", isRequired: true, children: "First Name" }), _jsx("div", { className: "mt-2", children: _jsx(InputBox, { id: "first_name", name: "first_name", type: "text", autoComplete: "given-name", required: true, placeholder: "First name", register: register }) })] }), _jsxs("div", { children: [_jsx(FormLabel, { htmlFor: "last_name", isRequired: true, children: "Last Name" }), _jsx("div", { className: "mt-2", children: _jsx(InputBox, { id: "last_name", name: "last_name", type: "text", autoComplete: "family-name", required: true, placeholder: "Last name", register: register }) })] }), _jsxs("div", { children: [_jsx(FormLabel, { htmlFor: "birthday", isRequired: true, children: "Birthday" }), _jsx("div", { className: "mt-2", children: _jsx(DateInputBox, { id: "birthday", name: "birthday", type: "date", autoComplete: "bday", required: true, placeholder: "dd/mm/yy", register: register }) })] }), _jsxs("div", { children: [_jsx(FormLabel, { htmlFor: "email", isRequired: true, children: "Email address" }), _jsx("div", { className: "mt-2", children: _jsx(InputBox, { id: "email", name: "email", type: "email", autoComplete: "email", required: true, placeholder: "Email address", register: register }) })] }), _jsxs("div", { children: [_jsx(FormLabel, { htmlFor: "username", isRequired: true, children: "Username" }), _jsx("div", { className: "mt-2", children: _jsx(InputBox, { id: "username", name: "username", type: "text", autoComplete: "nickname", required: true, placeholder: "Username", register: register }) })] }), _jsxs("div", { children: [_jsx("div", { className: "flex items-center justify-between", children: _jsx(FormLabel, { htmlFor: "password", isRequired: true, children: "Password" }) }), _jsx("div", { className: "mt-2", children: _jsx(InputBox, { id: "password", name: "password", type: "password", autoComplete: "password", required: true, placeholder: "Password", register: register }) })] }), _jsxs("div", { children: [_jsx("div", { className: "flex items-center justify-between", children: _jsx(FormLabel, { htmlFor: "password2", isRequired: true, children: "Repeat password" }) }), _jsx("div", { className: "mt-2", children: _jsx(InputBox, { id: "password2", name: "password2", type: "password", autoComplete: "password", required: true, placeholder: "Repeat password", register: register }) })] }), _jsx("div", { children: _jsx(FormButton, { type: "submit", className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Submit" }) })] })] })] }) }));
}
