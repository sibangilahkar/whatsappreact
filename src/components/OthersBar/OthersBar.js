// import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faMagnifyingGlass,faEllipsisVertical,faVideo,faAngleDown,} from "@fortawesome/free-solid-svg-icons";
// import Propic from '../../image/propic/propic.jpg';


// function OthersBar() {
//   return (
//     <div className="flex h-16">
//     <div className=" flex py-2">
//         <img src={Propic} className="ml-4 rounded-full h-11 w-11 " />

//         <p className="ml-4 pt-2">khoru </p>
//     </div>

//     <div className="flex ml-96 py-2">
//         <div className=" ml-96 mt-1 h-9 w-20 flex">
//             <div className="ml-1 flex">
//                 <FontAwesomeIcon
//                     icon={faVideo}
//                     className=" ml-3  py-2 text-lg text-gray-400 "
//                 />

//                 <FontAwesomeIcon
//                     icon={faAngleDown}
//                     className="px-2 pt-3  text-xs text-gray-400 "
//                 />
//             </div>
//         </div>
//         <div className=" flex">
//             <div>
//                 <FontAwesomeIcon
//                     icon={faMagnifyingGlass}
//                     className="ml-2 pr-7 py-3 text-lg text-gray-600 "
//                 />
//             </div>
//             <div className="ml-2">
//                 <FontAwesomeIcon
//                     icon={faEllipsisVertical}
//                     className="pr-9 py-3 text-xl text-gray-600"
//                 />
//             </div>
//         </div>
//     </div>
// </div>
//   )
// }

// export default OthersBar



// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass, faEllipsisVertical, faVideo, faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import Propic from '../../image/propic/propic.jpg';

// function OthersBar({ profilePic, name }) {
//   return (
//     <div className="flex h-16">
//       <div className="flex py-2">
//         <img src={profilePic} className="ml-4 rounded-full h-11 w-11 " alt="Profile" />
//         <p className="ml-4 pt-2">{name}</p>
//       </div>
//       <div className="flex ml-96 py-2">
//         <div className="ml-96 mt-1 h-9 w-20 flex">
//           <div className="ml-1 flex">
//             <FontAwesomeIcon icon={faVideo} className="ml-3 py-2 text-lg text-gray-400" />
//             <FontAwesomeIcon icon={faAngleDown} className="px-2 pt-3 text-xs text-gray-400" />
//           </div>
//         </div>
//         <div className="flex">
//           <div>
//             <FontAwesomeIcon icon={faMagnifyingGlass} className="ml-2 pr-7 py-3 text-lg text-gray-600" />
//           </div>
//           <div className="ml-2">
//             <FontAwesomeIcon icon={faEllipsisVertical} className="pr-9 py-3 text-xl text-gray-600" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OthersBar;


import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass,faEllipsisVertical,faVideo,faAngleDown,} from "@fortawesome/free-solid-svg-icons";
import Propic from '../../image/propic/boy1.jpg';


function OthersBar() {
  return (
    <div className="flex h-16">
    <div className=" flex py-2">
        <img src={Propic} className="ml-4 rounded-full h-11 w-11 " />

        <p className="ml-4 pt-2">Achu </p>
    </div>

    <div className="flex ml-96 py-2">
        <div className=" ml-96 mt-1 h-9 w-20 flex">
            <div className="ml-1 flex">
                <FontAwesomeIcon
                    icon={faVideo}
                    className=" ml-3  py-2 text-lg text-gray-400 "
                />

                <FontAwesomeIcon
                    icon={faAngleDown}
                    className="px-2 pt-3  text-xs text-gray-400 "
                />
            </div>
        </div>
        <div className=" flex">
            <div>
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="ml-2 pr-7 py-3 text-lg text-gray-600 "
                />
            </div>
            <div className="ml-2">
                <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    className="pr-9 py-3 text-xl text-gray-600"
                />
            </div>
        </div>
    </div>
</div>
  )
}

export default OthersBar ;

