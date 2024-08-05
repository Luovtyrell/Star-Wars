import { Link } from "react-router-dom";
import { useStarWars } from "../../context/StarWarsContext";
import "./StarshipListCard.css";
import getStarshipIdFromUrl from "../../helpers/getStarshipIdFromUrl";

function StarshipsListCard() {
  const { starships, loading, error, loadMore, hasMore } = useStarWars();

  if (loading && !starships.length) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-4xl space-y-3">
        {starships.map(({ url, name, model }) => (
          <div
            className="card-shape shadow-lg transform hover:scale-100 hover:brightness-150 hover:border-neutral hover:border-opacity-80 transition-all duration-300"
            key={url}
          >
            <div className="decal mt-3">
              <div className="decal-dot"></div>
            </div>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">{name}</h2>
              <p className="text-sm">{model}</p>
              <div>
                <Link
                  to={`/starships/${getStarshipIdFromUrl(url)}`}
                  className="btn btn-active btn-ghost btn-sm mt-3"
                >
                  Show details
                </Link>
              </div>
            </div>
          </div>
        ))}
        {hasMore && (
          <div className="text-center mt-4">
            <button
              onClick={loadMore}
              className={`btn btn-active btn-primary ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? "Loading..." : "View More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default StarshipsListCard;
