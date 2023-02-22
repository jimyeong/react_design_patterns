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
import { StarwarsPagenation } from "./components";
import { useLocation, useNavigate } from "react-router-dom";

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
  keyword: "",
  isSorted: false,
  sortedBy: "-",
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

function StarwarsPage() {
  const domLocation = useLocation();
  const navigate = useNavigate();
  const [starwarsState, starwarsDispatch] = useReducer(
    starwarsMainReducer,
    starwarsInitialState
  );
  const getSearchKeyword = (keyword) => {
    starwarsDispatch({
      type: "SET_KEYWORD",
      payload: keyword,
    });

    navigate(`/starwars/${utils.setQueryStr({ keyword: keyword })}`);
  };
  const setEndPointParams = (params) => {
    // starships/?page=2
    const URL_PARAMS = utils.getQueryParams(domLocation.search);
    let page = "";
    let keyword = "";
    for (let i = 0; i < URL_PARAMS.length; i++) {
      if (URL_PARAMS[i].key == "page") page = URL_PARAMS[i].value;
      if (URL_PARAMS[i].key == "keyword") keyword = URL_PARAMS[i].value;
    }
    let END_POINT = "/";
    if (keyword == "") return END_POINT;

    if (!keyword == "") {
      END_POINT = `/${keyword}`;
      if (page == "") return END_POINT;
      if (!page == "") {
        END_POINT = `/${keyword}?page=${page}`;
        return END_POINT;
      }
    }

    return;
  };
  const callApi = async (params) => {
    const result = await _axios.get(params);
    return result;
  };
  const [asyncState, asyncDispatch] = useAsync(
    async () => {
      // starships/?page=2
      const URL_PARAMS = utils.getQueryParams(domLocation.search);
      const END_POINT = setEndPointParams(domLocation.search);
      const result = await callApi(END_POINT);

      if (starwarsState.isSorted) {
        result.data.results = result.data.results.sort(
          compareByKey(starwarsState.sortedBy)
        );
        result.data.results = result.data.results.sort(
          compareByKey(starwarsState.sortedBy)
        );
      }
      if (result) return result;
      return await callApi("/starships");
    },
    [starwarsState.keyword, starwarsState.sortedBy, domLocation.search],
    domLocation.search !== "" ? true : false
  );

  const URL_PARAMS = utils.getQueryParams(domLocation.search);
  const keyword = URL_PARAMS.map((param) => {
    return param.key == "keyword" && param.value;
  });
  useEffect(() => {}, [domLocation.search]);
  return (
    <Wrappers.CONTENT_WRAPPER>
      <StarwarsContext.Provider
        value={{
          starwarsDispatch,
          starwarsState,
          asyncState,
          asyncDispatch,
          keyword: keyword[0],
        }}
      >
        <INPUT_WRAPPER>
          <SearchBar callback={getSearchKeyword} id="search_key" />
        </INPUT_WRAPPER>
        <div>keyword: {keyword}</div>
        <SortController />
        <Wrappers.CONTENT_WRAPPER style={{ padding: 0, marginTop: "30px" }}>
          <ResultBoard />
        </Wrappers.CONTENT_WRAPPER>
        {asyncState.status == TYPE_LOAD.LOADING && <div>loading</div>}
        {asyncState.status == TYPE_LOAD.ERROR && <div>error</div>}
        {asyncState.status == TYPE_LOAD.RETRY && (
          <div>something went wrong</div>
        )}
        <StarwarsPagenation navigate={navigate} />
      </StarwarsContext.Provider>
    </Wrappers.CONTENT_WRAPPER>
  );
}

export default StarwarsPage;
