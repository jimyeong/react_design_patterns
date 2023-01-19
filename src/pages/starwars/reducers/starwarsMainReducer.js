export function starwarsMainReducer(state, action) {
  switch (action.type) {
    case "SET_IS_SORTED":
      return { ...state, isSorted: action.payload };
    case "SET_KEYWORD":
      return { ...state, keyword: action.keyword };
    default:
      return state;
  }
}
