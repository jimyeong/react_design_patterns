import React, { useContext } from "react";
import styled from "styled-components";
import Pagenation from "../../../../components/CommonComponents/Pagenation";
import { StarwarsContext } from "../../StarwarsPage";
import { _axios } from "../../../../server";

const StarwarsPagenationBlock = styled.div``;

const SERVER_URL = _axios.url;

function StarwarsPagenation() {
  const context = useContext(StarwarsContext);
  const { starwarsDispatch, starwarsState, asyncState, asyncDispatch } =
    context;
  const trimAPI = (string) => {
    if (!string) return null;
    const s = String(string);
    const index = s.indexOf(SERVER_URL);
    const param = s.substring(s, s.length);
    return param;
  };

  const onClickCallback = () => {};

  if (!asyncState.data) return null;

  const next = trimAPI(asyncState.data.next);
  const prev = trimAPI(asyncState.data.previous);
  return <Pagenation onClick={onClickCallback} next={next} previous={prev} />;
}

export default StarwarsPagenation;
