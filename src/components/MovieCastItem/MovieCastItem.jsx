const MovieCastItem = ({ dataCast: { profile_path, name, character } }) => {
  const urlImg = `https://image.tmdb.org/t/p/w500/${profile_path}`;
  const fallbackImage = "/src/img/image-not-found.jpg";
  return (
    <div>
      <img
        src={profile_path ? urlImg : fallbackImage}
        alt={name}
        width="200"
        height="300"
      />
      <div>
        <h3>{name}</h3>
        <p>Character - {character}</p>
      </div>
    </div>
  );
};

export default MovieCastItem;
