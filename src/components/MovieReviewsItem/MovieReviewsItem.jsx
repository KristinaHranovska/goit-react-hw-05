import { format } from "date-fns";

const MovieReviewsItem = ({
  dataReviews: {
    author,
    author_details: { username },
    content,
    created_at,
  },
}) => {
  const formatDate = (date) => {
    return format(new Date(date), "MMMM dd yyyy HH:mm:ss");
  };
  return (
    <>
      <h2>{author}</h2>
      <p>Username: {username}</p>
      <p>{formatDate(created_at)}</p>
      <p>{content}</p>
    </>
  );
};

export default MovieReviewsItem;
