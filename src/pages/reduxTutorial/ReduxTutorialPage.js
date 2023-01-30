import React from "react";
import styled from "styled-components";
import { PostsList } from "../../features/posts/PostsList";

const ReduxTutorialPageBlock = styled.div``;

function ReduxTutorialPage({ children }) {
  return (
    <ReduxTutorialPageBlock>
      <PostsList />
    </ReduxTutorialPageBlock>
  );
}

export default ReduxTutorialPage;
