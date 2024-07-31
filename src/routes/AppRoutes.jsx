import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StarshipsPage from "../pages/StarshipsPage/StarshipsPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/starships" element={<StarshipsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes