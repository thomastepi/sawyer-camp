import React from "react";
import "../assets/css/sharedLayout.css";
import { VStack } from "@chakra-ui/react";

const SharedLayout = ({ children, ...boxProps }) => {
  return (
    <>
      <VStack {...boxProps}>{children}</VStack>
    </>
  );
};

export default SharedLayout;
