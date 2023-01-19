import React from "react";
import styled from "styled-components";
import { useAsync } from "../../hooks/useAsync";

/** rubbish */
function AsyncContainer({ Container, asyncCallback, contextGetter }) {
  const [state, dispatch] = useAsync(asyncCallback);
  return function CustomAsyncContainer() {
    const { loadin } = contextGetter();
    return Container;
  };
}

export default AsyncContainer;
