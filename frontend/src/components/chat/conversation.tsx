import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export function Conversation(props: {
  messages: any;
  isLoaded: boolean;
  newMessage: any;
  setNewMessage: any;
  viewerId: number; // Added to determine message ownership
}) {
  const {
    messages,
    isLoaded,
    newMessage,
    setNewMessage,
    viewerId,
    participants,
  } = props;

  // const viewerMessage = participants.find((msg) => msg.contact != viewerId);
  return (
    <div className="w-full">
      <div className="flex items-center mb-4">
        <img
          src="https://pagedone.io/asset/uploads/1710412177.png"
          alt="User"
          className="w-10 h-10"
        />

        <h5 className="px-4 text-gray-900 text-sm font-semibold leading-snug pb-1">
          {isLoaded && participants[1]}
        </h5>
      </div>
      <hr className="border-gray-300" />
      {messages.map((msg: any, index: any) => (
        <div
          key={index}
          className={`mt-4 pb-11 ${
            msg.contact === viewerId ? "text-left" : "text-right"
          }`}
        >
          <div className="px-3.5 py-2 bg-indigo-100 rounded inline-flex gap-3 items-center justify-start">
            <div
              className={`${msg.contact === viewerId ? "order-2" : "order-1"}`}
            >
              <h5 className="text-gray-900 text-sm font-normal leading-snug">
                {msg.message}
              </h5>
            </div>
          </div>
          <div className="text-xs font-normal leading-4 py-1 text-gray-500">
            {msg.timestamp}
          </div>
        </div>
      ))}

      <div className="w-full pl-3 pr-1 py-1 rounded-3xl border border-gray-200 items-center gap-2 inline-flex justify-between">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="grow shrink basis-0 text-black text-xs font-medium leading-4 focus:outline-none"
          placeholder="Type here..."
        />
        <button
          onClick={() => setNewMessage(newMessage)}
          className="items-center flex px-3 py-2 bg-indigo-600 rounded-full shadow"
        >
          <PaperAirplaneIcon className="text-white" />
          <h3 className="text-white text-xs font-semibold leading-4 px-2">
            Send
          </h3>
        </button>
      </div>
    </div>
  );
}
