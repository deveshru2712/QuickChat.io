import React from "react";
import NavBar from "../components/NavBar";
import MessageBox from "../components/MessageBox";
import MessageBay from "../components/MessageBay";

const HomePage = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex justify-center items-center">
        <div className="w-1/3 min-h-screen">
          {/* this is friend list section */}
          <NavBar />
          <MessageBox />
          <MessageBox />
          <MessageBox />
          <MessageBox />
        </div>
        <div className="flex flex-1 border min-h-screen">
          {/* this is messaging section */}
          <MessageBay />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
