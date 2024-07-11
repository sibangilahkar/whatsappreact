

import React from 'react';

const Button = ({ label, bgColor }) => {
  return (
    <div className={`mx-1 my-1  mb-2 h-8 py-1 w-fit px-3 rounded-2xl ${bgColor} text-gray-500`}>
      {label}
    </div>
  );
};

const ButtonGroup = () => {
  return (
    <div className='border-b border-slate-200 flex ml-3'>
      <Button label='All' bgColor='bg-green-100' />
      <Button label='Unread' bgColor='bg-gray-100' />
      <Button label='Groups' bgColor='bg-gray-100' />
    </div>
  );
};

export default ButtonGroup;
