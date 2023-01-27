import React, { useContext } from "react";
import styled from "styled-components";
import Pagenation from "../../../../components/CommonComponents/Pagenation";
import { StarwarsContext } from "../../StarwarsPage";
import { _axios } from "../../../../server";
import { utils } from "../../../../utils";

const StarwarsPagenationBlock = styled.div``;

const SERVER_URL = _axios.url;

function StarwarsPagenation({ navigate }) {
  const context = useContext(StarwarsContext);
  const { starwarsDispatch, starwarsState, asyncState, asyncDispatch } =
    context;
  const trimAPI = (string) => {
    if (!string) return null;
    if ((string != typeof string) == "string") return null;
    const s = string;
    const index = s.indexOf(SERVER_URL);
    const param = s.substring(SERVER_URL.length).trim();

    // https:// -> [""] empty string
    const params = param.split("/").filter((o) => o);

    const key = params[0];
    const value = params[1].substring("?page=".length);
    const END_POINT = utils.setQueryStr({ keyword: key, page: value });
    return END_POINT;
  };

  if (!asyncState.data) return null;

  const next = () => {
    const endpoint = trimAPI(asyncState.data.next);
    navigate(endpoint);
  };
  const prev = () => {
    const endpoint = trimAPI(asyncState.data.previous);
    navigate(endpoint);
  };
  return (
    <Pagenation
      next={asyncState.data.next && next}
      previous={asyncState.data.previous && prev}
    />
  );
}

export default StarwarsPagenation;
