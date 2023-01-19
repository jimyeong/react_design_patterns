import React, { useState, useCallback, useEffect } from "react";
import { INPUTS, SearchBar } from "./components";
import { useAsync } from "./hooks/useAsync";
import { TYPE_LOAD } from "./hooks/useAsync";
import styled from "styled-components";
import { _axios } from "./server/index";
import { utils } from "./utils";
import StarwarsPage from "./pages/starwars/StarwarsPage";

const INPUT_WRAPPER = styled.div`
  max-width: 1090px;
  margin: 0 auto;
`;

function App() {
  const callApi = async (params) => {
    const result = await _axios.get(params);
    return result;
  };
  const [state, dispatch] = useAsync(async () => {
    return await callApi("/starships");
  }, []);
  useEffect(() => {
    console.log("APP 실행됨");
  }, []);

  if (state.status == TYPE_LOAD.LOADING) return <div>loading</div>;
  if (state.status == TYPE_LOAD.ERROR) return <div>error</div>;
  if (state.status == TYPE_LOAD.RETRY) return <div>something went wrong</div>;

  return (
    <div>
      <StarwarsPage />
    </div>
  );
}

export default App;
