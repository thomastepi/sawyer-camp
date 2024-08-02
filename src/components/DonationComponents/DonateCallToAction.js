import React from "react";
import { Box, HStack, Center, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useIsMobile from "../../hooks/useIsMobile";

const DonateCallToAction = () => {
  const isMobileView = useIsMobile();
  return (
    <Box w="100%" bg="#789461" color="white">
      <Center>
        <HStack w="80%" py="70px" spacing={9}>
          <Box>
            <Heading pb="30px">
              Help us cultivate a future where agriculture and nature flourish -
              donate today!
            </Heading>
            <Button colorScheme="green">
              <Link to="/paypal">Donate Now</Link>
            </Button>
          </Box>
          {!isMobileView && (
            <Box>
              <Text fontSize="2xl">
                Small farmers are key to building a truly sustainable food
                system. Investment in their success empowers them to implement
                innovative practices that benefit our planet and communities.
                <br />
                <br />
                Donate $30, $50, or $100 to invest in a healthier future for
                all.
              </Text>
            </Box>
          )}
        </HStack>
      </Center>
    </Box>
  );
};

export default DonateCallToAction;
