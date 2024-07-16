import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { NavigationBar } from "../common/navigartion-bar";
import { FooterSimple } from "../common/footer-simple";
import { Conversation } from "./conversation";
import { ChatList } from "./chatlist";
import { useEffect, useState } from "react";
import AxiosInstance from "../axios/AxiosInstance";
import { useParams } from "react-router-dom";
export function Chat() {
    const { chat_id, username } = useParams();
    const [messages, setMessages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [newMessage, setNewMessage] = useState("");
    const [viewerId, setViewerId] = useState(0);
    const [participants, setParticipants] = useState();
    // Fetch messages for a specific chat by username
    const fetchMessages = () => {
        AxiosInstance.get(`/api/chat/${chat_id}/?username=${username}`)
            .then((response) => {
            if (response.data && response.data.messages) {
                setMessages(response.data.messages);
                setIsLoaded(true);
                setViewerId(response.data.viewer);
                setParticipants(response.data.participants);
                console.log(response.data);
            }
        })
            .catch((error) => {
            console.error("Failed to fetch messages:", error);
        });
    };
    useEffect(() => {
        fetchMessages();
    }, [chat_id, username]);
    return (_jsxs(_Fragment, { children: [_jsx(NavigationBar, {}), _jsx("div", { className: "flex center justify-between", children: _jsx("div", { className: "container mx-auto px-4 py-8", children: _jsxs("div", { className: "grid lg:grid-cols-4 gap-8", children: [_jsx("div", { className: "col-span-1 border border-gray-300 rounded-lg p-4 shadow-sm", children: _jsx(ChatList, { chatData: messages }) }), _jsx("div", { className: "col-span-3 border border-gray-300 rounded-lg p-4 shadow-sm", children: _jsx(Conversation, { messages: messages, isLoaded: isLoaded, newMessage: newMessage, setNewMessage: setNewMessage, viewerId: viewerId, participants: participants }) })] }) }) }), _jsx(FooterSimple, {})] }));
}
