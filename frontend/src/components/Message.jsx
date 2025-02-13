import React from "react";
import ChatSkeleton from "../skeleton/ChatSkeleton";

import { IoIosSend } from "react-icons/io";

const Message = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4">
      {/* message section */}
      <div className="w-full flex flex-col">
        <ChatSkeleton />
      </div>
      {/* typing section */}
      <div className="w-full">
        <form className="w-full flex justify-between items-center border rounded-lg px-4 py-2">
          <input
            type="text"
            placeholder="Write a message ..."
            className="w-full outline-none px-4 py-2 text-black font-medium"
          />
          <button type="submit">
            <IoIosSend size={26} className="text-slate-900" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Message;
