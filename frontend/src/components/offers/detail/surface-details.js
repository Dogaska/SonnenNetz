import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AxiosInstance from "../../axios/AxiosInstance";
export function SurfaceOfferDetails() {
    const { slug } = useParams();
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [offerData, setOfferData] = useState();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const GetOfferData = () => {
        AxiosInstance.get(`api/offers/${slug}`)
            .then((res) => {
            if (res.data) {
                setOfferData(res.data.surface_offer);
                console.log("Data is loading...");
                console.log(res.data.surface_offer);
                setIsDataLoaded(true);
            }
        })
            .catch((error) => {
            console.error("Failed to fetch surface offer data:", error);
        });
    };
    useEffect(() => {
        GetOfferData();
    }, [slug]);
    const nextImage = () => {
        if (offerData) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % offerData.images.length);
        }
    };
    const prevImage = () => {
        if (offerData) {
            setCurrentImageIndex((prevIndex) => prevIndex === 0 ? offerData.images.length - 1 : prevIndex - 1);
        }
    };
    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };
    const handleOverlayClick = (e) => {
        if (e.target.id === "fullScreenImage") {
            return;
        }
        toggleFullScreen();
    };
    return (offerData &&
        isDataLoaded && (_jsx("div", { className: "bg-white", children: _jsxs("div", { className: "mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl", children: offerData.offer_name }), _jsx("p", { className: "mt-4 text-gray-500 text-fit", children: offerData.offer_description })] }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-x-8 gap-y-16", children: [_jsx("div", { children: _jsxs("dl", { className: "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8", children: [_jsxs("div", { className: "border-t border-gray-200 pt-4", children: [_jsx("dt", { className: "font-medium text-gray-900", children: "Surface Provider" }), _jsx("dd", { className: "mt-2 text-sm text-gray-500", children: offerData.offer_owner_first_name &&
                                                    offerData.offer_owner_last_name })] }), _jsxs("div", { className: "border-t border-gray-200 pt-4", children: [_jsx("dt", { className: "font-medium text-gray-900", children: "Location" }), _jsx("dd", { className: "mt-2 text-sm text-gray-500", children: offerData.location })] }), _jsxs("div", { className: "border-t border-gray-200 pt-4", children: [_jsx("dt", { className: "font-medium text-gray-900", children: "Surface Area" }), _jsxs("dd", { className: "mt-2 text-sm text-gray-500", children: [offerData.surface_area, " m", _jsx("sup", { children: "2" })] })] }), _jsxs("div", { className: "border-t border-gray-200 pt-4", children: [_jsx("dt", { className: "font-medium text-gray-900", children: "Surface Type" }), _jsx("dd", { className: "mt-2 text-sm text-gray-500", children: offerData.surface_type })] }), _jsxs("div", { className: "border-t border-gray-200 pt-4", children: [_jsx("dt", { className: "font-medium text-gray-900", children: "Start Date" }), _jsx("dd", { className: "mt-2 text-sm text-gray-500", children: offerData.start_date })] }), _jsxs("div", { className: "border-t border-gray-200 pt-4", children: [_jsx("dt", { className: "font-medium text-gray-900", children: "End Date" }), _jsx("dd", { className: "mt-2 text-sm text-gray-500", children: offerData.end_date })] }), _jsxs("div", { className: "border-t border-gray-200 pt-4", children: [_jsx("dt", { className: "font-medium text-gray-900", children: "Goal Budget" }), _jsxs("dd", { className: "mt-2 text-sm text-gray-500", children: [offerData.investment_amount, " \u20AC"] })] }), _jsxs("div", { className: "border-t border-gray-200 pt-4", children: [_jsx("dt", { className: "font-medium text-gray-900", children: "Maximum Investment Limit per Investor" }), _jsxs("dd", { className: "mt-2 text-sm text-gray-500", children: [offerData.max_investment_limit, " \u20AC"] })] }), _jsxs("div", { className: "lg:col-span-2 justify-between", children: [_jsx("dt", { className: "font-medium text-gray-900 mb-2", children: "Attachments" }), _jsx("dd", { className: "mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0", children: _jsx("ul", { role: "list", className: "divide-y divide-gray-100 rounded-md border border-gray-200", children: offerData.files.map((file) => {
                                                        const fileName = file.file.split("/").pop();
                                                        return (_jsxs("li", { className: "flex items-center justify-between py-4 px-4 text-sm leading-6 hover:bg-indigo-100", children: [_jsxs("div", { className: "flex items-center flex-1 min-w-0", children: [_jsx(PaperClipIcon, { className: "h-5 w-5 text-gray-400 mr-2", "aria-hidden": "true" }), _jsx("a", { href: `http://localhost:8000${file.file}`, className: "flex-1 truncate font-medium", download: fileName, children: fileName })] }), _jsx("a", { href: `http://localhost:8000${file.file}`, download: fileName, className: "ml-4 font-medium text-indigo-600 hover:text-indigo-500 whitespace-nowrap", children: "Download" })] }, file.id));
                                                    }) }) })] })] }) }), _jsx("div", { className: "relative", children: offerData.images.length > 0 && (_jsxs("div", { className: "relative", children: [_jsx("img", { src: `http://localhost:8000${offerData.images[currentImageIndex].image}`, className: "rounded-lg w-full max-h-96 object-cover", alt: "Surface Offer", onClick: toggleFullScreen }), isFullScreen && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50", onClick: handleOverlayClick, children: _jsx("img", { src: `http://localhost:8000${offerData.images[currentImageIndex].image}`, className: "max-w-full max-h-full cursor-pointer", alt: "Fullscreen Image", onClick: toggleFullScreen }) })), offerData.images.length > 1 && (_jsxs("div", { children: [_jsx("div", { className: "absolute bottom-0 left-0 right-0 p-2 text-center", children: Array.from({ length: offerData.images.length }).map((_, idx) => (_jsx("span", { className: `inline-block h-3 w-3 rounded-full mx-2 ${currentImageIndex === idx
                                                        ? "bg-indigo-500"
                                                        : "bg-gray-300"}`, "aria-hidden": "true" }, idx))) }), _jsx("button", { onClick: prevImage, className: "absolute inset-y-0 left-2 my-auto flex items-center justify-center bg-white bg-opacity-75 p-2 rounded-full shadow cursor-pointer text-indigo-500 text-xl", "aria-label": "Previous Image", style: {
                                                    width: "40px",
                                                    height: "40px",
                                                    fontSize: "24px",
                                                }, children: "\u2190" }), _jsx("button", { onClick: nextImage, className: "absolute inset-y-0 right-2 my-auto flex items-center justify-center bg-white bg-opacity-75 p-2 rounded-full shadow cursor-pointer text-indigo-500 text-xl", "aria-label": "Next Image", style: {
                                                    width: "40px",
                                                    height: "40px",
                                                    fontSize: "24px",
                                                }, children: "\u2192" })] }))] })) })] }), _jsxs("div", { className: "mt-6 flex justify-start gap-x-6 w-full h-12 text-base font-semibold leading-6", children: [_jsx("button", { type: "submit", className: "rounded-md bg-indigo-600 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Apply to the surface offer" }), _jsx("button", { type: "submit", className: "rounded-md bg-indigo-600 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Contact with surface owner" })] })] }) })));
}
