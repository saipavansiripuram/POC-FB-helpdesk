import React from "react";

const ConversationCards = ({ name, type, review, message ,time }) => {
  return (
    <div className="border p-4 hover:bg-gray-200">
      <div className="flex justify-between">
        <div className="flex items-center mr-4">
          <input type="checkbox" />
        </div>
        <div className="flex flex-col -ml-24">
          <span className="font-semibold">{name}</span>
          <span className="text-sm">{type}</span>
        </div>
        <div className="ml-2">{time}</div>
      </div>
      <div className="font-semibold">{review}</div>
      <div className="text-gray-500 text-sm">{message}</div>
    </div>
  );
};

export default ConversationCards;
