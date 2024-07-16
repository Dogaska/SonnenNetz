import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AxiosInstance from "../axios/AxiosInstance";
import { RelatedBlogs } from "./related-blogs";
import { BlogComment } from "./blog-comment";
export function BlogTemplate() {
    const { slug } = useParams();
    // blog data get request
    const [blogData, setBlogData] = useState([]);
    const GetBlogData = () => {
        AxiosInstance.get(`api/resources/${slug}`)
            .then((res) => {
            if (res.data) {
                setBlogData([res.data]);
            }
        })
            .catch((error) => {
            console.error("Failed to fetch blog data:", error);
        });
    };
    useEffect(() => {
        GetBlogData();
    }, [slug]);
    // date formatting
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
    return (_jsxs(_Fragment, { children: [_jsx("main", { className: "pt-8 pb-16 bg-white dark:bg-gray-900", children: _jsx("div", { className: "px-8 mx-auto max-w-4xl", children: blogData.map((post) => (_jsxs("article", { className: "mx-auto w-full max-w-max format format-sm sm:format-base lg:format-lg format-blue dark:format-invert", children: [_jsxs("header", { className: "ml-auto mb-6 lg:mb-6", children: [_jsx("address", { className: "flex items-center mb-6 not-italic", children: _jsxs("div", { className: "inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white", children: [_jsx("img", { className: "mr-4 w-16 h-16 rounded-full", src: "https://flowbite.com/docs/images/people/profile-picture-2.jpg" }), _jsxs("div", { children: [_jsx(Link, { to: "#", rel: "author", className: "text-xl font-bold text-gray-900 dark:text-white", children: post.author_username }), _jsx("p", { className: "text-base text-gray-500 dark:text-gray-400", children: post.author_username }), _jsx("p", { className: "text-base text-gray-500 dark:text-gray-400", children: _jsx("time", { dateTime: post.created_at, children: formatDate(post.created_at) }) })] })] }) }), _jsx("h1", { className: "text-2xl font-bold", children: post.title }), _jsx("p", { children: post.content })] }), _jsx("img", { src: `http://localhost:8000${post.cover_image}`, alt: "Blog", className: "h-1/2 w-auto mx-auto rounded-lg" }), _jsx(BlogComment, {})] }, post.id))) }) }), _jsx(RelatedBlogs, {})] }));
}
