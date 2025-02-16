import React from "react";

const UserBox = ({ username, fullname }) => {
  return (
    <>
      <div className="bg-slate-200 h-[200px] rounded-lg p-2">
        <div className="size-10">
          <img
            src="https://avatar.iran.liara.run/public/49"
            alt="profile_image"
          />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-lg font-medium text-slate-700">{username}</span>
          <span className="text-lg font-medium text-slate-700">{fullname}</span>
        </div>
      </div>
    </>
  );
};

export default UserBox;
