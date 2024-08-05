import { createContext, useState, useContext, useEffect } from "react";
import fetchData from "../services/swapiService";
import PropTypes from "prop-types";

const StarWarsContext = createContext();
export const useStarWars = () => useContext(StarWarsContext);

export const StarWarsProvider = ({ children }) => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState("https://swapi.dev/api/starships/");

  const loadMore = async () => {
    if (!nextPage) return;

    setLoading(true);
    try {
      const data = await fetchData(nextPage);
      setStarships((prevStarships) => [...prevStarships, ...data.results]);
      setNextPage(data.next);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <StarWarsContext.Provider
      value={{
        starships,
        loading,
        error,
        loadMore,
        hasMore: Boolean(nextPage),
      }}>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
