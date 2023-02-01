import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";

function AddPostForm({ children }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();

  const users = useSelector((state) => {
    console.log("@@@state", state);
    return state.users;
  });

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const onSavePostClick = () => {
    if (content && title) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  console.log("@@@users", users);
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  const usersOption = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a new Post</h2>
      <form>
        <label htmlFor="">Post Title</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="postAuthor">User: </label>
        <select id="postAuthor">
          <option value={userId} onChange={onAuthorChange}></option>
          {usersOption}
        </select>
        <label htmlFor="postContent">Content: </label>
        <textarea
          onChange={onContentChange}
          value={content}
          name="postContent"
          id="postContent"
          cols="30"
          rows="10"
        ></textarea>
        <button type="button" onClick={onSavePostClick} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
