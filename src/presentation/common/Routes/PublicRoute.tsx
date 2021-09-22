import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect, Route } from "react-router-dom";

import { routes } from "./routes";
import Loader from "../UI/Loader";

const PublicRoute = ({
  component: RouteComponent,
  ...props
}: React.ComponentProps<any>) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <Loader label="Authenticating..." />;
  return (
    <Route
      {...props}
      render={(routeProps) =>
        isAuthenticated ? (
          <Redirect to={routes.HOME} />
        ) : (
          <RouteComponent {...routeProps} />
        )
      }
    />
  );
};

export default PublicRoute;
