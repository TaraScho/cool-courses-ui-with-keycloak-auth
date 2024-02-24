import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://keycloak-alb-1638832286.us-east-1.elb.amazonaws.com/",
 realm: "coolCourses2",
 clientId: "cool-courses-web-app",
});

export default keycloak;

// // Initialize keycloak as null initially
// let keycloak = null;

// // Function to fetch the configuration file and initialize keycloak
// async function initializeKeycloak() {
//   try {
//     const response = await fetch('/keycloak-config.js'); // Assuming keycloak-config.js is in the public folder
//     const config = await response.json();

//     // Initialize Keycloak with fetched configuration
//     keycloak = new Keycloak(config);
//   } catch (error) {
//     console.error('Failed to initialize Keycloak:', error);
//   }
// }

// // Call the initialization function
// initializeKeycloak();

// // Export keycloak instance
// export default keycloak;
