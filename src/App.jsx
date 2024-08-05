import AppRoutes from "./routes/AppRoutes";
import { StarWarsProvider } from "./context/StarWarsContext";

function App() {
  return (
    <StarWarsProvider>
      <AppRoutes />
    </StarWarsProvider>
  );
}

export default App;
