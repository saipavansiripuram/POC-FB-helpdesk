import React from 'react'

const ProfileCard = ({name,onlineStatus}) => {
  return (
    <div className='border h-auto m-2 flex flex-col items-center p-6 bg-slate-100 rounded-xl'>
    <img src={"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"} alt="profile"  className='w-24 h-24 rounded-full '/>
      <h1 className='font-semibold'>{name}</h1>
    <div className='text-gray-500 mb-3'>{onlineStatus ? <span> <span className="text-xs">🟢</span> Online</span> : <span>🔴 Offline</span>}</div> 
    <div className='flex gap-3'>
      <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow'>Call</button>
      <button  className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow'>Profile</button>
    </div>
  </div>
  )
}

export default ProfileCard