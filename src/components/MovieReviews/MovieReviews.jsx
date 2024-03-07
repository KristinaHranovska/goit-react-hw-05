import { useState } from "react";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);
  return <></>;
};

export default MovieReviews;

//results
