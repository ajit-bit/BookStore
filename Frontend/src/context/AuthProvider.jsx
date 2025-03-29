import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const storedUser = typeof window !== "undefined" ? localStorage.getItem("Users") : null;
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// ✅ Define PropTypes for `children`
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children is passed as a valid React node
};

export const useAuth = () => useContext(AuthContext);
