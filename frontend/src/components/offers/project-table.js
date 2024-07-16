import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HeaderOffers } from "../common/header";
import { OfferList } from "./offer-list";
import { NewOffer } from "./create_new_offer";
import { SearchBar } from "../common/search_bar";
import { Filter } from "../common/filter";
import AxiosInstance from "../axios/AxiosInstance";
import { useState, useEffect } from "react";
import { Pagination } from "../common/pagination";
const filterOptions = [
    {
        key: "category",
        options: [
            { label: "Select Category", value: "" },
            { label: "Surface Offer", value: "Surface Offer" },
            { label: "Investment Offer", value: "Investment Offer" },
        ],
    },
];
export function ProjectTable() {
    const numOfferPerPage = 12;
    const [offerData, setOfferData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({ category: "", level: "" });
    const GetOfferData = () => {
        let queryParams = `page=${currentPage}`;
        queryParams += search ? `&search=${encodeURIComponent(search)}` : "";
        queryParams += filters.category
            ? `&category=${encodeURIComponent(filters.category)}`
            : "";
        queryParams += filters.level
            ? `&level=${encodeURIComponent(filters.level)}`
            : "";
        AxiosInstance.get(`http://localhost:8000/api/offers/?${queryParams}`)
            .then((res) => {
            if (res.data.results && Array.isArray(res.data.results)) {
                setOfferData(res.data.results);
                setTotalPages(Math.ceil(res.data.count / numOfferPerPage));
            }
        })
            .catch((error) => {
            console.error("Failed to fetch offer data:", error);
        });
    };
    useEffect(() => {
        GetOfferData();
    }, [currentPage]);
    return (_jsxs("div", { className: "bg-white", children: [_jsx(HeaderOffers, {}), _jsx(SearchBar, { onSearch: setSearch, barText: "Search offers..." }), _jsxs("div", { className: "mx-auto max-w-7xl px-4 lg:px-8 flex justify-between items-center", children: [_jsx(Filter, { setFilters: setFilters, filterData: filterOptions }), _jsx(NewOffer, {})] }), _jsx(OfferList, { offerData: offerData }), _jsx(Pagination, { totalPages: totalPages, currentPage: currentPage, onPageChange: setCurrentPage })] }));
}
