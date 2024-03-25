import React from "react";
import {
  Box,
  HStack,
  Center,
  VStack,
  Heading,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const DonateMiddle = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box w="100%" bg="teal" mt="80px" color="white">
      <Center>
        <HStack w="80%" py="70px" spacing={9}>
          <Box>
            <VStack spacing={8}>
              <Heading>
                Your small gift can have a lasting impact for agriculture and
                nature.
              </Heading>
              <Button colorScheme="teal">
                <Link to="/paypal">Donate Now</Link>
              </Button>
            </VStack>
          </Box>
          {isMobile ? null : (
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
