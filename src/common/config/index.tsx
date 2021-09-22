/*
  There are 3 environments setup in this project:
  1. development (yarn start or yarn build:dev)
  2. staging (yarn build:stage)
  3. production (yarn build)
*/

import getEnv from "./getEnv";

const ENV = getEnv();

const local = {
  API_URL: "http://localhost:5000",
  CLIENT_URL: "http://localhost:3000",
  AUTH0_DOMAIN: "dev-qlg7c9vz.us.auth0.com",
  AUTH0_CLIENT_ID: "czQVb2eCU05djAnNy96MAh5Ki9JxKY2e",
};

const development = {
  ...local,

  CLIENT_URL: "https://chatbotish-dev.vercel.app",
};

const staging = {
  ...development,

  CLIENT_URL: "https://chatbotish-staging.vercel.app",
};

const production = {
  ...staging,

  CLIENT_URL: "https://chatbotish-dash.vercel.app",

  AUTH0_DOMAIN: "dev-qlg7c9vz.us.auth0.com",
  AUTH0_CLIENT_ID: "CK0NoxdHj1K0QTrtI4pNjcoB0hJNbY1N",
};

const configs = { local, development, staging, production };

const currentConfig = configs[ENV];

const config = {
  // START: LOCAL CONFIG
  ENV: ENV,

  API_URL: currentConfig.API_URL,
  CLIENT_URL: currentConfig.CLIENT_URL,

  // START: Auth0 Config
  AUTH0_DOMAIN: currentConfig.AUTH0_DOMAIN,
  AUTH0_CLIENT_ID: currentConfig.AUTH0_CLIENT_ID,
  // END: Auth0 Config
};

export default config;
