import { Link, useLocation } from "react-router-dom";
import style from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  return (
    <section className={style.notFound}>
      <h1 className={style.notFoundTitle}>404</h1>
      <h2 className={style.notFoundTitleInform}>Page not found</h2>
      <img
        className={style.notFoundImg}
        src="/src/img/404-page.png"
        alt="404-page"
      />
      <p className={style.notFoundMessage}>
        We`re sorry, the page you requesterd could not be found
      </p>
      <Link to={backLinkHref}>
        <button className={style.notFoundBtn}>Go to homepage</button>
      </Link>
    </section>
  );
};

export default NotFoundPage;
