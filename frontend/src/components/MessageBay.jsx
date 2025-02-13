import React from "react";
import Nav from "./Nav";
import Message from "./Message";

const MessageBay = () => {
  return (
    <div className="flex flex-col flex-1 items-center">
      <Nav />
      <Message />
    </div>
  );
};

export default MessageBay;
