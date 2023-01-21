import React from "react";
import styled from "styled-components";
/**
 * config object should be CSS Style Object
 */
const BASE_TABLEBLOCK = styled.table`
  thead {
    text-align: center;
  }
  > tbody {
    text-align: center;
    tr {
      ${(props) => {
        if (props.config)
          for (const [key, value] of Object.entries(props.config)) {
            return `${key}: ${value}`;
          }
      }};
    }
    tr:nth-child(2n) {
      background-color: #f1f1f1;
    }
    tr:nth-child(2n-1) {
      background-color: #fff;
    }
  }
`;

const TABLE_BASE = ({ children, config }) => {
  return <BASE_TABLEBLOCK config={config}>{children}</BASE_TABLEBLOCK>;
};

export default TABLE_BASE;
