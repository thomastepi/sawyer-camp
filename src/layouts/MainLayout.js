import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Box } from "@chakra-ui/react";

export const MainLayout = ({ children }) => {
  return (
    <Box as="section">
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default MainLayout;
