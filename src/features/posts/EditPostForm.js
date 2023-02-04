import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useMatch, Navigate } from "react-router-dom";
import { postUpdated, selectByPostId } from "./postSlice";

function EditPostForm({ children }) {
  const match = useMatch("/editPost/:postId");
  const { postId } = match.params;
  const post = useSelector((state) => selectByPostId(state, postId));

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, content, title }));
      navigate("/");
    }
  };

  return (
    <section>
      <h2>Edit</h2>
      <form action="">
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="what is on your mind"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="postContent">Post Content:</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChange}
          cols="30"
          rows="10"
        ></textarea>
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  );
}

export default EditPostForm;
