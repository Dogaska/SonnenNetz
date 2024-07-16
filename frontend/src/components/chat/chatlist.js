import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const people = [
    {
        name: "Leslie Alexander",
        email: "leslie.alexander@example.com",
        role: "Co-Founder / CEO",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastSeen: "3h ago",
        lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
        name: "Michael Foster",
        email: "michael.foster@example.com",
        role: "Co-Founder / CTO",
        imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastSeen: "3h ago",
        lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
        name: "Dries Vincent",
        email: "dries.vincent@example.com",
        role: "Business Relations",
        imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastSeen: null,
    },
    {
        name: "Lindsay Walton",
        email: "lindsay.walton@example.com",
        role: "Front-end Developer",
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastSeen: "3h ago",
        lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
        name: "Courtney Henry",
        email: "courtney.henry@example.com",
        role: "Designer",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastSeen: "3h ago",
        lastSeenDateTime: "2023-01-23T13:23Z",
    },
    {
        name: "Tom Cook",
        email: "tom.cook@example.com",
        role: "Director of Product",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        lastSeen: null,
    },
];
export function ChatList(props) {
    const { chatData } = props;
    console.log(chatData);
    return (_jsxs("ul", { role: "list", className: "divide-y divide-gray-100", children: ["Contacts", _jsx("hr", { className: "my-6 border-gray-300" }), _jsx("div", { className: "overflow-y-scroll h-96", children: people.map((person, index) => (_jsxs("li", { className: "flex justify-between gap-x-6 py-5", children: [_jsxs("div", { className: "flex min-w-0 gap-x-4", children: [_jsx("img", { alt: "", src: person.imageUrl, className: "h-12 w-12 flex-none rounded-full bg-gray-50" }), _jsxs("div", { className: "min-w-0 flex-auto", children: [_jsx("p", { className: "text-sm font-semibold leading-6 text-gray-900", children: person.name }), _jsx("p", { className: "mt-1 truncate text-xs leading-5 text-gray-500", children: person.email })] })] }), _jsxs("div", { className: "hidden shrink-0 sm:flex sm:flex-col sm:items-end", children: [_jsx("p", { className: "text-sm leading-6 text-gray-900" }), person.lastSeen ? (_jsxs("p", { className: "mt-1 text-xs leading-5 text-gray-500", children: ["Last seen", " ", _jsx("time", { dateTime: person.lastSeenDateTime, children: person.lastSeen })] })) : (_jsxs("div", { className: "mt-1 flex items-center gap-x-1.5", children: [_jsx("div", { className: "flex-none rounded-full bg-emerald-500/20 p-1", children: _jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500" }) }), _jsx("p", { className: "text-xs leading-5 text-gray-500", children: "Online" })] }))] })] }, index))) })] }));
}
