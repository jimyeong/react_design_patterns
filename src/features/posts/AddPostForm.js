import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postSlice";

function AddPostForm({ children }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onSavePostClick = () => {
    if (content && title) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
      setTitle("");
      setContent("");
    }
  };

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
        <label htmlFor="postContent">Content: </label>
        <textarea
          onChange={onContentChange}
          value={content}
          name="postContent"
          id="postContent"
          cols="30"
          rows="10"
        ></textarea>
        <button type="button" onClick={onSavePostClick}>
          Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
