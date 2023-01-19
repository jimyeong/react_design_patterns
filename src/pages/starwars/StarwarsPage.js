import React, { useEffect, useContext, useReducer, createContext } from "react";
import styled from "styled-components";
import { _axios } from "../../server";
import { SearchBar, Wrappers } from "../../components";
import { useAsync } from "../../hooks/useAsync";
import { TYPE_LOAD } from "../../hooks/useAsync";
import { utils } from "../../utils";
import ResultBoard from "./components/ResultBoard/ResultBoard";
import { starwarsMainReducer } from "./reducers/starwarsMainReducer";
import { SortController } from "./containers";

// 문서로 먼저 작업을 정의하고 시작할 것
// 1. when it's default state, show vehicles to users
// 2. for rest of the cases, take users inputs
// 3. if nothing matches , then show not result

const StarwarsPageBlock = styled.div``;

const INPUT_WRAPPER = styled.div`
  max-width: 1090px;
  margin: 0 auto;
`;

export const MODEL = {
  DEFAULT: "",
  STAR_SHIPS: "starships",
  VEHICLES: "vehicles",
  FILMS: "films",
};
const starwarsInitialState = {
  keyword: MODEL.STAR_SHIPS,
  isSorted: false,
};
export const StarwarsContext = createContext(starwarsInitialState);

const compareByKey = (key) => {
  return (a, b) => {
    const l1 = String(a[key]).substring(0, 1).toLowerCase();
    const l2 = String(b[key]).substring(0, 1).toLowerCase();
    if (l1 > l2) return 1;
    if (l1 < l2) return -1;
    if (l1 == l2) return 0;
  };
};

function StarwarsPage({ children }) {
  const [starwarsState, starwarsDispatch] = useReducer(
    starwarsMainReducer,
    starwarsInitialState
  );
  const getSearchKeyword = (keyword) => {
    starwarsDispatch({ type: "SET_KEYWORD", keyword });
  };
  const callApi = async (params) => {
    const result = await _axios.get(params);
    return result;
  };
  const [asyncState, asyncDispatch] = useAsync(async () => {
    let result;
    if (starwarsState.keyword == MODEL.DEFAULT)
      result = await callApi("/starships");

    // name
    if (starwarsState.keyword == MODEL.STAR_SHIPS)
      result = await callApi(`/${MODEL.STAR_SHIPS}`);

    // name
    if (starwarsState.keyword == MODEL.VEHICLES)
      result = await callApi(`/${MODEL.VEHICLES}`);

    // title
    if (starwarsState.keyword == MODEL.FILMS)
      result = await callApi(`/${MODEL.FILMS}`);

    if (starwarsState.isSorted) {
      if (
        starwarsState.keyword == MODEL.STAR_SHIPS ||
        starwarsState.keyword == MODEL.VEHICLES
      ) {
        result.data.results = result.data.results.sort(compareByKey("name"));
      }
      if (starwarsState.keyword == MODEL.FILMS) {
        result.data.results = result.data.results.sort(compareByKey("title"));
      }
    }
    if (result) return result;

    return await callApi("/starships");
  }, [starwarsState.keyword, starwarsState.isSorted]);
  useEffect(() => {
    console.log("APP 실행됨");
  }, []);
  return (
    <Wrappers.CONTENT_WRAPPER>
      <StarwarsContext.Provider
        value={{
          starwarsDispatch,
          starwarsState,
          asyncState,
          asyncDispatch,
        }}
      >
        <INPUT_WRAPPER>
          <SearchBar callback={getSearchKeyword} id="search_key" />
        </INPUT_WRAPPER>
        <div>keyword: {starwarsState.keyword}</div>
        {asyncState.status == TYPE_LOAD.LOADING && <div>loading</div>}
        {asyncState.status == TYPE_LOAD.ERROR && <div>error</div>}
        {asyncState.status == TYPE_LOAD.RETRY && (
          <div>something went wrong</div>
        )}
        <SortController />
        <Wrappers.CONTENT_WRAPPER style={{ padding: 0, marginTop: "30px" }}>
          <ResultBoard />
        </Wrappers.CONTENT_WRAPPER>
      </StarwarsContext.Provider>
    </Wrappers.CONTENT_WRAPPER>
  );
}

export default StarwarsPage;
