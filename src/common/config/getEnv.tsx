const getEnv = () => {
  if (window.location.hostname.includes("localhost")) return "local";
  else if (window.location.hostname.includes("dev")) return "development";
  else if (window.location.hostname.includes("staging")) return "staging";
  return "production";
};

export default getEnv;
