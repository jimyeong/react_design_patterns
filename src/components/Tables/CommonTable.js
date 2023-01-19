import React from "react";
import styled from "styled-components";
import TABLE_BASE from "./TableBase";

/**
 * <COMMONTABLE>
 *    data.map((item)=>(<TABLEROW>item.<TABLEROW>))
 * </COMMONTABLE>
 */
function CommonTable({ titles, children, tableConfig }) {
  return (
    <TABLE_BASE config={tableConfig}>
      <thead>
        <tr>
          {titles.map((title, index) => {
            return <td key={index}>{title}</td>;
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </TABLE_BASE>
  );
}

export default CommonTable;
