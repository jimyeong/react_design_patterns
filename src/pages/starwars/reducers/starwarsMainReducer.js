export function starwarsMainReducer(state, action) {
  switch (action.type) {
    case "SET_IS_SORTED":
      return {
        ...state,
        isSorted: action.payload.isSorted,
        sortedBy: action.payload.sortedBy,
      };
    case "SET_KEYWORD":
      return {
        ...state,
        keyword: action.payload,
        isSorted: false,
        sortedBy: "-",
      };
    default:
      return state;
  }
}
