import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Pagination = ({ totalPages, currentPage, onPageChange, }) => {
    // Create an array of page numbers for rendering
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    return (_jsxs("div", { className: "flex justify-center mt-8", children: [_jsx("button", { onClick: () => onPageChange(currentPage - 1), disabled: currentPage === 1, className: "mx-1 px-4 py-2 rounded text-white bg-indigo-500 border border-indigo-500 hover:bg-indigo-600", children: "Prev" }), pageNumbers.map((page) => (_jsx("button", { onClick: () => onPageChange(page), className: `mx-1 px-4 py-2 rounded ${currentPage === page
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-indigo-500 border border-indigo-500"} hover:bg-indigo-600`, children: page }, page))), _jsx("button", { onClick: () => onPageChange(currentPage + 1), disabled: currentPage === totalPages, className: "mx-1 px-4 py-2 rounded text-white bg-indigo-500 border border-indigo-500 hover:bg-indigo-600", children: "Next" })] }));
};
