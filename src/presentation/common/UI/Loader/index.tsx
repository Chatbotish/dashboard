import { Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = ({ label }: React.ComponentProps<any>) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Spinner size="xl" thickness="4px" emptyColor="gray.200" />
      <p className="mt-3">{label}</p>
    </div>
  );
};

export default Loader;
