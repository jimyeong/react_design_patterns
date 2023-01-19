import React from "react";
import styled from "styled-components";
import CONTENT_WRAPPER from "./ContentsWrapper";

const Wrappers = {};

Wrappers.Box = styled.div``;
Wrappers.Row = React.memo(({ leftOrRight, children }) => {
  return <Wrappers.Box leftOrRight={leftOrRight}>{children}</Wrappers.Box>;
});

Wrappers.CONTENT_WRAPPER = React.memo(CONTENT_WRAPPER);

export default Wrappers;
