import React from 'react'
import ConversationCards from './ConversationCards'

const Conversation = () => {
  return (
    <div className='max-w-96 w-[20%] border rounded-sm'>
    <div className='flex border p-3 items-center justify-between'>
        <button className='font-medium'>䷧</button>
        <h1 className='font-medium text-xl '>Conversations</h1>
        <button className='font-medium'>⟲</button>
    </div>
    <ConversationCards name="Harika" review='Nice Product' type='Facebook DM' message='Hi , I have booked this earlier it was good' />
    <ConversationCards name="Dharma Teja" review='Available in Store' type='Facebook post' message='I need some Cold bags are they available' />
</div>
  )
}

export default Conversation