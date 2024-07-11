// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheck, } from '@fortawesome/free-solid-svg-icons'

// function OthersMessage() {
//   return (
//     <div className="w-full h-7 mb-5 py-3 ml-96">
//     <div className="  "></div>

//     <div className="bg-green-100 w-fit px-2 py-1 flex rounded-md shadow-sm shadow-slate-500  ml-96 ">
//       <div className="text-slate-700 text-sm pt-1">
//         vale asu.
//       </div>
//       <div className="pt-4 text-slate-400 text-xs ml-3">9.44 PM</div>
//       <FontAwesomeIcon icon={faCheck} className="pl-1  pt-4 text-slate-400" />
//     </div>
//   </div>

//   )
// }

// export default OthersMessage

import React from 'react';


function OthersMessage({ content, time }) {
  return (
   


 <div className="h-7 mb-4 py-1 ml-7">
      <div className=""></div>
      <div className="bg-white w-fit mb-1 px-2 py-1 flex rounded-md shadow-sm shadow-slate-500 ml-2">
        <div className="text-slate-700 text-sm pt-1">
          {content}
        </div>
        <div className="pt-4 text-slate-400 text-xs ml-3">{time}</div>
      </div>
    </div>



);
}

export default OthersMessage;
