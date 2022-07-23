import { createContext, useContext, useReducer } from "react";
import filmReducer from "./FilmReducer";
const initialState = {
  isLoading: false,
  films: [],
  err: true,
};

const FilmContext = createContext(initialState);

export const FilmContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filmReducer, initialState);
  return (
    <FilmContext.Provider value={{ state, dispatch }}>
      {children}
    </FilmContext.Provider>
  );
};

export const useFilmContext = () => useContext(FilmContext);
