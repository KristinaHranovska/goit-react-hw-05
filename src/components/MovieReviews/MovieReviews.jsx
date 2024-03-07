import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmsDetails } from "../../js/films-api";
import MovieReviewsItem from "../MovieReviewsItem/MovieReviewsItem";

const MovieReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const handelClick = async () => {
      try {
        setReviews([]);
        const dataCredits = await getFilmsDetails(id, "/reviews");
        setReviews(dataCredits.results);
      } catch (error) {
        console.log(error);
      }
    };

    handelClick();
  }, [id]);
  return (
    <section>
      {reviews &&
        (reviews.length !== 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <MovieReviewsItem dataReviews={review} />
              </li>
            ))}
          </ul>
        ) : (
          <p>{`We don't have any reviews for this movie`}</p>
        ))}
    </section>
  );
};

export default MovieReviews;

// /reviews
