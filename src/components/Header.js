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
    <div className="absolute w-screen px-8 py-6 z-12 bg-gradient-to-b from-white flex  flex-col md:flex-row items-center md:justify-between ">
      <img
        className="w-44 mx-auto md:mx-0"
        src={
          "https://s3.amazonaws.com/resumator/customer_20211012064647_FFUH5YGA9CMVQ6ZA/logos/20220613121757_Richpanel_Color.png"
        }
        alt="logo"
      />
      {user && (
        <div className="flex justify-end">
          <p className="hidden md:block m-2 text-black text-3xl">
            Hi ,{user.displayName}
          </p>
          <button
            className="mx-2 mt-4 md:mt-0 md:p-2 bg-white text-black rounded-lg"
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
