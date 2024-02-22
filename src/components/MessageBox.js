import React from 'react'

const MessageBox = ({ text }) => {
  return (
    <div className='p-2 bg-cyan-100 border rounded-xl max-w-80 text-sm text-black font-sans'>
     {text}
    </div>
  )
}

export default MessageBox;
