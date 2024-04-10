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
  Center,
} from "@chakra-ui/react";
import img from "../assets/images/ayisatu.jpg";
import { SharedLayout } from "../components";
import useIsMobile from "../hooks/useIsMobile";

function Membership() {
  const isMobileView = useIsMobile();
  const id = process.env.REACT_APP_TYPEFORM_ID;

  return (
    <SharedLayout>
      <Box color="#87A922" pt="130px">
        <>
          <VStack py="80px" spacing={9} w="60%" m="0 auto">
            <Heading color="green" size="3xl">
              Membership
            </Heading>
            <Text fontSize="2xl" align="center">
              The Sawyer Camp Farmers Common Initiative Group represents a
              community-driven coalition of regional farmers dedicated to
              reshaping agriculture through unified action and shared vision.
            </Text>
          </VStack>
          <Center color="white" bg="#436850" m="0 auto" w="90%">
            <HStack
              spacing={"10"}
              p={isMobileView && "20px"}
              flexDir={isMobileView && "column"}
            >
              <VStack w={isMobileView ? "100%" : "100%"} spacing={9}>
                <Heading align="center">
                  Be part of our collaborative network
                </Heading>
                <Button p="25px" colorScheme="green">
                  <PopupButton
                    id={id}
                    style={{ fontSize: 20 }}
                    className="my-button"
                  >
                    Become a Member
                  </PopupButton>
                </Button>
              </VStack>
              <Box w={isMobileView ? "90%" : "50%"}>
                <Image w="100%" src={img} alt="Teke" />
              </Box>
            </HStack>
          </Center>
        </>
      </Box>
    </SharedLayout>
  );
}

export default Membership;
