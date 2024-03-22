import React, { useEffect } from "react";
import Header from "./Header.js";
import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies.js";
import MainMovieContainer from "./MainMovieContainer.js";
import SecondaryMovieContainer from "./SecondaryMovieContainer.js";
import usePopularMovies from "../CustomHooks/usePopularMovies.js";

const Browse = () => {
  //Fetching movies and updating the store
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header></Header>
      {/*- Movie Main Container
           -Movie Playing as background
           -Movie Title 
        -  Second Container 
           - Movie List in cards
        
     
     */}
      <MainMovieContainer />
      <SecondaryMovieContainer />
    </div>
  );
};

export default Browse;
