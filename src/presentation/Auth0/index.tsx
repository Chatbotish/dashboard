import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import config from "../../common/config";
import { routes } from "../common/Routes";

const Auth0 = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <Auth0Provider
      domain={config.AUTH0_DOMAIN}
      clientId={config.AUTH0_CLIENT_ID}
      redirectUri={config.CLIENT_URL + routes.HOME}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0;
