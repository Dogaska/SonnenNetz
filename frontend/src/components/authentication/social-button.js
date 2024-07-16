import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SocialButton = ({ logo, altText, buttonText, onClick, }) => {
    return (_jsxs("button", { onClick: onClick, className: "flex items-center justify-center gap-2 bg-white border-2 border-gray-300 rounded-lg px-4 py-2 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full", children: [_jsx("img", { src: logo, alt: altText, className: "h-6" }), buttonText] }));
};
const SocialLogin = () => {
    const handleGoogleLogin = () => {
        console.log("Log in with Google");
        // Integration with Google Login API
    };
    const handleMicrosoftLogin = () => {
        console.log("Log in with Microsoft");
        // Integration with Microsoft Login API
    };
    const handleAppleLogin = () => {
        console.log("Log in with Apple");
        // Integration with Apple Login API
    };
    return (_jsxs("div", { className: "space-y-3", children: [_jsx(SocialButton, { logo: "src/assets/images/gmail.svg", altText: "Google", buttonText: "Continue with Google", onClick: handleGoogleLogin }), _jsx(SocialButton, { logo: "src/assets/images/Microsoft_logo.svg", altText: "Microsoft", buttonText: "Continue with Microsoft", onClick: handleMicrosoftLogin }), _jsx(SocialButton, { logo: "src/assets/images/apple.svg", altText: "Apple", buttonText: "Continue with Icloud", onClick: handleAppleLogin })] }));
};
export { SocialLogin };
