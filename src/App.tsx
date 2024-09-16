import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AuthContext, { AuthProvider } from "./context/AuthContext";
import Dashboard from "./Dashboard";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const context = useContext(AuthContext);

  if (!context) {
    return <Navigate to="/login" />;
  }

  const { user, loading } = context;

  if (loading) return <div>Loading...</div>;

  return user ? children : <Navigate to="/login" />;
};

export default App;
