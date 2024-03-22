import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant.js";
import { addPopularMovies } from "../utils/movieDataSlice.js";
import { useEffect } from "react";
const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchPopularVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const response = await data.json();

    dispatch(addPopularMovies(response));
  };
  useEffect(() => {
    fetchPopularVideos();
  }, []);
};

export default usePopularMovies;
