import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import MovieList from "./MovieList";

const SecondaryMovieContainer = () => {
  //Fetch Now Playing movies from store

  const movies = useSelector((store) => store.moviesData);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-52 pl-12 relative z-20">
          <MovieList title={"Now Playing"} data={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} data={movies.populatMovies.results} />
        </div>
      </div>
    )
  );
};

export default SecondaryMovieContainer;
