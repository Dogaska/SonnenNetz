import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { PhotoIcon } from "@heroicons/react/24/solid";
function InputBox(props) {
    const { id, name, type, required, autoComplete, placeholder, register } = props;
    return (_jsx("div", { className: "relative w-full", children: _jsx("input", { className: "px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none", id: id, ...register(name), type: type, autoComplete: autoComplete, required: required, placeholder: placeholder }) }));
}
function DateInputBox(props) {
    const { id, name, type, required, autoComplete, placeholder, register } = props;
    return (_jsx("div", { className: "relative w-full", children: _jsx("input", { className: "px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none", id: id, ...register(name), type: type, autoComplete: autoComplete, required: required, placeholder: placeholder }) }));
}
function TextArea(props) {
    const { id, name, rows, placeholder, register } = props;
    return (_jsx("div", { className: "relative w-full", children: _jsx("textarea", { className: "px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none resize-none", id: id, rows: rows, ...register(name), placeholder: placeholder }) }));
}
function FileInput(props) {
    const { id, htmlFor, name, text, extension, size, type, accept, multiple, onChange, } = props;
    const { register } = useForm();
    return (_jsx("div", { className: "mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10", children: _jsxs("div", { className: "text-center", children: [_jsx(PhotoIcon, { className: "mx-auto h-12 w-12 text-gray-300", "aria-hidden": "true" }), _jsxs("div", { className: "mt-4 flex text-sm leading-6 text-gray-600", children: [_jsxs("label", { htmlFor: htmlFor, className: "relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500", children: [_jsx("span", { children: text }), _jsx("input", { id: id, ...register(name), type: type, accept: accept, multiple: multiple, onChange: onChange, className: "sr-only" })] }), _jsx("p", { className: "pl-1", children: "or drag and drop" })] }), _jsxs("p", { className: "text-xs leading-5 text-gray-600", children: [extension, " up to ", size, "MB"] })] }) }));
}
export { InputBox, DateInputBox, TextArea, FileInput };
