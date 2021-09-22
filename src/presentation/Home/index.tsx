import { Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { routes } from "../common/Routes";
import config from "../../common/config";

const Home = () => {
  const { user, logout } = useAuth0();

  //   if (isLoading) return <Spinner title="Loading ..." />;
  //   else if (!isAuthenticated) return <Redirect to={routes.INITIAL} />;

  return (
    <section className="flex flex-col items-center justify-center mt-10">
      Welcome {user?.name} !
      <Button
        className="mt-10"
        onClick={() => logout({ returnTo: config.CLIENT_URL + routes.INITIAL })}
      >
        Logout
      </Button>
    </section>
  );
};

export default Home;
