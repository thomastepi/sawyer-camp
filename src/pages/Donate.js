import React from "react";
import { DonateLanding, DonateLayer, DonateMiddle } from "../components";
import { SharedLayout } from "../components";
import { Box } from "@chakra-ui/react";

const Donate = () => {
  return (
    <SharedLayout>
      <Box mt="130px">
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
    </SharedLayout>
  );
};

export default Donate;
