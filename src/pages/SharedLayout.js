import React from "react";
import { Header, Footer } from "../components";
import { Box } from "@chakra-ui/react";

export const SharedLayout = ({ children }) => {
  return (
    <Box as="section">
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default SharedLayout;
