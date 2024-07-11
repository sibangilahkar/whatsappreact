// import React from "react";
// import MyMessage from "../MyMessage/MyMessage";
// import OthersMessage from "../OthersMessage/OthersMessage";


// function Messages() {
//   return (
//     <div className="bg-transparent w-full h-hit px-7 py-5 absolute top-12  ">
    
//        <MyMessage/>
//        <OthersMessage/>
//        <MyMessage/>
//        <MyMessage/>
//        <OthersMessage/>
//        <MyMessage/>
//        <OthersMessage/>
//        <MyMessage/>
//        <OthersMessage/>
//        <OthersMessage/>
//        <OthersMessage/>
       

     
     
//     </div>
//   );
// }

// export default Messages;

import React from "react";
import MyMessage from "../MyMessage/MyMessage";
import OthersMessage from "../OthersMessage/OthersMessage";

function Messages() {
  return (
    <div className="bg-transparent w-full h-hit  py-5 absolute top-12 mx-10 ">
      <MyMessage content="ki khobor, vale asa" time="9:44 PM" />
      <OthersMessage content="vale asu." time="9:44 PM" />
      <MyMessage content="nai tu moi kora nai,kune krise najanu. " time="9:45 PM" />
      <div className=""><p className="bg-slate-100  text-slate-500 py-1  px-3 h-8 w-fit ml-72 rounded-md font-sans shadow-sm shadow-slate-400 ">TODAY</p></div>
      <MyMessage content="mur olpu isssa nai hnhn gngnhgdnhdgngngng karu logot kotha patibo, karu phon rcv  o kora nai. moi okol khoria life, buji paisu. kaku nalage muk" time="9:46 PM" />
      <OthersMessage content="Another message from others" time="9:47 PM" />
      <MyMessage content="More messages from me" time="9:48 PM" />
      <OthersMessage content="More messages from others" time="9:49 PM" />
      <MyMessage content="Messages keep coming from me" time="9:50 PM" />
      <OthersMessage content="And from others" time="9:51 PM" />
      <OthersMessage content="Still more messages from others" time="9:52 PM" />
      <OthersMessage content="Messages from others again" time="9:53 PM" />
    </div>
  );
}

export default Messages;
