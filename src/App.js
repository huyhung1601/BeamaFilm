import { useEffect } from "react";
import { fetchFilmsHandler } from "./context/film/api";
import { useFilmContext } from "./context/film/FilmContext";
import Catalogue from "./pages/Catalogue";

function App() {
  const { dispatch } = useFilmContext();
  useEffect(() => {
    fetchFilmsHandler(dispatch);
  }, [dispatch]);

  return (
    <>
      <Catalogue />
    </>
  );
}

export default App;
