import { useState, useEffect } from "react";
import { StarWarsContext } from "./StarWarsContext";
import fetchData from "../services/swapiService";
import PropTypes from "prop-types";

export const StarWarsProvider = ({ children }) => {
  const [starships, setStarships] = useState([]);
  const [pilots, setPilots] = useState([]);
  const [loadingStarships, setLoadingStarships] = useState(false);
  const [loadingPilots, setLoadingPilots] = useState(false);
  const [error, setError] = useState(null);
  const [nextStarshipPage, setNextStarshipPage] = useState(
    "https://swapi.dev/api/starships/"
  );
  const [nextPilotPage, setNextPilotPage] = useState(
    "https://swapi.dev/api/people/"
  );

  const loadMoreStarships = async () => {
    if (!nextStarshipPage) return;

    setLoadingStarships(true);
    try {
      const data = await fetchData(nextStarshipPage);
      setStarships((prev) => [...prev, ...data.results]);
      setNextStarshipPage(data.next);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingStarships(false);
    }
  };

  const loadMorePilots = async () => {
    if (!nextPilotPage) return;

    setLoadingPilots(true);
    try {
      const data = await fetchData(nextPilotPage);
      setPilots((prev) => [...prev, ...data.results]);
      setNextPilotPage(data.next);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingPilots(false);
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
        loadingStarships,
        loadingPilots,
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
