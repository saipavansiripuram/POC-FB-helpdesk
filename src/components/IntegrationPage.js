import React from "react";

const IntegrationPage = () => {
  return (
    <div className="bg-[#1e4d90] backdrop-opacity-10  w-full h-screen ">
      <div className="w-full md:w-4/12 absolute p-16 mx-auto  my-44 right-0 left-0  bg-white bg-opacity-100 rounded-xl text-white">
        <h1 className="text-l text-black text-center font-medium p-4">
          Facebook Page Integration
        </h1>
        <h1 className="text-l text-black text-center font-medium p-4">
          Integration Page : <b>Amazon Business</b>
        </h1>
        <button className="p-4 my-1 bg-red-600 hover:bg-red-400 text-white  w-full rounded-lg">
          Delete Integration
        </button>
        <button className="p-4 my-1 bg-blue-800 hover:bg-blue-600 text-white  w-full rounded-lg">
          Reply to messages
        </button>
      </div>
    </div>
  );
};

export default IntegrationPage;
