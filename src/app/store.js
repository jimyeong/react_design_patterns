import { configureStore } from "@reduxjs/toolkit";
import postsReducers from "../features/posts/postSlice";
import usersReducers from "../features/users/usersSlice";
import notificationReducers from "../features/notifications/notificationSlice";

export default configureStore({
  reducer: {
    posts: postsReducers,
    users: usersReducers,
    notifications: notificationReducers,
  },
});
