import React from "react";
import { Link } from "react-router-dom";
import {
  Heading,
  Box,
  Text,
  Button,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";

const DonateLayer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box color="green">
      <Center>
        <Heading
          size="2xl"
          w={isMobile ? "90%" : "80%"}
          align="center"
          py="70px"
          color="white"
        >
          Agriculture can be a tool for change for nature, food, and rural
          families everywhere.
        </Heading>
      </Center>
      <Box w="100%" align="center" bg="#789461">
        <Center w="80%" bg="white" py="50px">
          <Box>
            <Text fontSize='md' w={isMobile ? "90%" : "50%"}>
              Through our work we develop actionable solutions for climate
              change adaptation and mitigation in agriculture, support
              smallholder farmers with knowledge and tools for sustainable and
              regenerative production, and implement large-scale impact projects
              that impact the livelihoods of rural farming communities.
            </Text>
          </Box>
        </Center>
      </Box>
      <Center w="100%">
        <Center pb="60px" w="40%" bg="white">
          <Button colorScheme="green">
            <Link to="/paypal">Support Our Work</Link>
          </Button>
        </Center>
      </Center>
    </Box>
  );
};

export default DonateLayer;
