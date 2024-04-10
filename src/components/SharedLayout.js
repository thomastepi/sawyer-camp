import React from "react";
import { Header, Footer } from ".";
import { Box } from "@chakra-ui/react";

export const SharedLayout = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default SharedLayout;
