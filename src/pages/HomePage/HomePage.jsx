import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getFilmsTrendingAccess } from "../../js/films-api";

const HomePage = () => {
  const [films, setFilms] = useState([]);

  const handelSearch = async () => {
    try {
      setFilms([]);
      const dataFilms = await getFilmsTrendingAccess();
      setFilms(dataFilms);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handelSearch();
  }, []);

  return (
    <section>
      <h1>Trending today</h1>
      <MovieList filmsList={films} />
    </section>
  );
};

export default HomePage;
