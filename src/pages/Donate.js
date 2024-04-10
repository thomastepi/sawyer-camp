import React from "react";
import { DonateLanding, DonateLayer, DonateMiddle } from "../components";
import { SharedLayout } from "../components";
import { Box } from "@chakra-ui/react";

const Donate = () => {
  return (
    <SharedLayout>
      <Box>
        <Box bg="white" pt="130px">
          <DonateLanding />
        </Box>
        <Box>
          <DonateLayer />
        </Box>
        <Box>
          <DonateMiddle />
        </Box>
      </Box>
    </SharedLayout>
  );
};

export default Donate;
