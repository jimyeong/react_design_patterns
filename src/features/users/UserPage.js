import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectAllPosts, selectPostsByUser } from "../posts/postSlice";
import { selectAllUsers, selectUserById } from "./usersSlice";
import { useMatch } from "react-router-dom";

export const UserPage = () => {
  const match = useMatch("/users/:userId");
  const { userId } = match.params;
  const user = useSelector((state) => selectUserById);

  //   const postsForUser = useSelector((state) => {
  //     const allPosts = selectAllPosts(state);
  //     return allPosts.filter((post) => post.user === userId);
  //   });

  const postsForUser = useSelector((state) => selectPostsByUser(state, userId));

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ));
  return (
    <section>
      <h2>{user.name}</h2>
      <ul>{postTitles}</ul>
    </section>
  );
};
