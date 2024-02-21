import React from "react";
import NavBar from "./NavBar";
import Conversation from "./Conversation";
import ChatBox from "./ChatBox";
import ProfileCard from "./ProfileCard";
import CustomerCard from "./CustomerCard";

const ChatPage = () => {
  return (
    <div className="bg-white backdrop-opacity-10 w-auto h-screen">
      <div className="flex flex-col gap-4">
        <div className="flex">
          <NavBar />
          <Conversation />
          <ChatBox name="Harika" />
          <div className="w-96">
            <ProfileCard name="Harika" onlineStatus="Online" />
            <CustomerCard
              firstname="Harika"
              email="harika@richpanel.com"
              lastname="Reddy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
