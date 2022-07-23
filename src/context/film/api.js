import axios from "axios";
import { fetchFilmFailure, fetchFilmStart, fetchFilmSuccess } from "./actions";

export const fetchFilmsHandler = async (dispatch) => {
  dispatch(fetchFilmStart());
  try {
    const { data } = await axios.get("http://localhost:5000/api/films");
    dispatch(fetchFilmSuccess(data));
  } catch (err) {
    dispatch(fetchFilmFailure());
  }
};
