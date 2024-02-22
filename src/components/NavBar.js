import React from "react";
import member from "../assets/images/member.png";
import trade from "../assets/images/trade.png";
import { useNavigate } from "react-router-dom";


const NavBar = () => {
 const navigate = useNavigate();
  const handleFacebookIntegration= ()=>{
    navigate("/flow");
  }
  return (
    <div className="w-20 h-screen bg-blue-900">
      <div className="flex-col items-center justify-between">
        <div className="mx-4 flex-col">
          <img
            className="w-16 my-4 h-auto mx-auto md:mx-0"
            src={
              "https://global-uploads.webflow.com/628202eb7980b612a999fc44/62ab4580a7221d718071030f_richpanel-logo.png"
            }
            alt="logo"
          />
          <img
            className="w-10 mt-8 my-4 h-auto mx-auto md:mx-0 transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 hover:bg-slate-50 hover:bg-opacity-50 rounded-xl"
            src={
              "https://cdn1.iconfinder.com/data/icons/hawcons/32/698925-icon-92-inbox-download-512.png"
            }
            alt="logo"
          />
          <img
            className="w-10 mt-8 my-4 h-auto mx-auto md:mx-0 transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 hover:bg-slate-50 hover:bg-opacity-50 rounded-xl"
            src={member}
            alt="logo"
          />
          <img
            className="w-10 mt-8 my-4 h-auto mx-auto md:mx-0 transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 hover:bg-slate-50 hover:bg-opacity-50 rounded-xl"
            src={trade}
            alt="logo"
          />
        </div>
        <div className="mx-2 w-auto items-center mt-[286px] ml-4" >
          <>
          <img
            className="w-10 h-10 md:mx-0  border hover:border-green-600   rounded-full  transform motion-safe:hover:-translate-y-2 motion-safe:hover:scale-110 transition ease-in-out duration-400"
            src={
              "https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
            }
            alt="logo"
          />
          <span className="absolute text-[6px] bottom-[5.5rem] ml-8 transform motion-safe:hover:-translate-y-2 motion-safe:hover:scale-110 transition ease-in-out duration-400">🟢</span>
          </>
        <button className="mt-4" onClick={handleFacebookIntegration}>
        <img
            className="w-10 h-10 md:mx-0  border hover:border-green-600   rounded-full  transform motion-safe:hover:-translate-y-2 motion-safe:hover:scale-110 transition ease-in-out duration-400"
            src={
              "https://w7.pngwing.com/pngs/49/357/png-transparent-logging-out-log-off-logout-thumbnail.png"
            }
            alt="logo"
          />
        </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
