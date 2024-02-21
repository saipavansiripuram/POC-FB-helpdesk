import React from 'react'
import ConversationCards from './ConversationCards'

const ConversationsPage = () => {
  return (
    <div className='w-46 h-full absolute bg-gray-200' >
        <div className=''>
                <ConversationCards/>
        </div>
    </div>
  )
}

export default ConversationsPage