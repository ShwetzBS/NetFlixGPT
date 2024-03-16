import { configureStore } from "@reduxjs/toolkit";
import userslicereducer from "./userslice";

const appstore = configureStore({
  reducer: {
    user: userslicereducer,
  },
});

export default appstore;
