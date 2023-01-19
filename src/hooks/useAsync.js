import { useState, useReducer, useEffect } from "react";

export const TYPE_LOAD = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  RETRY: "RETRY",
};

const asyncReducer = (state, action) => {
  switch (action.type) {
    case TYPE_LOAD.IDLE:
      return {
        ...state,
        status: TYPE_LOAD.IDLE,
      };
    case TYPE_LOAD.LOADING:
      return {
        ...state,
        status: TYPE_LOAD.LOADING,
      };
    case TYPE_LOAD.SUCCESS:
      return {
        ...state,
        status: TYPE_LOAD.IDLE,
        data: action.payload,
      };
    case TYPE_LOAD.ERROR:
      return {
        ...state,
        status: TYPE_LOAD.ERROR,
      };
    case TYPE_LOAD.RETRY:
      return {
        ...state,
        status: TYPE_LOAD.RETRY,
      };
    default:
      return state;
  }
};
const intialState = {
  data: null,
  status: TYPE_LOAD.IDLE,
};

export function useAsync(callback, depth = []) {
  const [asyncState, asyncDispatch] = useReducer(asyncReducer, intialState);

  useEffect(() => {
    fetchData();
  }, depth);

  const fetchData = async () => {
    asyncDispatch({ type: TYPE_LOAD.LOADING, ...asyncState });
    try {
      const result = await callback();
      console.log("@@@@!!@#!@#", result);
      asyncDispatch({
        type: TYPE_LOAD.SUCCESS,
        payload: result.data,
        ...asyncState,
      });
    } catch (error) {
      console.error(error);
      asyncDispatch({ type: TYPE_LOAD.ERROR, ...asyncState });
    }
  };

  return [asyncState, asyncDispatch];
}
