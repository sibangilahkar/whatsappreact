import React from "react";
import ChatBox from "../ChatBox/ChatBox";
import ChatHistory from "../ChatHistory/ChatHistory";

function Container() {
  return (
    <div className="  ">
      <div className="size-full bg-orange-50 absolute "></div>

      <div>
        <div className=" h-32 w-full bg-emerald-500 absolute"></div>
        <div className="flex absolute top-6 mb-5">
          <ChatBox />
          <ChatHistory />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Container;
