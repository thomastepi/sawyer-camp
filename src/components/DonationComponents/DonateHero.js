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
        <Heading color="green" w="80%" m="0 auto" align="center">
          Please donate to Sawyer Camp Farmers CIG to empower Sustainable
          Agriculture
        </Heading>
      </Box>
      <Center bg="#789461" mb="15px">
        <VStack spacing={8} w="80%" bg="white" p="50px">
          <Text align="center" fontSize="2xl">
            Make a Difference. Invest in a healthier planet and a more resilient
            food system. Your contribution supports our mission to advance
            sustainable and regenerative agriculture practices.
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
