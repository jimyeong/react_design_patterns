import React from "react";
import styled from "styled-components";
import { Buttons } from "../";

const PagenationBlock = styled.div``;
const buttonStyle = {
  color: "white",
  height: "38px",
  padding: "0px 8px",
};

function Pagenation({ next, previous, onClick }) {
  const onHandleNextClick = async () => {
    if (next) next();
  };
  const onHandlePrevClick = async () => {
    if (previous) previous();
  };
  return (
    <PagenationBlock>
      {next && (
        <Buttons.RoundedBoxButton
          style={buttonStyle}
          onClick={onHandleNextClick}
        >
          next
        </Buttons.RoundedBoxButton>
      )}
      {previous && (
        <Buttons.RoundedBoxButton
          style={buttonStyle}
          onClick={onHandlePrevClick}
        >
          previous
        </Buttons.RoundedBoxButton>
      )}
    </PagenationBlock>
  );
}

export default Pagenation;
