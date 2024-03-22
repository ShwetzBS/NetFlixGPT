import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, data }) => {
  return (
    <div className="px-6 bg-black">
      <h1 className="text-xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {data?.map((movie) => {
            <MovieCard key={movie.id} poster_path={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
