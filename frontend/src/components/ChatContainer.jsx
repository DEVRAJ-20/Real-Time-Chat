import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-hidden">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ background: "var(--bg-deep)" }}>
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => {
          const isSent = message.senderId === authUser._id;
          return (
            <div
              key={message._id}
              className={`flex ${isSent ? "justify-end" : "justify-start"} animate-message-in`}
            >
              {!isSent && (
                <div className="flex-shrink-0 mr-2 self-end">
                  <img
                    src={selectedUser.profilePic || "/avatar.png"}
                    alt="avatar"
                    className="size-8 rounded-full object-cover"
                    style={{ border: "1px solid rgba(34, 211, 238, 0.1)" }}
                  />
                </div>
              )}

              <div className="max-w-[70%]">
                <div className={isSent ? "msg-sent" : "msg-received"} style={{ padding: "0.7rem 1rem" }}>
                  {message.image && (
                    <img
                      src={message.image}
                      alt="Attachment"
                      className="sm:max-w-[200px] rounded-lg mb-2"
                    />
                  )}
                  {message.text && <p className="text-sm leading-relaxed">{message.text}</p>}
                </div>
                <p
                  className={`text-[10px] mt-1 px-1 ${isSent ? "text-right" : "text-left"}`}
                  style={{ color: "var(--text-muted)" }}
                >
                  {formatMessageTime(message.createdAt)}
                </p>
              </div>

              {isSent && (
                <div className="flex-shrink-0 ml-2 self-end">
                  <img
                    src={authUser.profilePic || "/avatar.png"}
                    alt="avatar"
                    className="size-8 rounded-full object-cover"
                    style={{ border: "1px solid rgba(34, 211, 238, 0.1)" }}
                  />
                </div>
              )}
            </div>
          );
        })}
        {/* Scroll anchor — always at the bottom */}
        <div ref={messageEndRef} />
      </div>

      <MessageInput />
    </div>
  );
};
export default ChatContainer;
