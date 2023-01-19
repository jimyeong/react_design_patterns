import React from "react";
import styled from "styled-components";

const TableRowBlock = styled.tr``;

function TableRow({ customCSS, children }) {
  return (
    <TableRowBlock style={customCSS && customCSS}>{children}</TableRowBlock>
  );
}

export default TableRow;
