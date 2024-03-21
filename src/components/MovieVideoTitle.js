import React from "react";

export const MovieVideoTitle = ({ title, overview }) => {
  return (
    <div className="w-sceen aspect-video pt-[20%] px-24 absolute text-white">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-gray-500 text-white p-4 px-10 text-xl rounded-md bg-opacity-40 mx-8 hover:bg-opacity-80 ">
          Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-10 text-xl rounded-md bg-opacity-40 mx-8 hover:bg-opacity-80 ">
          More Info
        </button>
      </div>
    </div>
  );
};
