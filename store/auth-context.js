import AsyncStorage from "@react-native-async-storage/async-storage";

import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (userData) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [userEmail, setUserEmail] = useState();

  function authenticate(userData) {
    setUserEmail(userData.email);
    setAuthToken(userData.idToken);
    AsyncStorage.setItem("token", userData.idToken);
    AsyncStorage.setItem("user_email", userData.email);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("token");
  }

  const value = {
    token: authToken,
    userEmail: userEmail,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
