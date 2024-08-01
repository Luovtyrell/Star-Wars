import useData from "../../hooks/useData";

const StarshipsListCard = () => {
  const {
    data: starships,
    loading,
    error,
  } = useData("https://swapi.dev/api/starships/");

  if (loading) {
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
        {starships.map((starship) => (
          <div
            className="card text-stone-400 bg-black shadow-lg border border-custom-yellow transform hover:scale-100 hover:brightness-150 hover:border-neutral hover:border-opacity-80 transition-all duration-300"
            key={starship.url}>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">{starship.name}</h2>
              <p className="text-sm">{starship.model}</p>
              <div>
              <button className="btn btn-active btn-ghost mt-3">Mostrar detalle</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarshipsListCard;
