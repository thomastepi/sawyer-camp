import React from "react";
import FixedBg from "./FixedBg";
import { Link } from "react-router-dom";
import { Heading, Box, Text, Button, Center, VStack } from "@chakra-ui/react";
import img from "../assets/images/black-coffee.jpg";
const DonateLanding = () => {
  return (
    <Box color="#87A922">
      <FixedBg image={img} />
      <Box bg="white" w="100%" py="100px">
        <Heading color="green" w="80%" m="0 auto" align="center">
          Please donate to Sawyer Camp Farmers CIG to support regenerative
          agriculture
        </Heading>
      </Box>
      <Center bg="#789461" mb="15px">
        <VStack spacing={8} w="80%" bg="white" p="50px">
          <Text align="center" fontSize="2xl">
            Your valuable contribution helps advance sustainable and
            regenerative agriculture projects that restore nature, support rural
            livelihoods, and transform food supply chains nationally.
          </Text>
          <Button colorScheme="green">
            <Link to="/paypal">Donate</Link>
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default DonateLanding;
