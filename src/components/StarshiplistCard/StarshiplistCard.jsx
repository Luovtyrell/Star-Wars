import { useEffect, useState } from "react";
import fetchStarships from "../../services/swapiService";

const NavesList = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNaves = async () => {
      try {
        const data = await fetchStarships();
        setStarships(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadNaves();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-4xl space-y-3">
        {starships.map((starhsip) => (
          <div className="card  text-stone-400 bg-black shadow-lg border border-custom-yellow transform hover:scale-100 hover:brightness-150 hover:border-neutral hover:border-opacity-80 transition-all duration-300" key={starhsip.url}>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">{starhsip.name}</h2>
              <p className="text-sm">{starhsip.model}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavesList;
