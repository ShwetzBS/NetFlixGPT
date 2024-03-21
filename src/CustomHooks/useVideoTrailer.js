//Fetch movie trailer based on movie Id
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieDataSlice.js";
import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant.js";

export const useVideoTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const getMovieVideos = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );

    const data = await getMovieVideos.json();

    //Fetch only trailer

    const trailerResults = data.results.filter(
      (video) => video.type === "Trailer"
    );
    const movieTrailer = trailerResults[0]; //Just taking the first trailer

    const trailer = movieTrailer.length ? trailerResults[0] : data.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};
