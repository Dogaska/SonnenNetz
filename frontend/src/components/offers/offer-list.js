import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
// Define the Post interface according to the actual data structure
export function OfferList(props) {
    const { offerData } = props;
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const monthNames = [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
        ];
        return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    };
    const getOfferStyle = (offer_type) => {
        switch (offer_type) {
            case "Surface Offer":
                return "bg-lime-100";
            case "Investment Offer":
                return "bg-sky-100";
            case "Project Offer":
                return "bg-yellow-100";
            default:
                return {};
        }
    };
    return (_jsx("div", { children: _jsx("section", { className: "py-24 relative", children: _jsx("div", { className: "w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto", children: _jsx("div", { className: "main-box border border-gray-200 rounded-xl pt-6 max-w-xl lg:max-w-full mx-auto", children: offerData.map((offer) => (_jsx(Link, { to: offer.offer_type === "Surface Offer"
                            ? `/projects/surface-details/${offer.slug}`
                            : offer.offer_type === "Investment Offer"
                                ? `/projects/investment-details/${offer.slug}`
                                : offer.offer_type === "Project Offer"
                                    ? `/projects/project-details/${offer.slug}`
                                    : `/offer/${offer.slug}`, children: _jsxs("div", { className: "flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full hover:bg-indigo-50", children: [_jsx("div", { className: "ml-5 img-box w-full lg:max-w-[180px]", children: _jsx("img", { src: `http://localhost:8000${offer.cover_image}`, alt: `${offer.offer_name} image`, className: "aspect-square w-full rounded-lg" }) }), _jsx("div", { className: "flex flex-row items-center w-full", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 w-full", children: [_jsx("div", { className: "flex items-center", children: _jsxs("div", { children: [_jsx("h2", { className: "font-semibold text-xl leading-8 text-black mb-3", children: offer.offer_name }), _jsxs("p", { className: "font-normal text-lg leading-8 text-gray-500 mb-3", children: ["Location: ", offer.location] }), _jsxs("div", { className: "flex items-center", children: [_jsxs("p", { className: "font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200", children: ["Area: ", offer.surface_area || "-", " m", _jsx("sup", { children: "2" })] }), _jsxs("p", { className: "font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200", children: ["Budget: ", offer.investment_amount || "-", " \u20AC"] }), _jsx("p", { className: `font-medium text-base leading-7 rounded-full px-3 text-black ${getOfferStyle(offer.offer_type)}`, children: offer.offer_type })] })] }) }), _jsxs("div", { className: "grid grid-cols-5", children: [_jsx("div", { className: "col-span-5 lg:col-span-2 flex items-center", children: _jsxs("div", { className: "flex gap-3 lg:block", children: [_jsx("p", { className: "font-medium text-sm leading-7 text-black", children: "Status" }), _jsx("p", { className: `font-medium text-sm leading-6 py-0.5 px-3 rounded-full lg:mt-3 bg-${offer.status.toLowerCase()}-50 text-${offer.status.toLowerCase()}-600`, children: offer.status })] }) }), _jsx("div", { className: "col-span-5 lg:col-span-2 flex items-center", children: _jsxs("div", { className: "flex gap-3 lg:block", children: [_jsx("p", { className: "font-medium text-sm whitespace-nowrap leading-6 text-black", children: "Start Date" }), _jsx("p", { className: "font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500", children: formatDate(offer.start_date) })] }) })] }), _jsx("p", { className: "mt-5 line-clamp-3 text-base leading-6 text-gray-600", children: offer.offer_description }), offer.progress !== undefined && (_jsx("div", { className: "relative", children: _jsx("div", { className: "w-64 bg-gray-200 rounded-full dark:bg-gray-700 mt-2", children: _jsxs("div", { className: "bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full", style: { width: `${offer.progress}%` }, children: [offer.progress, "%"] }) }) }))] }) })] }) }, offer.id))) }) }) }) }));
}
