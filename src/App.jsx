import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import SuperAdminRoutes from "./routes/SuperAdminRoutes";
import UserRoutes from "./routes/UserRoutes";
import LandingPageRoutes from "./routes/LandingPageRoutes";
// Dummy auth function
const getUserRole = () => {
  return localStorage.getItem("role") || "guest";
};

// Protected Route Component
const ProtectedRoute = ({ allowedRoles, children }) => {
  const role = getUserRole();
  return allowedRoles.includes(role) ? children : <Navigate to="/" replace />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageRoutes />} />

        {/* Role-based Routing */}
        <Route path="/*" element={<ProtectedRoute allowedRoles={["admin", "super-admin"]}><AdminRoutes /></ProtectedRoute>} />
        <Route path="/*" element={<ProtectedRoute allowedRoles={["super-admin"]}><SuperAdminRoutes /></ProtectedRoute>} />
        <Route path="/*" element={<ProtectedRoute allowedRoles={["user", "admin", "super-admin"]}><UserRoutes /></ProtectedRoute>} />

      </Routes>
    </Router>
  );
};

export default App;
