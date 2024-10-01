import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, isAuthenticated: true };

    case "logout":
      return { ...state, isAuthenticated: false };
  }
};

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [{ isAuthenticated }, dispatch] = useReducer(reducer, initialState);

  const login = () => {
    dispatch({ type: "login" });
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
