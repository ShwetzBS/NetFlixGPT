import { configureStore } from "@reduxjs/toolkit";
import userslicereducer from "./userslice";
import movieSlicereducer from "./movieDataSlice";

const appstore = configureStore({
  reducer: {
    user: userslicereducer,
    moviesData: movieSlicereducer,
  },
});

export default appstore;
