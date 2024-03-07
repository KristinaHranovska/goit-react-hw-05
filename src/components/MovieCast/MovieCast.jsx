import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmsDetails } from "../../js/films-api";
import MovieCastItem from "../MovieCastItem/MovieCastItem";

const MovieCast = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const handelClick = async () => {
      try {
        setCredits([]);
        const dataCredits = await getFilmsDetails(id, "/credits");
        setCredits(dataCredits.cast);
      } catch (error) {
        console.log(error);
      }
    };

    handelClick();
  }, [id]);
  return (
    <section>
      {credits && (
        <ul>
          {credits.map((cast) => (
            <li key={cast.id}>
              <MovieCastItem dataCast={cast} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MovieCast;

// /credits
