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

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-3xl space-y-4">
        <div className="card-shape shadow-lg hover:brightness-105 hover:border-neutral hover:border-opacity-80 transition-all duration-300 p-6 rounded-lg">
          <div className="decal mt-3">
            <div className="decal-dot"></div>
          </div>
          <div className="card-body">
            <h1 className="text-3xl font-bold mb-4">{starship.name}</h1>
            <table className="w-full table-auto border-separate border-spacing-4">
              <tbody>
                <tr>
                  <td className="font-semibold w-48">Model:</td>
                  <td>{starship.model}</td>
                </tr>
                <tr>
                  <td className="font-semibold w-48">Class:</td>
                  <td>{starship.starship_class}</td>
                </tr>
                <tr>
                  <td className="font-semibold w-48">Manufacturer:</td>
                  <td>{starship.manufacturer}</td>
                </tr>
                <tr>
                  <td className="font-semibold w-48">Cost in Credits:</td>
                  <td>{starship.cost_in_credits}</td>
                </tr>
                <tr>
                  <td className="font-semibold w-48">Length:</td>
                  <td>{starship.length} meters</td>
                </tr>
                <tr>
                  <td className="font-semibold w-48">Crew:</td>
                  <td>{starship.crew}</td>
                </tr>
                <tr>
                  <td className="font-semibold w-48">Passengers:</td>
                  <td>{starship.passengers}</td>
                </tr>
                <tr>
                  <td className="font-semibold w-48">Max Speed:</td>
                  <td>{starship.max_atmosphering_speed}</td>
                </tr>
                <tr>
                  <td className="font-semibold w-48">Hyperdrive Rating:</td>
                  <td>{starship.hyperdrive_rating}</td>
                </tr>
                <tr>
                  <td className="font-semibold w-48">MGLT:</td>
                  <td>{starship.MGLT}</td>
                </tr>
                <tr>
                  <td className="font-semibold w-48">Cargo Capacity:</td>
                  <td>{starship.cargo_capacity}</td>
                </tr>
                <tr>
                  <td className="font-semibold w-48">Consumables:</td>
                  <td>{starship.consumables}</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4">
              <Link to="/starships" className="btn btn-active btn-primary btn-sm mt-3">
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
