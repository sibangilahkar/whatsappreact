// import React from 'react'

// function MyMessage() {
//   return (
//     <div className=" h-7 mb-5 py-1 ml-7">
//     <div className="  "></div>

//     <div className="bg-white w-fit px-2 py-1 flex rounded-md shadow-sm shadow-slate-500  ml-2">
//       <div className="text-slate-700 text-sm pt-1">
//         ki khobor ,vale asa
//       </div>
//       <div className="pt-4 text-slate-400 text-xs ml-3">9.44 PM</div>
//     </div>
//   </div>

//   )
// }

// export default MyMessage

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function MyMessage({ content, time }) {
  return (
   
  <div className="max-w-2xl max-h-20 mb-2  ml-64 ">
  <div className=""></div>
  <div className="bg-green-100 max-w-fit h-auto px-2 rounded-md shadow-sm shadow-slate-500 ml-60">
    <div className="text-slate-700 text-sm pt-1 pr-9  max-w-fit">
      {content}
    </div>
    <div className='flex justify-end '>
    <div className=" text-slate-400 text-xs ">{time}</div>
    <FontAwesomeIcon icon={faCheck} className="pl-1  text-slate-400" />
    </div>
    
  </div>
</div>




);
}

export default MyMessage;
