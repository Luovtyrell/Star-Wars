import { Link, useParams } from "react-router-dom";
import useData from "../../hooks/useData";

const PilotDetailCard = () => {
  const { id } = useParams();
  const {
    data: pilot,
    loading,
    error,
  } = useData(`https://swapi.dev/api/people/${id}/`, true);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!pilot) return <p className="text-gray-500">No details found.</p>;

  const pilotProperties = [
    { key: "name", label: "Name" },
    { key: "height", label: "Height" },
    { key: "mass", label: "Mass" },
    { key: "hair_color", label: "Hair Color" },
    { key: "skin_color", label: "Skin Color" },
    { key: "eye_color", label: "Eye Color" },
    { key: "birth_year", label: "Birth Year" },
    { key: "gender", label: "Gender" },
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
                Return to pilots
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PilotDetailCard;