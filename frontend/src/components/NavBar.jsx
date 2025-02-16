import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { IoSearchSharp } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import UserBox from "./UserBox";

const NavBar = () => {
  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [userList, setUserList] = useState([]);

  const { data: search, isLoading } = useQuery({
    queryKey: ["searchUser", searchTerm],
    queryFn: async () => {
      try {
        console.log("call");
        const response = await axios(`/api/user/${searchTerm}`);

        setUserList(response.data.list);
        return response.data.list;
      } catch (error) {
        console.log(error.message);
        return null;
      }
    },
    enabled: !!searchTerm,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input);
  };

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
        <div className="bg-slate-200 rounded-lg w-full flex justify-between items-center">
          <form
            onSubmit={handleSubmit}
            className="w-full flex items-center gap-2 px-4 py-1 rounded-lg"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
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
