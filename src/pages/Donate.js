import React from "react";
import {
  DonateLanding,
  DonateLayer,
  DonateMiddle,
  SharedLayout,
  HeadingBox,
} from "../components";
import { Box } from "@chakra-ui/react";

const img = "https://ik.imagekit.io/thormars/Sawyer-Camp/harvest.jpg";

const Donate = () => {
  return (
    <SharedLayout>
      <HeadingBox title="Donate" image={img} />
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
