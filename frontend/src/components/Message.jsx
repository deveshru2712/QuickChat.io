import React, { useEffect } from "react";
import ChatSkeleton from "../skeleton/ChatSkeleton";

import { IoIosSend } from "react-icons/io";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const Message = () => {
  const { id } = useParams();

  const queryClient = useQueryClient();

  useEffect(() => {
    const socket = queryClient.getQueriesData(["socket"]);
  }, [queryClient]);

  const isLoading = true;

  // const { data: messageArr, isLoading } = useQuery({
  //   queryKey: ["message"],
  //   queryFn: async () => {
  //     try {
  //       const response = await axios(`/api/message/:${id}`);
  //       return response.data;
  //     } catch (error) {
  //       console.log(error);
  //       return null;
  //     }
  //   },
  // });

  return (
    <div className="w-full h-full flex flex-col justify-between p-4">
      {/* message section */}
      <div className="w-full flex flex-col">
        {isLoading && <ChatSkeleton />}
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
