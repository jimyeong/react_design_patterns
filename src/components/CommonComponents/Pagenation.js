import React from "react";
import styled from "styled-components";
import { Buttons } from "../";

const PagenationBlock = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
const buttonStyle = {
  color: "white",
  height: "38px",
  padding: "0px 8px",
  width: "90px",
  fontSize: "18px",
};

function Pagenation({ next, previous }) {
  const onHandleNextClick = async () => {
    if (next) next();
  };
  const onHandlePrevClick = async () => {
    if (previous) previous();
  };
  return (
    <PagenationBlock>
      {previous && (
        <Buttons.RoundedBoxButton
          style={buttonStyle}
          onClick={onHandlePrevClick}
        >
          previous
        </Buttons.RoundedBoxButton>
      )}
      {next && (
        <Buttons.RoundedBoxButton
          style={buttonStyle}
          onClick={onHandleNextClick}
        >
          next
        </Buttons.RoundedBoxButton>
      )}
    </PagenationBlock>
  );
}

export default Pagenation;
