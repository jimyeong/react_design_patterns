import React from "react";
import styled from "styled-components";
import { INPUTS } from "../../../../components/";
import { MODEL } from "../../StarwarsPage";
const SortingSelectBlock = styled.div``;

function SortingSelect({ keyword }) {
  let sortData = [];
  if (keyword === MODEL.FILMS) sortData = ["title", "model"];
  if (keyword === MODEL.STAR_SHIPS) sortData = ["name", "director"];
  if (keyword === MODEL.VEHICLES) sortData = ["name", "director"];

  const renderOptions = () => {
    if (sortData.length > 0) {
      return sortData.map((item, i) => {
        return (
          <INPUTS.BASE_SELECT_OPTION key={i}> {item}</INPUTS.BASE_SELECT_OPTION>
        );
      });
    }
  };

  if (keyword === MODEL.FILMS)
    return <INPUTS.BASE_SELECT>{renderOptions()}</INPUTS.BASE_SELECT>;
  if (keyword === MODEL.STAR_SHIPS)
    return <INPUTS.BASE_SELECT>{renderOptions()}</INPUTS.BASE_SELECT>;
  if (keyword === MODEL.VEHICLES)
    return <INPUTS.BASE_SELECT>{renderOptions()}</INPUTS.BASE_SELECT>;
  return null;
}

export default SortingSelect;
