import { useParams } from "react-router-dom";
import { getFilmsDetails } from "../../js/films-api.js";
import { useEffect, useState } from "react";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
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
  return (
    <section>
      {film && (
        <div>
          <img src="" alt="" />
          <div>
            <h2>{film.original_title}</h2>
            <p></p>
          </div>
        </div>
      )}
    </section>
  );
};

export default MovieDetailsPage;
