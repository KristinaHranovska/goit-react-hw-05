import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmsDetails } from "../../js/films-api";
import MovieCastItem from "../MovieCastItem/MovieCastItem";
import LoaderMoreInform from "../Loader/LoaderMoreInform";

const MovieCast = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handelClick = async () => {
      try {
        setLoading(true);
        setCredits([]);
        const dataCredits = await getFilmsDetails(id, "/credits");
        setCredits(dataCredits.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    handelClick();
  }, [id]);
  return (
    <section>
      {loading && <LoaderMoreInform />}
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
