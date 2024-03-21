import { useDispatch, useSelector } from "react-redux";
import { useVideoTrailer } from "../CustomHooks/useVideoTrailer.js";

import { addTrailerVideo } from "../utils/movieDataSlice.js";

export const MoviesVideoBackground = ({ movieId }) => {
  const videoLink = useSelector((store) => store.movieSlice?.trailerVideo);

  //Fetching trailer video from store

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + videoLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
