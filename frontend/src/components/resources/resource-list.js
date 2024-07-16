import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
export function ResourceList(props) {
    const { blogData, isDataLoaded } = props;
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
    const getLevelStyle = (level) => {
        switch (level) {
            case "easy":
                return "bg-lime-100";
            case "medium":
                return "bg-sky-100";
            case "advance":
                return "bg-rose-100";
            default:
                return "bg-gray-100";
        }
    };
    return (isDataLoaded && (_jsx("div", { className: "bg-white py-12 sm:py-12", children: _jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: _jsx("article", { className: "flex flex-col px-10 py-10 border border-gray-300 rounded-lg p-4 shadow-sm", children: _jsx("div", { className: "mx-auto mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: blogData.map((post, index) => (_jsxs("article", { className: "flex flex-col border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md", style: { minHeight: "30rem" }, children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("time", { dateTime: post.created_at, className: "text-gray-500", children: formatDate(post.created_at) }), _jsxs("div", { children: [_jsx(Link, { to: post.category, className: "rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 mr-2", children: post.category }), _jsx(Link, { to: `/level/${post.level}`, className: `rounded-full px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 ${getLevelStyle(post.level)}`, children: post.level })] })] }), _jsx(Link, { to: post.slug, children: _jsx("img", { src: `http://localhost:8000${post.cover_image}` ||
                                        "default-image-url.jpg", alt: post.title, className: "w-full mt-5 h-48 object-cover rounded-lg mb-5" // Added border radius and margin bottom
                                 }) }), _jsx("h3", { className: "text-lg font-semibold leading-snug line-clamp-2 mb-2", children: _jsx(Link, { to: post.slug, children: post.title }) }), _jsx("p", { className: "text-sm text-gray-600 line-clamp-5 mb-4", children: post.excerpt }), _jsxs("div", { className: "mt-auto pt-2 flex items-center", children: [_jsx("img", { src: post.author_profile_image, alt: "", className: "h-10 w-10 rounded-full mr-4" }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-semibold", children: post.author_username }), _jsx("p", { className: "text-xs text-gray-500", children: post.profession })] })] })] }, index))) }) }) }) })));
}
