import { format } from "date-fns";

const MovieItem = ({
  dataFilm: { poster_path, title, release_date, vote_average },
}) => {
  const formatDate = (date) => {
    if (!date || isNaN(new Date(date))) {
      return "Unknown date";
    }
    return format(new Date(date), "MMMM dd yyyy");
  };
  const urlImg = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const fallbackImage = "/src/img/image-not-found.jpg";
  return (
    <div>
      <img
        src={poster_path ? urlImg : fallbackImage}
        alt={title}
        width="350"
        height="500"
      />
      <h3>{title}</h3>
      <p>Release date: {formatDate(release_date)}</p>
      <p>Rating: {Number(vote_average).toFixed(1)}</p>
    </div>
  );
};

export default MovieItem;
