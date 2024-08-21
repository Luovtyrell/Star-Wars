import AppRoutes from "./routes/AppRoutes";
import { StarWarsProvider } from "./context/StarWarsProvider";
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
