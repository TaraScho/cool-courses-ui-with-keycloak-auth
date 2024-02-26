import { useKeycloak } from "@react-keycloak/web";
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { keycloak } = useKeycloak();

  if (!keycloak.authenticated) {
    keycloak.login({ redirectUri: window.location.origin + '/profile' });  
    return null;
  } 
  return children;
};

export default PrivateRoute;
