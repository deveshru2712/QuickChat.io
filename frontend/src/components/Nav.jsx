import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineExitToApp } from "react-icons/md";

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    console.log(isClicked);
  }, [isClicked]);

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
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1"
            onClick={() => setIsClicked((prev) => !prev)}
          >
            <BsThreeDotsVertical size={26} />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a className="flex justify-between items-center">
                Group Settings <IoSettingsSharp size={24} />
              </a>
            </li>
            <li>
              <a className="flex justify-between items-center">
                Leave Group <MdOutlineExitToApp size={24} />
              </a>
            </li>
          </ul>
        </div>
        {/* <button className="cursor-pointer text-slate-400 rounded-full">

          <BsThreeDotsVertical size={26} />
        </button> */}
      </div>
    </div>
  );
};

export default Nav;
