import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import {
  DonateHero,
  DonateContent,
  DonateCallToAction,
} from "../../components/DonationComponents";
import { Box } from "@chakra-ui/react";

const img = "https://ik.imagekit.io/thormars/Sawyer-Camp/harvest.jpg";

const Donate = () => {
  return (
    <>
      <PageHeader title="Donate" image={img} />
      <Box>
        <Box bg="white">
          <DonateHero />
        </Box>
        <Box>
          <DonateContent />
        </Box>
        <Box>
          <DonateCallToAction />
        </Box>
      </Box>
    </>
  );
};

export default Donate;
