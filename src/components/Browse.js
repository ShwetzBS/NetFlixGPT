import React, { useEffect } from "react";
import Header from "./Header.js";
import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies.js";
import MainMovieContainer from "./MainMovieContainer.js";
import SecondaryMovieContainer from "./SecondaryMovieContainer.js";
const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header></Header>
      {/*- Movie Main Container
           -Movie Playing as background
           -Movie Title 
        -  Second Container 
           - Movie List in cards
        
     
     */}
    </div>
  );
};

export default Browse;
