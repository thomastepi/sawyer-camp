import React from "react";
import SharedLayout from "./SharedLayout";
import { Link } from "react-router-dom";
import {
  Heading,
  Box,
  Text,
  Button,
  Center,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const DonateLayer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <SharedLayout color="green">
      <Box
        w="100%"
        align="center"
        p="4rem"
        bg="white"
        mb="20px"
        borderBottomRadius="full"
      >
        <Center>
          <VStack spacing={8}>
            <Heading w={isMobile ? "90%" : "50%"}>
              Agriculture can be a tool for change for nature, food, and rural
              families everywhere.
            </Heading>
            <Text w={isMobile ? "90%" : "50%"}>
              Through our work we develop actionable solutions for climate
              change adaptation and mitigation in agriculture, support
              smallholder farmers with knowledge and tools for sustainable and
              regenerative production, and implement large-scale impact projects
              that impact the livelihoods of rural farming communities.
            </Text>
            <Button colorScheme="teal">
              <Link to="/paypal">Support Our Work</Link>
            </Button>
          </VStack>
        </Center>
      </Box>
    </SharedLayout>
  );
};

export default DonateLayer;
