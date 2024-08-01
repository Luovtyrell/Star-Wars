import { useState, useEffect } from "react";
import fetchData from "../services/swapiService";

const useData = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const result = await fetchData(endpoint);
        setData(result.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useData;
