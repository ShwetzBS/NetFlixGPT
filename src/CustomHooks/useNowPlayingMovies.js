import { API_OPTIONS } from "../utils/constant.js";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieDataSlice.js";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatchAction = useDispatch();

  // Fetch API data
  const fetchNowPlayingMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
    const response = await fetch(url, API_OPTIONS);

    const jsonData = await response.json();

    console.log(jsonData.results); // the data is in variable called results

    dispatchAction(addNowPlayingMovies(jsonData.results)); //nowPlayingMovies in redux store will point to  an array of objects
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
