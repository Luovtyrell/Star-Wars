import { Link, useParams } from "react-router-dom";
import { useStarWars } from "../../context/StarWarsContext";
import useData from "../../hooks/useData";
import {
  getStarshipImageUrl,
  getPilotImageUrl,
  getFilmImageUrl,
} from "../../helpers/imageHelpers";
import getIdFromUrl from "../../helpers/getFromUrl";

const StarshipDetailCard = () => {
  const { id } = useParams();
  const { starships } = useStarWars();
  const starship = starships.find((s) => s.url.endsWith(`${id}/`));
  const pilotUrls = starship?.pilots || [];
  const filmUrls = starship?.films || [];

  const {
    data: starshipData,
    loading: starshipLoading,
    error: starshipError,
  } = useData(`https://swapi.dev/api/starships/${id}/`, true);

  const {
    data: pilotData,
    loading: pilotsLoading,
    error: pilotsError,
  } = useData(pilotUrls, false);

  const {
    data: filmData,
    loading: filmsLoading,
    error: filmsError,
  } = useData(filmUrls, false);

  if (starshipLoading || pilotsLoading || filmsLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  if (starshipError || pilotsError || filmsError) {
    console.error(
      "Starship or Pilots or Films loading error:",
      starshipError,
      pilotsError,
      filmsError
    );
    return (
      <p className="text-red-500">
        Error: {starshipError || pilotsError || filmsError}
      </p>
    );
  }

  if (!starshipData) return <p className="text-gray-500">No details found.</p>;

  const imageUrl = getStarshipImageUrl(id);

  const starshipProperties = [
    { key: "model", label: "Model" },
    { key: "starship_class", label: "Class" },
    { key: "manufacturer", label: "Manufacturer" },
    { key: "cost_in_credits", label: "Cost in Credits" },
    { key: "length", label: "Length" },
    { key: "crew", label: "Crew" },
    { key: "passengers", label: "Passengers" },
    { key: "max_atmosphering_speed", label: "Max Speed" },
    { key: "hyperdrive_rating", label: "Hyperdrive Rating" },
    { key: "MGLT", label: "MGLT (Megalight)" },
    { key: "cargo_capacity", label: "Cargo Capacity" },
    { key: "consumables", label: "Consumables" },
  ];

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-3xl space-y-4">
        <div className="card-shape shadow-lg hover:brightness-105 hover:border-neutral hover:border-opacity-80 transition-all duration-300 p-6 rounded-lg">
          <div className="decal mt-3">
            <div className="decal-dot"></div>
          </div>
          <div className="card-body">
            <h1 className="text-3xl font-bold mb-4 text-slate-200">
              {starshipData.name.toUpperCase()}
            </h1>
            <img
              src={imageUrl}
              alt={`${starshipData.name}`}
              className="w-full h-auto mb-4 rounded-lg shadow-lg"
            />
            <table className="w-full table-auto border-separate border-spacing-4">
              <tbody>
                {starshipProperties.map(({ key, label }) => (
                  <tr key={key}>
                    <td className="font-semibold w-48 text-slate-200">
                      {label}:
                    </td>
                    <td>{starshipData[key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-slate-200 mb-2">
                Pilots
              </h2>
              {pilotData.length > 0 ? (
                <div className="flex flex-wrap gap-4">
                  {pilotData.map((pilot) => (
                    <Link
                      to={`/pilots/${getIdFromUrl(pilot.url)}`}
                      key={pilot.name}
                      className="block max-w-[150px]">
                      <img
                        src={getPilotImageUrl(getIdFromUrl(pilot.url))}
                        alt={pilot.name}
                        className="w-full h-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity duration-300"
                      />
                      <p className="text-center text-slate-200 mt-2">
                        {pilot.name}
                      </p>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">
                  No pilots found for this starship.
                </p>
              )}
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-slate-200 mb-2">
                Films
              </h2>
              {filmData.length > 0 ? (
                <div className="flex flex-wrap gap-4">
                  {filmData.map((film) => (
                    <div key={film.episode_id} className="block max-w-[150px]">
                      <img
                        src={getFilmImageUrl(film.episode_id)}
                        alt={film.title}
                        className="w-full h-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity duration-300"
                      />
                      <p className="text-center text-slate-200 mt-2">
                        {film.title}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">
                  No films found for this starship.
                </p>
              )}
            </div>
            <div className="mt-4">
              <Link
                to="/starships"
                className="btn btn-active btn-primary btn-sm mt-3">
                Return to Starships List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarshipDetailCard;
