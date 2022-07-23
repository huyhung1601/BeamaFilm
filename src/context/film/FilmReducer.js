const filmReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_FILMS_START":
      return {
        films: [],
        isLoading: true,
        error: false,
      };
    case "FETCH_FILMS_SUCCESS":
      return {
        isLoading: false,
        films: action.payload,
        error: false,
      };
    case "Fetch_FILMS_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default filmReducer;
