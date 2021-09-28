import { Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { routes } from "../common/Routes";
import config from "../../common/config";
import { useEffect } from "react";
import { setStorageItem } from "../../infrastructure/common/local";
import { logger } from "../../common/utils";

const Home = () => {
  const { user, logout, getAccessTokenSilently } = useAuth0();

  //   if (isLoading) return <Spinner title="Loading ..." />;
  //   else if (!isAuthenticated) return <Redirect to={routes.INITIAL} />;

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${config.AUTH0_DOMAIN}/userinfo`,
          scope: "read:current_user",
        });
        setStorageItem("accessToken", accessToken);
      } catch (error: any) {
        logger(error, "getAccessToken()");
      }
    };
    getAccessToken();
  }, [getAccessTokenSilently]);

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
