import "./FilmItem.scss";

const FilmItem = ({ index, film }) => {
  return (
    <div className="filmItem">
      {index}
      <img src={film.image_url} alt={film.title} />
    </div>
  );
};

export default FilmItem;
