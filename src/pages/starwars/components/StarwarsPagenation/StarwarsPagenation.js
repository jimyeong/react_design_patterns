import React, { useContext } from "react";
import styled from "styled-components";
import Pagenation from "../../../../components/CommonComponents/Pagenation";
import { StarwarsContext } from "../../StarwarsPage";
import { _axios } from "../../../../server";

const StarwarsPagenationBlock = styled.div``;

const SERVER_URL = _axios.url;

function StarwarsPagenation({ callApi }) {
  const { starwarsDispatch, starwarsState, asyncState, asyncDispatch } =
    useContext(StarwarsContext);

  const trimAPI = (string) => {
    if (!string) return null;

    const s = string;
    const index = s.indexOf(SERVER_URL);
    const param = s.substring(s, s.length - 1);
    return param;
  };

  const onClickCallback = () => {};

  if (!asyncState.data) return null;
  return (
    <Pagenation
      onClick={onClickCallback}
      callApi={callApi}
      next={trimAPI(asyncState.data.next)}
      previous={trimAPI(asyncState.data.previous)}
    />
  );
}

export default StarwarsPagenation;
