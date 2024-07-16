import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormHeader } from "../../form/header";
import { InputBox, DateInputBox, TextArea, FileInput } from "../../form/input";
import { FormButton } from "../../form/button";
import { FormLabel } from "../../form/label";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../../axios/AxiosInstance";
export function SurfaceForm() {
    const { register, handleSubmit } = useForm();
    const [coverImage, setCoverImage] = useState(null);
    const [coverImagePreview, setCoverImagePreview] = useState(null);
    const [pictures, setPictures] = useState([]);
    const [documents, setDocuments] = useState([]);
    const [picturePreviews, setPicturePreviews] = useState([]);
    const [documentPreviews, setDocumentPreviews] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [isPostSuccessful, setIsPostSuccessful] = useState(false);
    const navigate = useNavigate();
    const handleCoverImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imagePreview = {
                name: file.name,
                url: URL.createObjectURL(file),
                size: file.size,
            };
            setCoverImage(file);
            setCoverImagePreview(imagePreview);
        }
    };
    const handlePicturesChange = (event) => {
        const filesArray = Array.from(event.target.files);
        const filePreviews = filesArray.map((file) => ({
            name: file.name,
            url: URL.createObjectURL(file),
            size: file.size,
        }));
        setPictures(filesArray);
        setPicturePreviews(filePreviews);
    };
    const handleDocumentsChange = (event) => {
        const filesArray = Array.from(event.target.files);
        const filePreviews = filesArray.map((file) => ({
            name: file.name,
            url: URL.createObjectURL(file),
            size: file.size,
        }));
        setDocuments(filesArray);
        setDocumentPreviews(filePreviews);
    };
    const onSubmit = (data) => {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (typeof value === "string" || value instanceof Blob) {
                formData.append(key, value);
            }
            else {
                formData.append(key, String(value));
            }
        });
        if (coverImage) {
            formData.append("cover_image", coverImage);
            pictures.forEach((picture) => {
                formData.append("images", picture);
            });
            documents.forEach((document) => {
                formData.append("files", document);
            });
        }
        formData.append("offer_type", "Surface Offer");
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        AxiosInstance.post("/api/offers/", formData, {
            headers: {
                "Content-Type": undefined,
            },
        })
            .then((response) => {
            console.log("Success:", response.data);
            setShowMessage(true);
            setIsPostSuccessful(true);
            // Navigate to the new page after 3 seconds
            setTimeout(() => {
                navigate("/projects");
            }, 3000);
        })
            .catch((error) => {
            setShowMessage(true);
            setIsPostSuccessful(false);
            console.error("There was an error creating the offer!", error.response.data);
        });
    };
    return (_jsxs("div", { className: "container mx-auto max-w-4xl px-4  mt-20", children: [_jsx(FormHeader, { children: "Create a new surface offer" }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsxs("div", { className: "grid md:grid-cols-2 grid-cols-1 gap-x-8", children: [_jsxs("div", { children: [_jsx(FormLabel, { htmlFor: "offer-name", isRequired: true, children: "Offer Name" }), _jsx("div", { className: "mt-2", children: _jsx(InputBox, { id: "offer_name", name: "offer_name", type: "text", autoComplete: "off", required: true, placeholder: "Offer name", register: register }) })] }), _jsxs("div", { children: [_jsx(FormLabel, { htmlFor: "last_name", isRequired: true, children: "Surface Location" }), _jsx("div", { className: "mt-2", children: _jsx(InputBox, { id: "location", name: "location", type: "text", autoComplete: "off", required: true, placeholder: "Surface location", register: register }) })] }), _jsxs("div", { className: "col-span-full", children: [_jsx(FormLabel, { htmlFor: "offer_description", isRequired: true, children: "Offer Description" }), _jsx(TextArea, { id: "description", name: "offer_description", placeholder: "Write an offer description...", rows: 6, register: register })] }), _jsxs("div", { className: "col-span-full", children: [_jsx(FormLabel, { htmlFor: "motivation", isRequired: false, children: "Motivation" }), _jsx(TextArea, { id: "motivation", name: "motivation", placeholder: "Write a motivation text that describes your dream energy community...", rows: 6, register: register })] }), _jsxs("div", { children: [_jsx(FormLabel, { htmlFor: "surface_type", isRequired: true, children: "Surface type" }), _jsx("div", { className: "mt-2", children: _jsx(InputBox, { id: "surface_type", name: "surface_type", type: "text", autoComplete: "off", required: true, placeholder: "Roof etc..", register: register }) })] }), _jsxs("div", { children: [_jsx(FormLabel, { htmlFor: "surface_area", isRequired: true, children: "Surface area" }), _jsx("div", { className: "mt-2", children: _jsx(InputBox, { id: "surface_area", name: "surface_area", type: "number", autoComplete: "off", required: true, placeholder: "Surface area in metersquares.", register: register }) })] }), _jsxs("div", { children: [_jsx(FormLabel, { htmlFor: "investment_amount", isRequired: true, children: "Budget goal" }), _jsx("div", { className: "mt-2", children: _jsx(InputBox, { id: "budget_goal", name: "investment_amount", type: "number", autoComplete: "off", required: true, placeholder: "Budget goal in euros.", register: register }) })] }), _jsxs("div", { children: [_jsx(FormLabel, { htmlFor: "max_investment_limit", isRequired: true, children: "Maximum investment limit per investor" }), _jsx("div", { className: "mt-2", children: _jsx(InputBox, { id: "max_investment_limit", name: "max_investment_limit", type: "number", autoComplete: "off", required: true, placeholder: "Investment upper bound in euros.", register: register }) })] }), _jsxs("div", { children: [_jsx(FormLabel, { htmlFor: "startdate", isRequired: true, children: "Start date" }), _jsx("div", { className: "mt-2", children: _jsx(DateInputBox, { id: "start_date", name: "start_date", type: "date", autoComplete: "off", required: true, placeholder: "mm/dd/yyyy", register: register }) })] }), _jsxs("div", { children: [_jsx(FormLabel, { htmlFor: "enddate", isRequired: true, children: "End date" }), _jsx("div", { className: "mt-2", children: _jsx(DateInputBox, { id: "end_date", name: "end_date", type: "date", autoComplete: "bday", required: true, placeholder: "dd/mm/yy", register: register }) })] })] }), _jsxs("div", { className: "col-span-full", children: [_jsx(FormLabel, { htmlFor: "cover-photo-upload", isRequired: true, children: "Cover Picture" }), _jsx(FileInput, { id: "cover-photo-upload", name: "cover_image", htmlFor: "cover-photo-upload", text: "Upload offer cover image", type: "file", accept: ".png, .jpg", extension: "PNG, JPG ... ", size: "10", onChange: handleCoverImageChange, multiple: false }), _jsx("div", { className: "preview-container", children: coverImagePreview ? (_jsxs("div", { className: "preview", children: [_jsx("a", { href: coverImagePreview.url, target: "_blank", rel: "noopener noreferrer", children: coverImagePreview.name }), _jsxs("span", { className: "flex-shrink-0 text-gray-400", children: [(coverImagePreview.size / 1024 / 1024).toFixed(2), " MB"] })] })) : (_jsx("div", { children: "No cover image selected." })) })] }), _jsxs("div", { className: "col-span-full", children: [_jsx(FormLabel, { htmlFor: "photo-upload", isRequired: true, children: "Pictures" }), _jsx(FileInput, { id: "photo-upload", name: "images", htmlFor: "photo-upload", text: "Upload your images", type: "file", accept: ".png, .jpg", extension: "PNG, JPG ... ", size: "10", onChange: handlePicturesChange, multiple: true }), _jsx("div", { className: "preview-container", children: picturePreviews.map((file, index) => (_jsxs("div", { className: "preview", children: [_jsx("a", { href: file.url, target: "_blank", rel: "noopener noreferrer", children: file.name }), _jsxs("span", { className: "flex-shrink-0 text-gray-400", children: [(file.size / 1024 / 1024).toFixed(2), " MB"] })] }, index))) })] }), _jsxs("div", { className: "col-span-full", children: [_jsx(FormLabel, { htmlFor: "doc-upload", isRequired: true, children: "Additional Documents" }), _jsx(FileInput, { id: "doc-upload", name: "file_upload", htmlFor: "doc-upload", type: "file", text: "Upload your documents", accept: ".pdf, .doc, .docx", extension: "PDF, DOCX ... ", size: "10", onChange: handleDocumentsChange, multiple: true }), _jsx("div", { className: "preview-container", children: documentPreviews.map((file, index) => (_jsxs("div", { className: "preview", children: [_jsx("a", { href: file.url, target: "_blank", rel: "noopener noreferrer", children: file.name }), _jsxs("span", { className: "flex-shrink-0 text-gray-400", children: [(file.size / 1024 / 1024).toFixed(2), " MB"] })] }, index))) })] }), showMessage ? (_jsx("div", { className: "my-4", children: isPostSuccessful ? (_jsx("div", { className: "flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm leading-6 text-white shadow-sm", children: _jsx("p", { className: "my-2 justify-center text-center text-sm text-white", children: "Offer is successfully created and listed. You are directing to offer listing page..." }) })) : (_jsx("div", { className: "flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm leading-6 text-white shadow-sm", children: _jsx("p", { className: "my-2 justify-center text-center text-sm text-white", children: "Offer creation is failed. Please make sure you add all necessary information!" }) })) })) : null, _jsxs("div", { className: "mt-6 flex justify-end gap-x-6 w-full h-12 text-base font-semibold leading-6", children: [_jsx(FormButton, { type: "button", className: "rounded-md bg-white border border-indogo-800 px-10 py-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Cancel" }), _jsx(FormButton, { type: "submit", className: "rounded-md bg-indigo-600 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Save" })] })] })] }));
}
