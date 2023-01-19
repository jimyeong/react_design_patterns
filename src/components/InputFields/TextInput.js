import React from "react";
import styled from "styled-components";

const TEXT_INPUT = styled.input`
  width: 100%;
  height: 44px;
  color: #333;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

export default React.memo(TEXT_INPUT);
