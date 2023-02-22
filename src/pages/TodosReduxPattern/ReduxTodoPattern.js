import React from "react";
import styled from "styled-components";

const ReduxTodoPatternBlock = styled.div``;

function ReduxTodoPattern({ children }) {
  return (
    <ReduxTodoPatternBlock>
      <h3>Redux Pattern Todos</h3>
    </ReduxTodoPatternBlock>
  );
}

export default ReduxTodoPattern;
