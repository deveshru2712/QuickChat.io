import React from "react";

const MessageBox = () => {
  return (
    <div className="w-full h-24 p-2 hover:cursor-pointer">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center justify-center size-[70px] rounded-full ">
          <img
            src="https://avatar.iran.liara.run/public/50"
            alt="profile_image"
            className="flex flex-1 size-[60px] rounded-full"
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col items-start">
            <div className="text-xl font-semibold">Name</div>
            <div className="text-base font-medium">Message</div>
          </div>
          <div className="flex flex-col items-start">
            <div className="text-base font-medium">2:30</div>
            <div className="text-base font-medium">✅</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
