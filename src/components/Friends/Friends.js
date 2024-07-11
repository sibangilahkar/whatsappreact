// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircleUser, } from '@fortawesome/free-solid-svg-icons'


// function Friends() {
//   return (
//     <div className='flex border-b border-slate-200 mx-3 py-1 w-96'>
//       <div className=' '>  <FontAwesomeIcon icon={faCircleUser} className="text-gray-300 mt-2 text-5xl " /></div>
     
//      <div className='block pl-4'>

//      <div className='flex justify-between'>
//           <div className='mt-2 font-normal text-base'>Munu</div>
//           <div className=' mt-3 text-xs text-slate-500'>9.28 PM</div>
//        </div>

//       <div className='w-80 mb-2 pr-2  pt-1 text-sm text-slate-400 text-ellipsis overflow-hidden text-nowrap'>aji ahibi ne amar tata. maggi khabo ahibi.ami kali akou shilong jam</div>
//      </div>
     
   
//     </div>
//   )
// }

// export default Friends



// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircleUser, } from '@fortawesome/free-solid-svg-icons'


// function Friends() {
//   return (
//     <div className='flex border-b border-slate-200 mx-3 py-1 w-96'>
//       <div className=' '>  <FontAwesomeIcon icon={faCircleUser} className="text-gray-300 mt-2 text-5xl " /></div>
     
//      <div className='block pl-4'>

//      <div className='flex justify-between'>
//           <div className='mt-2 font-normal text-base'>Munu</div>
//           <div className=' mt-3 text-xs text-slate-500'>9.28 PM</div>
//        </div>

//       <div className='w-80 mb-2 pr-2  pt-1 text-sm text-slate-400 text-ellipsis overflow-hidden text-nowrap'>aji ahibi ne amar tata. maggi khabo ahibi.ami kali akou shilong jam</div>
//      </div>
     
   
//     </div>
//   )
// }

// export default Friends


import React from 'react';
import boy1 from '../../image/propic/boy1.jpg';
import friends from '../../image/propic/friends.jpg';
import grl1 from '../../image/propic/grl-1.jpg';
import boy2 from '../../image/propic/boy2.jpg';
import cpl1 from '../../image/propic/cpl1.jpg';
import grl3 from '../../image/propic/grl-3.jpg';
import grl2 from '../../image/propic/grl2.jpg';
import nature from '../../image/propic/nature.jpg';
import boy3 from '../../image/propic/boy-3.jpg';
import cartoon from '../../image/propic/cartoon.jpg';

const friendsData = [
  { name: 'Achu', message: 'Hey, can we reschedule our meeting?wedwev f vdfvdfvfvf vwef', time: '10:00 AM', profilePic: boy1 },
  { name: 'Gossip', message: 'I got the tickets for the game!juhug  hghg  uhuihjbhg  hgygig', time: '11:30 AM', profilePic: friends },
  { name: 'tul', message: 'Check out this new song!', time: '10:30 PM', profilePic: cartoon },
  { name: 'Maina ji0', message: 'Can you help me with this problem?ergt tgrthgy ytye ty5', time: '4:00 PM', profilePic: cpl1 },
  { name: 'Munu jio', message: 'Let’s go for a run tomorrow.', time: '5:30 PM', profilePic: grl3 },
  { name: 'Gunu', message: 'I’ll call you back in a bit.', time: '6:45 PM', profilePic: grl2 },
  { name: 'Next-picnic', message: 'Meeting is postponed to next week.gvghv gfg hjhghgijkhj ', time: '8:00 PM', profilePic: nature },
  { name: 'Sanam', message: 'Don’t forget to bring the documents.', time: '1:15 PM', profilePic: grl1 },
  { name: 'Dadu', message: 'Had a great time yesterday!nbvhgvghvbvjhvjh  hhjhj  hbhjb', time: '2:45 PM', profilePic: boy2 },
  { name: 'Dr Mriganka', message: 'Thanks for the gift!', time: '9:15 PM', profilePic: boy3 },
];

function Friends() {
  return (
    <div>
      {friendsData.map((friend, index) => (
        <div key={index} className='flex border-b border-slate-200 px-3 py-1 w-fit hover:bg-slate-100'>
          <div>
            <img src={friend.profilePic} alt={`${friend.name}'s profile`} className="w-12 h-12 rounded-full ml-3 mt-2" />
          </div>
          <div className='block pl-7 pr-3'>
            <div className='flex justify-between'>
              <div className='mt-2 font-normal text-base'>{friend.name}</div>
              <div className='mt-3 text-xs text-slate-500'>{friend.time}</div>
            </div>
            <div className='w-80 mb-2 pr-2 pt-1 text-sm text-slate-400 text-ellipsis overflow-hidden text-nowrap'>
              {friend.message}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Friends;



