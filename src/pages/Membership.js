import React from "react";
import { PopupButton } from "@typeform/embed-react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Heading,
  Image,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import img from "../assets/images/teke.jpg";
import { Header, Footer } from "../components";

function Membership() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const id = process.env.REACT_APP_TYPEFORM_ID;

  return (
    <>
      <Header />
      <Box color="#87A922">
        <>
          <VStack py="80px" spacing={9} w="60%" m="0 auto">
            <Heading color="green" size="3xl">
              Membership
            </Heading>
            <Text fontSize="lg" align="center">
              The Sawyer Camp Farmers Common Initiative Group is a regional
              collaborative network of farmers committed to shaping the
              agriculture the country needs through collective impact.
            </Text>
          </VStack>
          <Box color="white" bg="#436850" m="0 auto" w="90%">
            <HStack p={isMobile && "50px"}>
              <VStack w={isMobile ? "100%" : "70%"} spacing={9}>
                <Heading align='center'>Join our Regional collaborative network </Heading>
                <Button p="25px">
                  <PopupButton
                    id={id}
                    style={{ fontSize: 20 }}
                    className="my-button"
                  >
                    Become a Member
                  </PopupButton>
                </Button>
              </VStack>
              {!isMobile && (
                <Box w="50%">
                  <Image w="50%" src={img} alt="Teke" />
                </Box>
              )}
            </HStack>
          </Box>
        </>
      </Box>
      <Footer />
    </>
  );
}

export default Membership;
