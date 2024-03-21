import React from "react";
import { useSelector } from "react-redux";
import { MoviesVideoBackground } from "./MoviesVideoBackground";
import { MovieVideoTitle } from "./MovieVideoTitle";

const MainMovieContainer = () => {
  //Fetch movies data from redux store
  const fetchMoviesDataStore = useSelector(
    (store) => store?.moviesData?.nowPlayingMovies
  );

  if (!fetchMoviesDataStore) return; // if (fetchMoviesDataStore === null) return;

  // If fetchMoviesDataStore is not null .Hard Coding value of movie and extracting the details
  const { original_title, overview, id } = fetchMoviesDataStore[0];

  return (
    <div>
      <MovieVideoTitle title={original_title} overview={overview} />
      <MoviesVideoBackground movieId={id} />
    </div>
  );
};

export default MainMovieContainer;
