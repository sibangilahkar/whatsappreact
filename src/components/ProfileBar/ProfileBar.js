import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faCircleNotch,faCommentDots,faSquarePlus,faEllipsisVertical, } from '@fortawesome/free-solid-svg-icons'
import Propic from '../../image/propic/propic.jpg'

function ProfileBar() {
  return (
    <div className='bg-slate-200 h-16 w-fit  absolute  px-1 border-r border-slate-300 flex justify-between '>
      
      <div className=' my-3'>
      <div className='  '>
        <img src={Propic } className='ml-3 rounded-full h-11 w-11'/>
      </div>
      </div>
      
      <div className='flex pl-12 my-3 '>
      <div><FontAwesomeIcon icon={faCircleNotch} className='ml-7 px-4 py-3 text-xl text-blue-600 '/></div>
      <div><FontAwesomeIcon icon={faUsers} className='px-4 py-3 text-xl text-gray-500'/></div>
      <div><FontAwesomeIcon icon={faCircleNotch} className='px-4 py-3 text-xl text-gray-500'/></div>
      <div><FontAwesomeIcon icon={faCommentDots} className='px-4 py-3 text-xl text-gray-500'/></div>
      <div><FontAwesomeIcon icon={faSquarePlus} className='px-3 py-3 text-xl text-gray-500'/></div>
      <div><FontAwesomeIcon icon={faEllipsisVertical} className='px-6 py-3 text-xl text-gray-500'/></div>
      </div>
      
    </div>
  )
}

export default ProfileBar;