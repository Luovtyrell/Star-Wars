import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StarshipsPage from "../pages/StarshipsPage/StarshipsPage";
import StarshipDetailPage from "../pages/StarshipDetailPage/StarshipDetailPage";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import PrivateRoute from "./privateRoute";
import { AuthProvider } from "../context/AuthContext";
import PilotsPage from "../pages/PilotsPage/PilotsPage";
import PilotDetailPage from "../pages/PilotsDetailPage/PilotsDetailPage";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/starships"
            element={
              <PrivateRoute>
                <StarshipsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/starships/:id"
            element={
              <PrivateRoute>
                <StarshipDetailPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/pilots"
            element={
              <PrivateRoute>
                <PilotsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/pilots/:id"
            element={
              <PrivateRoute>
                <PilotDetailPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
