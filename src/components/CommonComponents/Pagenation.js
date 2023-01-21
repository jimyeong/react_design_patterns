import React from "react";
import styled from "styled-components";
import { Buttons } from "../";

const PagenationBlock = styled.div``;
const buttonStyle = {
  color: "white",
  height: "38px",
  padding: "0px 8px",
};

function Pagenation({ next, previous, callApi, onClick }) {
  const onHandleNextClick = async () => {
    const result = await callApi(next);
    if (onClick) onClick();
  };
  const onHandlePrevClick = async () => {
    const result = await callApi(previous);
    if (onClick) onClick();
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
