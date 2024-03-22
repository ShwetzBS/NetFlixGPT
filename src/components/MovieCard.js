import React from "react";
import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDN + poster_path} />
    </div>
  );
};

export default MovieCard;
