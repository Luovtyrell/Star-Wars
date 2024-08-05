import { Link, useParams } from "react-router-dom";
import useData from "../../hooks/useData";

const StarshipDetailCard = () => {
  const { id } = useParams();
  const {
    data: starship,
    loading,
    error,
  } = useData(`https://swapi.dev/api/starships/${id}/`, true);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!starship) return <p className="text-gray-500">No details found.</p>;

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
              {starship.name.toUpperCase()}
            </h1>
            <table className="w-full table-auto border-separate border-spacing-4">
              <tbody>
                {starshipProperties.map(({ key, label }) => (
                  <tr key={key}>
                    <td className="font-semibold w-48 text-slate-200">
                      {label}:
                    </td>
                    <td>{starship[key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
