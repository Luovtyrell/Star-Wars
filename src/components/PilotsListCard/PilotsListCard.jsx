import { Link } from "react-router-dom";
import { useStarWars } from "../../context/StarWarsContext";
import getFromUrl from "../../helpers/getFromUrl";
import "./PilotsListCard.css";

function PilotsListCard() {
  const { pilots, loading, error, loadMorePilots, hasMorePilots } =
    useStarWars();

  if (loading && !pilots.length) {
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
        {pilots.map(({ url, name }) => (
          <div
            className="card-shape shadow-lg transform hover:scale-100 hover:brightness-150 hover:border-neutral hover:border-opacity-80 transition-all duration-300"
            key={url}>
            <div className="decal mt-3">
              <div className="decal-dot"></div>
            </div>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">{name}</h2>
              <div>
                <Link
                  to={`/pilots/${getFromUrl(url)}`}
                  className="btn btn-active btn-ghost btn-sm mt-3">
                  Show details
                </Link>
              </div>
            </div>
          </div>
        ))}
        {hasMorePilots && (
          <div className="text-center mt-4">
            <button
              onClick={loadMorePilots}
              className={`btn btn-active btn-primary ${loading ? "loading" : ""}`}
              disabled={loading}>
              {loading ? "Loading..." : "View More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PilotsListCard;
