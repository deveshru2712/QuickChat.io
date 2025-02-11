import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const App = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:3000");

    newSocket.on("connect", () => {
      console.log("connected");
    });

    //receiving the message from the backend
    newSocket.on("message", (data) => {
      setList((prev) => [...prev, data]);
    });

    newSocket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (input && socket) {
      //sending the message from the frontend to the backend
      socket.emit("chat message", input);

      // setList((prev) => [...prev, input]);
      setInput("");
    }
    return;
  };

  return (
    <div className="w-screen h-screen bg-gray-500 flex justify-center items-center">
      <div className="w-1/2 h-3/4 bg-white rounded-lg flex flex-col justify-between items-center p-4">
        <div className="w-full overflow-y-auto">
          {list && (
            <div className="flex justify-center items-center w-full">
              <ul className="flex flex-col justify-center items-center w-full gap-2">
                {list.map((items, index) => (
                  <li
                    key={index}
                    className="text-xl w-full bg-black/60 text-white px-4 py-2 rounded-lg"
                  >
                    {items}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <form action="" className="flex justify-between gap-2 w-full">
          <input
            type="text"
            placeholder="Type here..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="border bg-gray-200 w-full rounded px-2 outline-none text-black"
          />
          <button
            type="submit"
            onClick={onSubmit}
            className="bg-black text-white rounded p-2"
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
