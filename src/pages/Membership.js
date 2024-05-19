import React from "react";
import { PopupButton } from "@typeform/embed-react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Heading,
  Button,
  Center,
} from "@chakra-ui/react";
import { SharedLayout, HeadingBox } from "../components";
import useIsMobile from "../hooks/useIsMobile";

const img = "https://ik.imagekit.io/thormars/Sawyer-Camp/members.jpg";

function Membership() {
  const isMobileView = useIsMobile();
  const id = process.env.REACT_APP_TYPEFORM_ID;

  return (
    <SharedLayout>
      <Box color="#87A922">
        <>
          <Box w="100%">
            <HeadingBox image={img} title="Membership" />
          </Box>
          <VStack py="80px" spacing={9} w="60%" m="0 auto">
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
              <Box w="100%">
                <VStack spacing={9}>
                  <Heading align="center">
                    Be part of our collaborative network
                  </Heading>
                  <Button
                    as="div"
                    borderRadius="0"
                    p="25px"
                    colorScheme="green"
                  >
                    <PopupButton
                      id={id}
                      style={{ fontSize: 20 }}
                      className="my-button"
                    >
                      Become a Member
                    </PopupButton>
                  </Button>
                </VStack>
              </Box>
              <Box w={isMobileView ? "90%" : "70%"} display="flex">
                <img
                  src={
                    "https://ik.imagekit.io/thormars/Sawyer-Camp/ayisatu.jpg"
                  }
                  alt="ayisatu"
                />
              </Box>
            </HStack>
          </Center>
        </>
      </Box>
    </SharedLayout>
  );
}

export default Membership;
