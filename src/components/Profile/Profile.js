import React from 'react'
import Profilepic from '../../image/profilepic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faPen, } from '@fortawesome/free-solid-svg-icons'

function Profile() {
  return (
    <div className='max-w-md h-96 ml-5 mb-4 absolute top-5 '>
      <div className='bg-emerald-700 h-28 '>
      <div className='flex  w-30'>
      <FontAwesomeIcon icon={faArrowLeft} className="text-slate-200 pt-16 pl-8" />
        <p className='text-slate-200 text-lg font-medium pl-8 pt-14'>Profile</p>
        </div>
      </div>
     
      <div className='bg-gray-200 h-64'>
        <div className=' '>
          <img className='rounded-full h-48 w-48 absolute top-36 left-24' src={Profilepic} />
        </div>
      </div>
      <div className='bg-slate-50 pl-6 py-3'>
        <p className='text-sm text-green-700 font-sans'>Your name</p>
        <div className='flex justify-between'>
        <p className='mt-4 text-base mb-1 text-slate-600'>siba</p>
        <FontAwesomeIcon icon={faPen} className="text-gray-500 mt-6 pr-9 " />
        </div>
      
      </div>
      <div className='bg-gray-200 px-6 py-4 '>
        <p className='text-slate-500 text-sm font-normal leading-5 mb-3'>This is not your username or PIN. This name will be visible to your WhatsApp contacts</p>
      </div>
      <div className='bg-slate-50 px-6 py-3'>
        <p className='text-sm text-green-700 font-sans'>About</p>
        <div className='flex justify-between'>
        <p className='mt-4 text-base mb-1 text-slate-600'>Urgent Calls only</p>
        <FontAwesomeIcon icon={faPen} className="text-gray-500 mt-6 pr-6 " />
        </div>
        
      </div>
      <div className='bg-gray-100 h-8'></div>
    </div>
  )
}

export default Profile