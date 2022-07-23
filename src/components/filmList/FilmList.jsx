import React from "react";
import Slider from "./slider/Slider";
import "./FilmList.scss";
import { useFilmContext } from "../../context/film/FilmContext";
import { useCallback } from "react";
import { fetchFilmsHandler } from "../../context/film/api";

const FilmList = () => {
  const { state, dispatch } = useFilmContext();
  const { films, isLoading } = state;
  const refreshHandler = useCallback(() => {
    fetchFilmsHandler(dispatch);
  }, [dispatch]);

  return (
    <div className="filmList_container">
      <div className="filmList_container_header">
        <h3 className="filmList_title">Latiest Movies</h3>
        <button className="refreshBtn" onClick={refreshHandler}>
          Refresh
        </button>
      </div>
      {isLoading ? (
        <>
          <p>...Loading</p>
        </>
      ) : (
        <Slider films={films} />
      )}
    </div>
  );
};

export default FilmList;
