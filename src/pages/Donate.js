import React from "react";
import {
  DonateLanding,
  DonateLayer,
  DonateMiddle,
  SharedLayout,
} from "../components";
import { Box } from "@chakra-ui/react";

const Donate = () => {
  return (
    <SharedLayout>
      <Box>
        <Box bg="white">
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
