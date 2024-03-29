import React from "react";
import {
  Box,
  HStack,
  Center,
  VStack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";

const DonateMiddle = () => {
  const isMobileView = useIsMobile();
  return (
    <Box w="100%" bg="#789461" mt="80px" color="white">
      <Center>
        <HStack w="80%" py="70px" spacing={9}>
          <Box>
            <VStack spacing={8}>
              <Heading>
                Your small gift can have a lasting impact for agriculture and
                nature.
              </Heading>
              <Button colorScheme="green">
                <Link to="/paypal">Donate Now</Link>
              </Button>
            </VStack>
          </Box>
          {isMobileView ? null : (
            <Box>
              <VStack spacing={8}>
                <Text>
                  Smallholder farmers are uniquely poised to implement the
                  changes agriculture needs to become truly sustainable and
                  regenerative, and to help fix our food system globally.{" "}
                </Text>
                <Text>
                  We are committed to supporting rural communities with
                  resources, training, project implementation and coaching. Your
                  contribution of <span style={{ fontSize: "20px" }}>$30</span>,{" "}
                  <span style={{ fontSize: "20px" }}>$50</span>, or{" "}
                  <span style={{ fontSize: "20px" }}>$100</span> can make a
                  profound impact in the work we do to transform agriculture for
                  the sake of our food, nature, and rural communities.
                </Text>
              </VStack>
            </Box>
          )}
        </HStack>
      </Center>
    </Box>
  );
};

export default DonateMiddle;
