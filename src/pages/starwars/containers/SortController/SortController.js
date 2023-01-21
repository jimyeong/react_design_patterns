import React, { useContext } from "react";
import styled from "styled-components";
import { StarwarsContext } from "../../StarwarsPage";
import { Buttons } from "../../../../components";
import { SortingSelect } from "../../components";

const SortControllerBlock = styled.div`
  margin-top: 15px;
  display: flex;
`;

function SortController({ children }) {
  const { asyncState, asyncDispatch, starwarsDispatch, starwarsState } =
    useContext(StarwarsContext);

  const onChangeSortBy = (value) => {
    console.log("@@@@@@ASDASDASD", value);
    starwarsDispatch({
      type: "SET_IS_SORTED",
      payload: { isSorted: true, sortedBy: value },
    });
  };

  return (
    <SortControllerBlock>
      <div>sort by:</div>
      <SortingSelect
        callback={onChangeSortBy}
        keyword={starwarsState.keyword}
        isSorted={starwarsState.isSorted}
      />
    </SortControllerBlock>
  );
}

export default SortController;
