import React from "react";
import { TbEdit } from "react-icons/tb";
import { IoSearchSharp } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="w-full h-28 p-4 border-b ">
      <div className="flex flex-col items-start justify-center gap-2 ">
        {/* section-1 */}
        <div className="w-full flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-black">Messages</h1>
          <span className="text-purple cursor-pointer">
            <TbEdit size={32} />
          </span>
        </div>
        {/* section-2 */}
        <div className="w-full flex justify-between items-center">
          <form className="bg-slate-200 w-full flex items-center gap-2 px-4 py-1 rounded-lg">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-black w-full outline-none"
            />
            <button type="submit">
              <IoSearchSharp size={32} className="text-slate-700" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
