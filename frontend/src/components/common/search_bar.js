import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
export function SearchBar(props) {
    const { onSearch, barText } = props;
    const [input, setInput] = useState("");
    const handleSearch = (event) => {
        setInput(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(input);
    };
    return (_jsx("div", { className: "mx-auto max-w-7xl px-4 lg:px-8", children: _jsx("div", { className: "flex items-baseline justify-between border-b border-gray-200 pb-6 w-full ", children: _jsx("form", { className: "w-full", onSubmit: handleSubmit, children: _jsxs("div", { className: "relative w-full", children: [_jsx("div", { className: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none", children: _jsx(MagnifyingGlassIcon, { className: "w-4 h-4 text-gray-500", "aria-hidden": "true" }) }), _jsx("input", { type: "text", id: "default-search", value: input, onChange: handleSearch, className: "block w-full pr-20 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500", placeholder: barText, required: false }), _jsx("button", { type: "submit", className: "text-white absolute end-2.5 bottom-2.5 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800", children: "Search" })] }) }) }) }));
}
