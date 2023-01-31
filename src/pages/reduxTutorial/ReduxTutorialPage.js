import React from "react";
import styled from "styled-components";
import { PostsList } from "../../features/posts/PostsList";
import AddPostForm from "../../features/posts/AddPostForm";

const ReduxTutorialPageBlock = styled.div``;

function ReduxTutorialPage({ children }) {
  return (
    <ReduxTutorialPageBlock>
      <AddPostForm />
      <PostsList />
    </ReduxTutorialPageBlock>
  );
}

export default ReduxTutorialPage;
