import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Keycloak from 'keycloak-js';
import PrivateRoute from './helpers/PrivateRoute';
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { Routes, Route } from "react-router-dom";

function App() {
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null);

  useEffect(() => {
    fetch('/config.json') 
      .then((response) => response.json())
      .then((config) => {
        const keycloakInstance = new Keycloak({
          url: config.keycloakUrl,
          realm: config.keycloakRealm,
          clientId: config.keycloakClientId,
        });
        setKeycloak(keycloakInstance);
      })
      .catch(error => console.error("Failed to load keycloak config", error));
  }, []);
  
  if (!keycloak) {
    return <div>Loading authentication...</div>;
  }

  
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/profile" 
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } 
        />
      </Routes>
    </ReactKeycloakProvider>
  );
}

export default App;

