import React from "react";
import { Link } from "react-router-dom";
import { Heading, Box, Text, Button, Center, VStack } from "@chakra-ui/react";
import useIsMobile from "../../hooks/useIsMobile";

const DonateContent = () => {
  const isMobileView = useIsMobile();
  return (
    <Box color="green">
      <Center>
        <Heading
          size="2xl"
          w={isMobileView ? "90%" : "80%"}
          align="center"
          py="70px"
          color="white"
        >
          Together, we can cultivate a future where healthy food, thriving
          ecosystems, and strong rural communities go hand-in-hand.
        </Heading>
      </Center>
      <Box w="100%" align="center" bg="#789461" fontSize="lg">
        <Center
          w={isMobileView ? "100%" : "80%"}
          bg="white"
          py="50px"
          color="#87A922"
          flexDir={"column"}
        >
          <VStack>
            <Text as="b" w="90%">
              Your support empowers us to:
            </Text>
            <Text>* Develop solutions for climate change in agriculture.</Text>

            <Text>* Equip small farmers with sustainable practices.</Text>
            <Text>
              * Launch large-scale projects impacting rural communities.
            </Text>
          </VStack>
          <Box pt="30px">
            <Button colorScheme="green">
              <Link to="/paypal">Support Our Work</Link>
            </Button>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default DonateContent;
