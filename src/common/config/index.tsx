/*
  There are 3 environments setup in this project:
  1. development (yarn start or yarn build:dev)
  2. staging (yarn build:stage)
  3. production (yarn build)
*/

const ENV = "development";

const development = {
  BASE_API: "http://localhost:5000",
};

const production = {
  ...development,
};

const staging = {
  ...development,
};

const local = {
  ...development,
};

const configs = {
  production,
  staging,
  development,
  local,
};

const currentConfig = configs[ENV];

const config = {
  // START: LOCAL CONFIG
  ENV: ENV,

  BASE_API: currentConfig.BASE_API,
};

export default config;
