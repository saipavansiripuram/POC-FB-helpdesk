import React from "react";
import MessageBox from "./MessageBox";

const ChatBox = ({ name }) => {
  return (
    <div className="border w-[50%]">
      <div className="bg-white font-bold border p-4">{name}</div>
      <div className="bg-gray-200 flex flex-col h-[90vh]">
        <h1 className="text-center">Today</h1>
        <div className="p-5">
          <div className="flex flex-row gap-2">
            <span>
              <img
                src={
                  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                }
            
                alt="profile"
                className="rounded-full w-12 h-12"
              />
            </span>
            <span>
              <MessageBox text="I was unable to return my product" />
            </span>
          </div>
          <div className="">
            <span className="text-xs -mb-3 text-slate-600 ml-4">Harika - Jan 05, 12:22 PM</span>
          </div>
        </div>
        <div className="p-5 flex flex-1 flex-col items-end">
          <div className="flex flex-col gap-2">
            <span>
              <MessageBox text="What is the product ? Is it Screen Protector" />
            </span>
          </div>
          <div>
            <div className="flex gap-2 items-end">
              <span>
                <img
                  src={
                    "https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
                  }
                  alt="profile"
                  className="w-10 h-10 rounded-full items-end"
                />
              </span>
            </div>
          </div>
          <span className="text-xs -mb-8 text-slate-600 mr-8">Richpanel - Jan 05, 10:12 AM</span>
        </div>
        <div className="p-5 mb-44">
          <div className="flex flex-row gap-2">
            <span>
              <img
                src={
                  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                }
                alt="profile"
                className="rounded-full w-12 h-12"
              />
            </span>
            <span>
              <MessageBox text="Yes" />
            </span>
          </div>
          <div>
            <span className="text-xs text-slate-600 ml-4">Harika - Jan 05, 12:22 PM</span>
          </div>
        </div>
        <div className="p-6 flex justify-around">
          <input
            type="text"
            placeholder={`There is no return policy for that product`}
            className="flex-1 w-full  px-4 py-2 rounded-md p-2 border border-blue-500 mx-2"
          />
          <button className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-full">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
