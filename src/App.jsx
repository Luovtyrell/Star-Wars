import AppRoutes from "./routes/AppRoutes";
import { StarWarsProvider } from "./context/StarWarsContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <StarWarsProvider>
        <AppRoutes />
      </StarWarsProvider>
    </AuthProvider>
  );
}

export default App;
