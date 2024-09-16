import { createContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setUser({ name: "User" });
    navigate("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ name: "User" });
    }
    setLoading(false);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthContext;
