import { createContext, useState, useContext, useEffect } from "react";
import fetchData from "../services/swapiService";
import PropTypes from "prop-types";

const StarWarsContext = createContext();
export const useStarWars = () => useContext(StarWarsContext);

export const StarWarsProvider = ({ children }) => {
  const [starships, setStarships] = useState([]);
  const [pilots, setPilots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nextStarshipPage, setNextStarshipPage] = useState(
    "https://swapi.dev/api/starships/"
  );
  const [nextPilotPage, setNextPilotPage] = useState(
    "https://swapi.dev/api/people/"
  );

  const loadMoreStarships = async () => {
    if (!nextStarshipPage) return;

    setLoading(true);
    try {
      const data = await fetchData(nextStarshipPage);
      setStarships((prevStarships) => [...prevStarships, ...data.results]);
      setNextStarshipPage(data.next);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadMorePilots = async () => {
    if (!nextPilotPage) return;

    setLoading(true);
    try {
      const data = await fetchData(nextPilotPage);
      setPilots((prevPilots) => [...prevPilots, ...data.results]);
      setNextPilotPage(data.next);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMoreStarships();
    loadMorePilots();
  }, []);

  return (
    <StarWarsContext.Provider
      value={{
        starships,
        pilots,
        loading,
        error,
        loadMoreStarships,
        loadMorePilots,
        hasMoreStarships: Boolean(nextStarshipPage),
        hasMorePilots: Boolean(nextPilotPage),
      }}>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
