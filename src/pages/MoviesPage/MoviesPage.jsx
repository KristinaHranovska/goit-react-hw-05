import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { getFilmsSearch } from "../../js/films-api.js";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader.jsx";

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSearchResults([]);
    const searchData = async (query, page) => {
      try {
        setLoading(true);
        const response = await getFilmsSearch(query, page);
        setSearchResults(response.results);
        setTotalPages(response.total_pages);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      searchData(searchQuery, currentPage);
    }
  }, [searchQuery, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <main>
      <section>
        <SearchBox onSubmit={(query) => setSearchParams({ search: query })} />
        {loading && <Loader />}
        {searchResults.length !== 0 && <MovieList filmsList={searchResults} />}
        {searchResults.length !== 0 && (
          <div>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous Page
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next Page
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default MoviesPage;
