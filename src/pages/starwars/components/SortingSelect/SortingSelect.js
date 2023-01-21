import React from "react";
import styled from "styled-components";
import { INPUTS } from "../../../../components/";
import { MODEL } from "../../StarwarsPage";
import { useSelect } from "../../../../hooks/useSelect";
const SortingSelectBlock = styled.div``;

function SortingSelect({ callback, keyword }) {
  let sortData = [];

  if (keyword === MODEL.FILMS) {
    sortData = [
      { label: "title", value: "title" },
      { label: "model", value: "model" },
    ];
  }
  if (keyword === MODEL.STAR_SHIPS) {
    sortData = [
      { label: "name", value: "name" },
      { label: "director", value: "director" },
    ];
  }
  if (keyword === MODEL.VEHICLES) {
    sortData = [
      {
        label: "name",
        value: "name",
      },
      { label: "director", value: "director" },
    ];
  }

  if (sortData.length == 0)
    sortData.push({ label: "not available", value: "not available" });
  const [selectValues, onSelectChange, onSelectReset] = useSelect(sortData[0]);

  const onHandleChange = (e) => {
    onSelectChange(e);
    const sortBy = e.target.value;
    if (callback) callback(sortBy);
  };

  const renderOptions = (selectItems) => {
    if (selectItems.length > 0) {
      return selectItems.map((item, i) => {
        return (
          <INPUTS.BASE_SELECT_OPTION value={item.value} key={i}>
            {item.label}
          </INPUTS.BASE_SELECT_OPTION>
        );
      });
    }
  };
  return (
    <INPUTS.BASE_SELECT onChange={onHandleChange} value={selectValues.value}>
      {renderOptions(sortData)}
    </INPUTS.BASE_SELECT>
  );
}

export default SortingSelect;
