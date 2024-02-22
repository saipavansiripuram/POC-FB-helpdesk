import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/connect");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-4 z-10 bg-gradient-to-b flex  flex-col md:flex-row items-center md:justify-between ">
      <img
        className="w-12 mx-auto md:mx-0 border rounded-lg"
        src={
          "https://global-uploads.webflow.com/628202eb7980b612a999fc44/62ab4580a7221d718071030f_richpanel-logo.png"
        }
        alt="logo"
      />
      {user && (
        <div className="flex justify-end">
          <p className="hidden md:block m-2 text-white text-xl">
            Hi ,{user.displayName}
          </p>
          <button
            className="mx-2 mt-4 md:mt-0 md:p-2 bg-white hover:bg-gray-400 rounded-lg"
            onClick={handleSignOut}
          >
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
