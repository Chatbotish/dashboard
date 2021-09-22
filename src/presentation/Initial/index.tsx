import { Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import config from "../../common/config";

const Initial = () => {
  const { loginWithPopup } = useAuth0();
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <Button onClick={() => loginWithPopup()}>Login</Button>

      {/* remove later, just for testing */}
      {config.ENV}
    </div>
  );
};

export default Initial;
