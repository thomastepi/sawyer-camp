import React from "react";
import FixedBg from "../FixedBackground/FixedBg";
import { Link } from "react-router-dom";
import { Heading, Box, Text, Button, Center, VStack } from "@chakra-ui/react";
const DonateHero = () => {
  return (
    <Box color="#87A922">
      <FixedBg
        image={"https://ik.imagekit.io/thormars/Sawyer-Camp/nature.jpg"}
      />
      <Box bg="white" w="100%" py="100px">
        <Heading color="green" w="80%" m="0 auto" align="center" size="lg">
          Your donation helps small farmers implement climate-smart agriculture,
          ensuring food security and environmental sustainability for future
          generations.
        </Heading>
      </Box>
      <Center bg="#789461" mb="15px">
        <VStack spacing={8} w="80%" bg="white" p={{ base: "15px 1px", md: "50px" }}>
          <Text align="center" fontSize="2xl">
            Every Dollar Counts! Your donation helps train small farmers, combat
            climate change, and restore degraded lands. Join us in creating a
            food system that works for both people and the planet.
          </Text>
          <Button colorScheme="green">
            <Link to="/paypal">Donate</Link>
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default DonateHero;
