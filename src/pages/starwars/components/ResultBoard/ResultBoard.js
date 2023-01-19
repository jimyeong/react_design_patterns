import React, { useContext } from "react";
import styled from "styled-components";
import { StarwarsContext } from "../../StarwarsPage";
import { TYPE_LOAD } from "../../../../hooks/useAsync";
import Starships from "../../../../components/CommonComponents/Starships";
import Vehicles from "../../../../components/CommonComponents/Vehicles";
import Films from "../../../../components/CommonComponents/Films";

import { MODEL } from "../../StarwarsPage";

const ResultBoardBlock = styled.div``;

function ResultBoard() {
  const mainContext = useContext(StarwarsContext);
  const { asyncState, asyncDispatch, starwarsDispatch, starwarsState } =
    mainContext;
  if (asyncState.status === TYPE_LOAD.ERROR)
    return <div>something went wrong</div>;
  if (!asyncState.data) return <div>no result</div>;
  if (asyncState.data.results.length > 0) {
    if (starwarsState.keyword == MODEL.STAR_SHIPS)
      return <Starships starships={asyncState.data.results} />;
    if (starwarsState.keyword == MODEL.VEHICLES)
      return <Vehicles vehicles={asyncState.data.results} />;
    if (starwarsState.keyword == MODEL.FILMS)
      return <Films films={asyncState.data.results} />;
  }
  return <ResultBoardBlock></ResultBoardBlock>;
}

export default ResultBoard;
