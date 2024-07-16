import { jsx as _jsx } from "react/jsx-runtime";
export function Filter(props) {
    const { setFilters, filterData } = props;
    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters((filters) => ({ ...filters, [name]: value }));
    };
    return (_jsx("div", { className: "flex flex-row justify-start items-center space-x-2", children: filterData.map((data, index) => (_jsx("div", { className: "relative", children: _jsx("select", { name: data.key, onChange: handleFilterChange, className: "mt-3 text-white bg-indigo-600 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 flex items-center justify-center", children: data.options.map((option, optionIndex) => (_jsx("option", { value: option.value, className: "py-2 text-sm text-gray-700 bg-white hover:bg-gray-100 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900", children: option.label }, optionIndex))) }) }, index))) }));
}
