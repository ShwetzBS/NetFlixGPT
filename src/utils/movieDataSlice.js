import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "moviesData",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions;