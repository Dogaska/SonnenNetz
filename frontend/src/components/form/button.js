import { jsx as _jsx } from "react/jsx-runtime";
export function FormButton(props) {
    const { type, className, children } = props;
    return (_jsx("button", { type: type, className: className, children: children }));
}
