import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { adduser, removeuser } from "../utils/userslice";
import { useDispatch } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          const { uid, displayName, email, photoURL } = user;

          dispatch(adduser({ uid, displayName, email, photoURL }));
          navigate("/browser");
        } else {
          // User is signed out

          dispatch(removeuser());
          navigate("/");
        }
      },
      []
    );
  });

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.The rest will be taken care of by onauthchange in header
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute mt-6 ml-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-48 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflixlogo"
      />
      {user && (
        <div className="flex p-4">
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL}></img>
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
