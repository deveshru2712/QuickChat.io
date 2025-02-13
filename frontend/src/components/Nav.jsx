import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Nav = () => {
  return (
    <div className="w-full h-20 p-2 border-b flex justify-between items-center">
      <div className="flex justify-start items-center gap-6">
        <div className="flex justify-center items-center">
          <img
            src="https://avatar.iran.liara.run/public/50"
            alt="profile_image"
            className="size-14 flex justify-center items-center"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="text-xl font-semibold text-black">Web dev Team</div>
          <div className="text-lg font-medium text-slate-400">28 member</div>
        </div>
      </div>
      <div>
        <button className="cursor-pointer text-slate-400 rounded-full">
          <BsThreeDotsVertical size={26} />
        </button>
      </div>
    </div>
  );
};

export default Nav;
