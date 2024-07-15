import { NavigationBar } from "../common/navigartion-bar";
import { FooterSimple } from "../common/footer-simple";
import { Conversation } from "./conversation";
import { ChatList } from "./chatlist";
import { useEffect, useState } from "react";
import AxiosInstance from "../axios/AxiosInstance";
import { useParams } from "react-router-dom";

interface Chat {
  name: string;
  email: string;
  imageUrl: string;
  role: string;
  lastSeen?: string;
  lastSeenDateTime?: string;
  id: number;
  participants: string[];
  messages: any[];
}

type Message = {
  contact: number;
  message: string;
  timestamp: string;
  image: string | null;
  username: string;
  first_name: string;
  last_name: string;
};

export function Chat() {
  const { chat_id, username } = useParams<{
    chat_id: any;
    username: any;
  }>();
  const [messages, setMessages] = useState<Message[]>([]);
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
      .catch((error: any) => {
        console.error("Failed to fetch messages:", error);
      });
  };

  useEffect(() => {
    fetchMessages();
  }, [chat_id, username]);

  return (
    <>
      <NavigationBar />
      <div className="flex center justify-between">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="col-span-1 border border-gray-300 rounded-lg p-4 shadow-sm">
              <ChatList chatData={messages} />
            </div>
            <div className="col-span-3 border border-gray-300 rounded-lg p-4 shadow-sm">
              <Conversation
                messages={messages}
                isLoaded={isLoaded}
                newMessage={newMessage}
                setNewMessage={setNewMessage}
                viewerId={viewerId}
                participants={participants}
              />
            </div>
          </div>
        </div>
      </div>
      <FooterSimple />
    </>
  );
}
