import React from "react";
import { DonateLanding, DonateLayer, DonateMiddle } from "../components";
import { Header, Footer, } from "../components";
import { Box } from "@chakra-ui/react";

const Donate = () => {
  return (
    <>
      <Header />
      <Box>
        <Box>
          <DonateLanding />
        </Box>
        <Box>
          <DonateLayer />
        </Box>
        <Box>
          <DonateMiddle />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Donate;
