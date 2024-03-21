import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validateForm";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { USER_PHOTO, NETFLIX_BG } from "../utils/constant";

import { useDispatch } from "react-redux";
import { adduser } from "../utils/userslice";

const Login = () => {
  const dispatch = useDispatch();

  const [issignin, setsignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const toggleSignInForm = () => {
    if (issignin === true) {
      setsignin(false);
    } else if (issignin === false) {
      setsignin(true);
    }
  };
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const formValidation = () => {
    //Validate Form
    const validation = validateForm(
      email.current.value,
      password.current.value
    );
    validation ? setErrorMessage(validation) : setErrorMessage("");
    if (validation) return;

    //Check if sign in or sign up form
    if (!issignin) {
      //Sign Up logic . Create user
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL: USER_PHOTO, //Its not a JSX hence no need for {}
          })
            .then(() => {
              //Dispatch action to edux to save user details.

              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(adduser({ uid, displayName, email, photoURL }));
              //Navigate to browse page
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage("Unable to sign Up ...try again ");
        });
    } else {
      //Sign In logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          //Navigate to browse page
        })
        .catch((error) => {
          setErrorMessage("Unable to log In");
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={NETFLIX_BG} alt="netflixbg" />
      </div>
      <form
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {issignin ? "Sign In" : "Sign Up"}
        </h1>

        {!issignin && (
          <div>
            <input
              type="text"
              ref={userName}
              className="p-4 my-4 w-full bg-gray-800  rounded-lg"
              placeholder="Full Name"
            />
          </div>
        )}
        <input
          type="text"
          ref={email}
          className="p-4 my-4 w-full bg-gray-800  rounded-lg"
          placeholder="Email Address"
        />
        <input
          type="text"
          ref={password}
          className="p-4 my-4 w-full bg-gray-800  rounded-lg"
          placeholder="Password"
        />
        <button
          className="p-4 my-6 w-full bg-red-700 rounded-lg"
          onClick={formValidation}
        >
          {issignin ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-600 font-bold py-1">{errorMessage}</p>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {issignin
            ? "New to NetFlix - Sign Up Now"
            : "Already a user - Sign In Now..."}
        </p>
      </form>
    </div>
  );
};

export default Login;
