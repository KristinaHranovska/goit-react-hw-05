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
import Loader from "../../components/Loader/Loader.jsx";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const dataFilm = await getFilmsDetails(id);
        setFilm(dataFilm);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
  const formatDate = (date) => {
    return format(new Date(date), "MMMM dd yyyy");
  };
  const fallbackImage = "/src/img/image-not-found.jpg";
  return (
    <section>
      <Link to={backLinkHref}>
        <button>
          <GoArrowLeft /> Back
        </button>
      </Link>
      {loading && <Loader />}
      {film && (
        <div>
          <img
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
                : fallbackImage
            }
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
