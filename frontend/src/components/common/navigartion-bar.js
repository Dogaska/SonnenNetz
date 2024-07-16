import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import AxiosInstance from "../axios/AxiosInstance";
import { Link, useNavigate } from "react-router-dom";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
const navigation = [
    { name: "Home", href: "/home", current: false },
    { name: "Offers", href: "/projects", current: false },
    { name: "Blog", href: "/resources", current: false },
    { name: "Chat", href: "/chat", current: false },
    { name: "About Us", href: "/about", current: false },
    { name: "Login", href: "/login", current: false },
    { name: "Sign Up", href: "/signup", current: false },
];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
export function NavigationBar() {
    const [currentActiveIndex, setCurrentActiveIndex] = useState();
    const handleNavigationClick = (index) => {
        setCurrentActiveIndex(index);
    };
    const navigate = useNavigate();
    const logoutUser = () => {
        AxiosInstance.post(`logoutall/`, {}).then(() => {
            // here logout all removes all tokens for all the devices of the user (alternativ -> `logout/`)
            localStorage.removeItem("Token");
            navigate("/login");
        });
    };
    const [userHasToken, setUserHasToken] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem("Token");
        token ? setUserHasToken(true) : setUserHasToken(false);
    }, []);
    return (_jsx(Disclosure, { as: "nav", className: "bg-gray-800 z-50", children: ({ open }) => (_jsxs(_Fragment, { children: [_jsx("div", { className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8", children: _jsxs("div", { className: "relative flex h-16 items-center justify-between", children: [_jsx("div", { className: "absolute inset-y-0 left-0 flex items-center sm:hidden", children: _jsxs(DisclosureButton, { className: "relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white", children: [_jsx("span", { className: "absolute -inset-0.5" }), _jsx("span", { className: "sr-only", children: "Open main menu" }), open ? (_jsx(XMarkIcon, { className: "block h-6 w-6", "aria-hidden": "true" })) : (_jsx(Bars3Icon, { className: "block h-6 w-6", "aria-hidden": "true" }))] }) }), _jsxs("div", { className: "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start", children: [_jsx("div", { className: "flex flex-shrink-0 items-center", children: _jsx("img", { className: "block h-12 w-auto lg:h-16 hover:shadow-lg transition-shadow duration-300", src: "src/assets/images/Logo_Sonnennetz.svg", alt: "SonnenNetz", style: { filter: "drop-shadow(2px 4px 6px black)" } }) }), _jsxs("div", { className: "hidden sm:flex sm:ml-6 sm:flex-1 sm:items-center sm:justify-between", children: [_jsx("div", { className: "flex items-baseline space-x-4", children: navigation.map((item, index) => item.name !== "Login" &&
                                                    item.name !== "Sign Up" && (_jsx(Link, { to: item.href, className: classNames(index === currentActiveIndex
                                                        ? "bg-gray-900 text-white"
                                                        : "text-gray-300 hover:bg-gray-700 hover:text-white", "rounded-md px-3 py-2 text-sm font-medium"), onClick: () => handleNavigationClick(index), "aria-current": index === currentActiveIndex ? "page" : undefined, children: item.name }, item.name))) }), !userHasToken && (_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(Link, { to: "/login", className: "text-sm px-3 py-2 leading-none border rounded-md text-gray-300 font-medium hover:border-transparent hover:text-indigo-500 hover:bg-white", children: "Login" }), _jsx(Link, { to: "/signup", className: "text-sm px-3 py-2 leading-none border rounded-md text-gray-300 font-medium hover:border-transparent hover:text-indigo-500 hover:bg-white", children: "Sign Up" })] }))] })] }), userHasToken && (_jsxs("div", { className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0", children: [_jsxs("button", { type: "button", className: "relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800", children: [_jsx("span", { className: "absolute -inset-1.5" }), _jsx("span", { className: "sr-only", children: "View notifications" }), _jsx(BellIcon, { className: "h-6 w-6", "aria-hidden": "true" })] }), _jsxs(Menu, { as: "div", className: "relative ml-3", children: [_jsx("div", { children: _jsxs(MenuButton, { className: "relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800", children: [_jsx("span", { className: "absolute -inset-1.5" }), _jsx("span", { className: "sr-only", children: "Open user menu" }), _jsx("img", { className: "h-8 w-8 rounded-full", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "" })] }) }), _jsxs(MenuItems, { className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in", children: [_jsx(MenuItem, { children: ({ focus }) => (_jsx("a", { href: "#", className: classNames(focus ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"), children: "Your Profile" })) }), _jsx(MenuItem, { children: ({ focus }) => (_jsx("a", { href: "#", className: classNames(focus ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"), children: "Settings" })) }), _jsx(MenuItem, { children: ({ focus }) => (_jsx("a", { href: "#", className: classNames(focus ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"), onClick: logoutUser, children: "Sign out" })) })] })] })] }))] }) }), _jsx(DisclosurePanel, { className: "sm:hidden", children: _jsx("div", { className: "space-y-1 px-2 pb-3 pt-2", children: navigation.map((item) => (_jsx(DisclosureButton, { as: "a", href: item.href, className: classNames(item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium"), "aria-current": item.current ? "page" : undefined, children: item.name }, item.name))) }) })] })) }));
}
