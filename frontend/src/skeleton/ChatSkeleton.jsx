import React from "react";

const ChatSkeleton = () => {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <div key={index}>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full overflow-hidden">
                <div className="bg-slate-300 h-full animate-pulse"></div>
              </div>
            </div>
            <div className="chat-header"></div>
            <div className="chat-bubble bg-slate-400 w-1/4 animate-pulse"></div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full overflow-hidden">
                <div className="bg-slate-300 h-full animate-pulse"></div>
              </div>
            </div>
            <div className="chat-header"></div>
            <div className="chat-bubble bg-slate-400 w-1/4 animate-pulse"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatSkeleton;
