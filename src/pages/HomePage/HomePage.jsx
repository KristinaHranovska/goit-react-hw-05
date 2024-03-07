import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getFilmsTrendingAccess } from "../../js/films-api";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  const handelSearch = async () => {
    try {
      setLoading(true);
      setFilms([]);
      const dataFilms = await getFilmsTrendingAccess();
      setFilms(dataFilms);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handelSearch();
  }, []);

  return (
    <section>
      <h1>Trending today</h1>
      {loading && <Loader />}
      <MovieList filmsList={films} />
    </section>
  );
};

export default HomePage;