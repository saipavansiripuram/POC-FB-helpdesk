import React, { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import {checkValidData} from "../utils/Validate"
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    // Sign In / Sing Up
    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
        
          })
            .then(() => {
              const { uid, email, displayName} = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="bg-[#1e4d90] backdrop-opacity-10  w-full h-screen">
      <Header/>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full md:w-4/12 absolute p-16 mx-auto my-28 right-0 left-0  bg-white bg-opacity-100 rounded-xl text-white"
        >
          <h1 className="text-xl text-black text-center font-medium p-4">
            {isSignInForm ? "Sign In " : "Create Account"}
          </h1>
          {!isSignInForm && (
            <>
              <label className="text-black">Name</label>
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="p-4 my-2 w-full rounded-lg text-black bg-gray-200"
              />
            </>
          )}
          <>
            <label className="text-black">Email</label>
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="p-4 my-2 w-full rounded-lg text-black bg-gray-200"
            />
          </>
          <>
            <label className="text-black">Password</label>
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-4 my-2  w-full rounded-lg text-black bg-gray-200"
            />
          </>
          <div className="flex">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 my-1  text-blue-600"
            />
            <label className="ml-2 my-1  text-gray-700">Remember Me</label>
          </div>

          <p className="text-red-500 text-lg ">{errorMessage}</p>
          <button
            className="p-4 my-4 bg-blue-800 hover:bg-blue-600 text-white  w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Login" : "Sign Up"}
          </button>

          <p
            className="py-1 text-black cursor-pointer text-center"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? (
              <span>
                New to MyApp?{" "}
                <span className="text-blue-500 hover:text-blue-300">
                  Sign up
                </span>
              </span>
            ) : (
              <span>
                Already have an account?{" "}
                <span className="text-blue-500 hover:text-blue-300">Login</span>
              </span>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
