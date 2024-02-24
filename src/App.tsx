import React from 'react';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import keycloak from "./Keycloak"
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from './helpers/PrivateRoute';

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/Profile" 
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

