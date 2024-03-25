import React from "react";
import SharedLayout from "./SharedLayout";
import FixedBg from "./FixedBg";
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
import img from "../assets/images/rasta-man.jpg";
const DonateLanding = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <SharedLayout color="green">
      <FixedBg image={img} />
      <Box
        w={isMobile ? "90%" : "50%"}
        align="center"
        p="4rem"
        bg="white"
        my="50px"
      >
        <Center>
          <VStack spacing={8}>
            <Heading>
              Please donate to Sawyer Camp Farmers CIG to support regenerative
              agriculture
            </Heading>
            <Text>
              Your valuable contribution helps advance sustainable and
              regenerative agriculture projects that restore nature, support
              rural livelihoods, and transform food supply chains nationally.
            </Text>
            <Button colorScheme="teal">
              <Link to="/paypal">Donate</Link>
            </Button>
          </VStack>
        </Center>
      </Box>
    </SharedLayout>
  );
};

export default DonateLanding;
