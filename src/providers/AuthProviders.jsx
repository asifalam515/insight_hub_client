import { createContext } from "react";

export const authContext = createContext(null);
const AuthProviders = ({ children }) => {
  const authInfo = {
    name: "asibul alam",
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProviders;
