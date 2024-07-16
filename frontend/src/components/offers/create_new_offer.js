import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { ChevronDownIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
export function NewOffer() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (_jsxs("div", { children: [_jsxs("button", { type: "button", onClick: toggleDropdown, className: "mt-3 text-white bg-indigo-600 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 flex items-center justify-center", children: ["Create New", _jsx(PlusCircleIcon, { className: "h-5 w-5 ml-2" }), _jsx(ChevronDownIcon, { className: "w-5 h-5 ml-2" })] }), isDropdownOpen && (_jsx("div", { id: "dropdown", className: "absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700", children: _jsxs("ul", { className: "py-2 text-sm text-gray-700 dark:text-gray-200", "aria-labelledby": "dropdownDefaultButton", children: [_jsx("li", { children: _jsx(Link, { to: "/projects/investment-offer", className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white", children: "Investment Offer" }) }), _jsx("li", { children: _jsx(Link, { to: "/projects/surface-offer", className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white", children: "Surface Offer" }) })] }) }))] }));
}
