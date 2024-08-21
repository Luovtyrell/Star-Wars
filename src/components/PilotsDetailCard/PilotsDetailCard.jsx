import { Link, useParams } from "react-router-dom";
import useData from "../../hooks/useData";
import { getPilotImageUrl } from "../../helpers/imageHelpers";
import pilotProperties from "../../data/pilotProperties.json";

const PilotDetailCard = () => {
  const { id } = useParams();
  const {
    data: pilot,
    loading,
    error,
  } = useData(`https://swapi.dev/api/people/${id}/`, true);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen p-4">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!pilot) return <p className="text-gray-500">No details found.</p>;

  const imageUrl = getPilotImageUrl(id);

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="card-shape shadow-lg hover:brightness-105 hover:border-neutral hover:border-opacity-80 transition-all duration-300 p-6 rounded-lg">
          <div className="flex flex-col-reverse md:flex-row items-start md:space-x-4">
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-slate-200">
                {pilot.name.toUpperCase()}
              </h1>
              <table className="w-full table-auto border-separate border-spacing-4">
                <tbody>
                  {pilotProperties.map(({ key, label }) => (
                    <tr key={key}>
                      <td className="font-semibold w-48 text-slate-200">
                        {label}:
                      </td>
                      <td>{pilot[key]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4">
                <Link
                  to="/pilots"
                  className="btn btn-active btn-primary btn-sm mt-3">
                  Return to Pilots
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 mb-4 md:mb-0">
              <img
                src={imageUrl}
                alt={`${pilot.name}`}
                className="w-full max-w-xs md:max-w-md h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PilotDetailCard;
