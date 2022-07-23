export const fetchFilmStart = () => ({
  type: "FETCH_FILMS_START",
});

export const fetchFilmSuccess = (films) => ({
  type: "FETCH_FILMS_SUCCESS",
  payload: films,
});

export const fetchFilmFailure = () => ({
  type: "Fetch_FILMS_FAILURE",
});
