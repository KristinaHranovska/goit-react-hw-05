import style from "./MovieCastItem.module.css";

const MovieCastItem = ({ dataCast: { profile_path, name, character } }) => {
  const urlImg = `https://image.tmdb.org/t/p/w500/${profile_path}`;
  const fallbackImage = "../../img/image-not-found.jpg";
  return (
    <div>
      <img
        src={profile_path ? urlImg : fallbackImage}
        alt={name}
        width="200"
        height="300"
      />
      <div className={style.castItemThumb}>
        <h3 className={style.castItemTitle}>{name}</h3>
        <p className={style.castItemCharacter}>
          <span className={style.castItemSpan}>Character:</span> {character}
        </p>
      </div>
    </div>
  );
};

export default MovieCastItem;
