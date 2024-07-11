import React from 'react'
import Search from '../Search/Search'
import Button from '../Button/Button';
import Friends from '../Friends/Friends';
import ProfileBar from '../ProfileBar/ProfileBar';

function ChatBox() {
  return (
    
    <div className='ml-5 pr-5 h-fit max-w-md bg-white   '>
        <ProfileBar/>
        <Search/>
        <Button/>
        <Friends/>
    </div>
  )
}

export default ChatBox;