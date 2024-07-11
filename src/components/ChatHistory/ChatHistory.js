import React from "react";
import WhatsappBackground from "../../image/Wbackground.jpg";
import OthersBar from "../OthersBar/OthersBar";
import Messages from "../Messages/Messages";

function ChatHistory() {
  return (
    <div className="h-fit">
      <div className="bg-slate-200  max-w-6xl mr-5">
        <div>
          <OthersBar />
        </div>

        <div className="h-fit w-full  ">
          <img className="h-fit" src={WhatsappBackground} />
        </div>

        <div>
          <Messages />
        </div>
      </div>
    </div>
  );
}

export default ChatHistory;
