import { useState } from "react";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { id } = useParams();
  const [credits, setcredits] = useState(null);
  return <></>;
};

export default MovieCast;

//credits
