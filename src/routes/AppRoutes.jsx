import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StarshipsPage from "../pages/StarshipsPage/StarshipsPage";
import StarshipDetailPage from "../pages/StarshipDetailPage/StarshipDetailPage";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import PrivateRoute from "./privateRoute";
import { AuthProvider } from "../context/AuthContext";

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
            element={<PrivateRoute element={<StarshipsPage />} />}
          />
          <Route
            path="/starships/:id"
            element={<PrivateRoute element={<StarshipDetailPage />} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
