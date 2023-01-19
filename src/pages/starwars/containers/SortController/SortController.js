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
  return (
    <SortControllerBlock>
      <div>sort by:</div>
      <SortingSelect keyword={starwarsState.keyword} />
    </SortControllerBlock>
  );
}

export default SortController;
