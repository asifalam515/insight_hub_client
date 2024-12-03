import { useContext } from "react";
import { authContext } from "../providers/AuthProviders";

const useAuth = () => {
  const authInfo = useContext(authContext);
  return authInfo;
};

export default useAuth;
