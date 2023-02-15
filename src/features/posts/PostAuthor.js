import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

export const PostAuthor = ({ userId }) => {
  // const author = useSelector((state) =>
  //   state.users.find((user) => user.id == userId)
  // );
  const author = useSelector(selectAllUsers);
  return <span>by {author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;
