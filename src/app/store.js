import { configureStore } from "@reduxjs/toolkit";
import postsReducers from "../features/posts/postSlice";

export default configureStore({
  reducer: {
    posts: postsReducers,
  },
});
