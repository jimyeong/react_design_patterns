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
  const {
    asyncState,
    asyncDispatch,
    starwarsDispatch,
    starwarsState,
    keyword,
  } = mainContext;
  if (asyncState.status === TYPE_LOAD.LOADING) return null;
  if (asyncState.status === TYPE_LOAD.ERROR)
    return <div>something went wrong</div>;
  if (!asyncState.data) return <div>no result</div>;
  if (asyncState.data.results.length > 0) {
    if (keyword == MODEL.STAR_SHIPS)
      return <Starships starships={asyncState.data.results} />;
    if (keyword == MODEL.VEHICLES)
      return <Vehicles vehicles={asyncState.data.results} />;
    if (keyword == MODEL.FILMS)
      return <Films films={asyncState.data.results} />;
  }
  return null;
}

export default ResultBoard;
