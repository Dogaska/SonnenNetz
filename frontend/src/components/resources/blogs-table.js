import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ResourceList } from "./resource-list";
import { AddNewBlog } from "./create-new-blog";
import { SearchBar } from "../common/search_bar";
import { Filter } from "../common/filter";
import { HeaderBlogs } from "../common/header";
import { useState, useEffect } from "react";
import AxiosInstance from "../axios/AxiosInstance";
import { Pagination } from "../common/pagination";
const filterOptions = [
    {
        key: "category",
        options: [
            { label: "Select Category", value: "" },
            { label: "Community", value: "community" },
            { label: "Guide", value: "guide" },
            { label: "Political", value: "political" },
            { label: "Environmental", value: "environmental" },
            { label: "Technical", value: "technical" },
            { label: "Financial", value: "financial" },
        ],
    },
    {
        key: "level",
        options: [
            { label: "Select Level", value: "" },
            { label: "Easy", value: "easy" },
            { label: "Medium", value: "medium" },
            { label: "Hard", value: "hard" },
            { label: "Advance", value: "advance" },
        ],
    },
];
export function BlogsTable() {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [blogData, setBlogData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({ category: "", level: "" });
    const GetBlogData = () => {
        let queryParams = `page=${currentPage}`;
        queryParams += search ? `&search=${encodeURIComponent(search)}` : "";
        queryParams += filters.category
            ? `&category=${encodeURIComponent(filters.category)}`
            : "";
        queryParams += filters.level
            ? `&level=${encodeURIComponent(filters.level)}`
            : "";
        AxiosInstance.get(`http://localhost:8000/api/resources/?${queryParams}`)
            .then((res) => {
            if (res.data.results && Array.isArray(res.data.results.result)) {
                setBlogData(res.data.results.result);
                console.log(res.data.results.result);
                setTotalPages(res.data.results.total_pages);
                setIsDataLoaded(true);
            }
        })
            .catch((error) => {
            console.error("Failed to fetch blog data:", error);
        });
    };
    useEffect(() => {
        GetBlogData();
    }, [currentPage, search, filters]);
    return (_jsxs("div", { className: "bg-white", children: [_jsx(HeaderBlogs, {}), _jsx(SearchBar, { onSearch: setSearch, barText: "Search blogs..." }), _jsxs("div", { className: "mx-auto max-w-7xl px-4 lg:px-8 flex justify-between items-center", children: [_jsx(Filter, { setFilters: setFilters, filterData: filterOptions }), _jsx(AddNewBlog, {})] }), _jsx(ResourceList, { blogData: blogData, isDataLoaded: isDataLoaded }), _jsx(Pagination, { totalPages: totalPages, currentPage: currentPage, onPageChange: setCurrentPage })] }));
}
