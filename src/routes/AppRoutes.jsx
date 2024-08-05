import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StarshipsPage from "../pages/StarshipsPage/StarshipsPage";
import StarshipDetailPage from "../pages/StarshipDetailPage/StarshipDetailPage"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/starships" element={<StarshipsPage />} />
        <Route path="/starships/:id" element={<StarshipDetailPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
