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
    return navigate(END_POINT);
  };

  const onClickCallback = () => {};

  if (!asyncState.data) return null;

  const next = () => {
    const a = trimAPI(asyncState.data.next);
    console.log("@@@@whatis a", a);
  };
  const prev = () => {};
  return <Pagenation onClick={onClickCallback} next={next} previous={prev} />;
}

export default StarwarsPagenation;
