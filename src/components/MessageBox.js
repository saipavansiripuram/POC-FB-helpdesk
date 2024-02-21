import React from 'react'



const MessageBox = ({ text }) => {
  return (
    <div className='p-2 bg-white border rounded-xl max-w-80 text-sm text-gray-700 font-semibold'>
     {text}
    </div>
  )
}

export default MessageBox;
