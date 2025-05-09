import React from "react";
import { PopupButton } from "@typeform/embed-react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Button,
  Center,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import PageHeader from "../../components/PageHeader/PageHeader";
const img = "https://ik.imagekit.io/thormars/Sawyer-Camp/corn-farm.jpg";

function Membership() {
  const isMobileView = useBreakpointValue({ base: true, md: false });
  const id = process.env.REACT_APP_TYPEFORM_ID;

  return (
    <>
      <Box color="#87A922">
        <PageHeader image={img} title="Join Us" />
        <VStack
          py="80px"
          spacing={9}
          w={isMobileView ? "90%" : "60%"}
          m="0 auto"
        >
          <Text fontSize="2xl" align="center">
            Join a thriving community of farmers committed to sustainable
            agriculture, economic empowerment, and environmental stewardship. At
            Sawyer Camp Farmers CIG, we believe that together, we can reshape
            the future of farming through shared knowledge, resources, and
            action.
          </Text>
        </VStack>
        <Center
          color="white"
          bg="#436850"
          m="0 auto"
          w="90%"
          p={!isMobileView && "30px"}
        >
          <HStack
            spacing={"10"}
            p={isMobileView && "20px"}
            flexDir={isMobileView && "column"}
          >
            <Box w="100%">
              <VStack spacing={9}>
                <Text align="center" fontSize="2xl">
                  Become a member and gain access to expert training, modern
                  farming techniques, and a supportive network that helps you
                  thrive.
                </Text>
                <Button as="div" borderRadius="0" p="25px" colorScheme="green">
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
              <Image
                boxSize="500px"
                src={"https://ik.imagekit.io/thormars/Sawyer-Camp/ayisatu.jpg"}
                alt="ayisatu"
                objectFit="contain"
                w="100%"
              />
            </Box>
          </HStack>
        </Center>
      </Box>
    </>
  );
}

export default Membership;
