import style from "./MovieCastItem.module.css";

const MovieCastItem = ({ dataCast: { profile_path, name, character } }) => {
  const urlImg = `https://image.tmdb.org/t/p/w500/${profile_path}`;
  return (
    <div>
      <img
        className={style.castImg}
        src={
          profile_path
            ? urlImg
            : "https://kartinki.pics/pics/uploads/posts/2022-08/1661450875_1-kartinkin-net-p-pustoi-prozrachnii-fon-krasivo-1.png"
        }
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
