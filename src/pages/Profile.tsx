import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import Navbar from '../components/Navbar';

const Profile = () => {
  const { keycloak, initialized } = useKeycloak();
  if (!keycloak || !initialized) {
    return <div>Loading...</div>;
  }
  
  interface KeycloakTokenParsed {
    preferred_username?: string;
  }
    
  console.log(keycloak.tokenParsed)
  const username = (keycloak.tokenParsed as KeycloakTokenParsed)?.preferred_username;


  if (!keycloak.authenticated) {
    return <div>Unable to authenticate!</div>;
  }
  
  return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <Navbar />
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text">
                <span>Welcome back {username}</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                This is your customized user profile.
              </p>
            </div>
            </div>
          </div>
      </section>
    ) 
  };
  
  export default Profile;