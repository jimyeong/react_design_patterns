import { configureStore } from "@reduxjs/toolkit";
import postsReducers from "../features/posts/postSlice";
import usersReducers from "../features/users/usersSlice";

export default configureStore({
  reducer: {
    posts: postsReducers,
    users: usersReducers,
  },
});
