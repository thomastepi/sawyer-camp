import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

const ChakraUIProvider = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default ChakraUIProvider;
