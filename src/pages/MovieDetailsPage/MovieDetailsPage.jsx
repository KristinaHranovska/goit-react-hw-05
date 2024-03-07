import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getFilmsDetails } from "../../js/films-api.js";
import { Suspense, useEffect, useState } from "react";
import { format } from "date-fns";
import { GoArrowLeft } from "react-icons/go";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataFilm = await getFilmsDetails(id);
        setFilm(dataFilm);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);
  const formatDate = (date) => {
    return format(new Date(date), "MMMM dd yyyy");
  };
  return (
    <section>
      <Link to={backLinkHref}>
        <button>
          <GoArrowLeft /> Back
        </button>
      </Link>
      {film && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
            alt={film.original_title}
            width="350"
            height="500"
          />
          <div>
            <h2>{film.original_title}</h2>
            <p>{film.tagline}</p>
            <p>Release date: {formatDate(film.release_date)}</p>
            <h3>Overview</h3>
            <p>{film.overview}</p>
            <h3>Genres</h3>
            <ul>
              {film.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <nav>
        <NavLink to={"cast"} state={location.state}>
          Cast
        </NavLink>
        <NavLink to={"reviews"} state={location.state}>
          Reviews
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetailsPage;
