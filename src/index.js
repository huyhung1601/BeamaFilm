import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FilmContextProvider } from "./context/film/FilmContext";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <FilmContextProvider>
      <App />
    </FilmContextProvider>
  </>
);
