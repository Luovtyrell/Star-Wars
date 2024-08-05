import { Link } from "react-router-dom";
import useData from "../../hooks/useData";
import "./StarshipListCard.css";
import getStarshipIdFromUrl from "../../helpers/getStarshipIdFromUrl";

const StarshipsListCard = () => {
  const {
    data: starships,
    loading,
    error,
  } = useData("https://swapi.dev/api/starships/");

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-4xl space-y-3">
        {starships.map((starship) => (
          <div
            className="card-shape shadow-lg transform hover:scale-100 hover:brightness-150 hover:border-neutral hover:border-opacity-80 transition-all duration-300"
            key={starship.url}>
            <div className="decal mt-3">
              <div className="decal-dot"></div>
            </div>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">{starship.name}</h2>
              <p className="text-sm">{starship.model}</p>
              <div>
                <Link
                  to={`/starships/${getStarshipIdFromUrl(starship.url)}`}
                  className="btn btn-active btn-ghost btn-sm mt-3">
                  Show details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarshipsListCard;


