import React from 'react';
import { Link } from 'react-router-dom';
import { useKeycloak } from "@react-keycloak/web";
import Navbar from '../components/Navbar';

const Home = () => {
    const { keycloak, initialized } = useKeycloak();

    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <Navbar />
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            {/* <img src='/hero_dog.png' width="30%" height="auto"> */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text">
                <span>Welcome to Cool Courses</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                <code>coolcourses</code> is the #1 online destination for premiere professional development.
              </p>
            </div>
            {/* <div className="space-x-4">
              <button
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                onClick={() => keycloak.login(
                  {
                    redirectUri: window.location.origin + "/profile"
                  }
                )}
                >Signup/Login</button> */}
              {/* <button
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                onClick={() => keycloak.logout()}
                >Logout</button>
                <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                to="/Profile"
                >My Profile</Link> */}
            {/* </div> */}
          </div>
        </div>
      </section>
    );
  };
  
  export default Home;