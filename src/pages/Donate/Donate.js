import React from "react";
import MainLayout from "../../layouts/MainLayout";
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
    <MainLayout>
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
    </MainLayout>
  );
};

export default Donate;
