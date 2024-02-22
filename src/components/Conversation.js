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
    <ConversationCards name="Harika" review='Nice Product' type='Facebook DM' message='Hi , I have booked this earlier it was good ....' time="2m"/>
    <ConversationCards name="Rama Krishna" review='Poor Quality' type='Facebook DM' message='I need refund for the produt , Its not even worthy ....'  time="5m"/>
    <ConversationCards name="Dharma Teja" review='Available in Store' type='Facebook post' message='I need some Cold bags are they available ....' time="10m" />
    <ConversationCards name="Arun" review='Worst Product' type='Facebook DM' message='I need refund for the produt , Its not even worthy ....' time="20m" />
</div>
  )
}

export default Conversation