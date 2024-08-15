import { useState, useEffect } from "react";
import fetchData from "../services/swapiService";

const useData = (endpoint, isSingle = false) => {
  const [data, setData] = useState(isSingle ? null : []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        if (Array.isArray(endpoint)) {
          // Handle array of URLs (pilots)
          const results = await Promise.all(endpoint.map(url => fetchData(url)));
          setData(results);
        } else {
          const result = await fetchData(endpoint);
          setData(isSingle ? result : result.results);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [endpoint, isSingle]);

  return { data, loading, error };
};

export default useData;
