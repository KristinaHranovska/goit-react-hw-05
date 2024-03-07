import { Link, useLocation } from "react-router-dom";

const NotFoundPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  return (
    <section>
      <h1>404</h1>
      <h2>Page not found</h2>
      <img src="/src/img/404-page.png" alt="404-page" />
      <p>We`re sorry, the page you requesterd could not be found</p>
      <Link to={backLinkHref}>
        <button>Go to homepage</button>
      </Link>
    </section>
  );
};

export default NotFoundPage;
