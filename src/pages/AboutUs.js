import React from "react";
import { FixedBg } from "../components";
import { SharedLayout } from "../components";
import {
  Box,
  Text,
  Heading,
  Button,
  HStack,
  VStack,
  Center,
} from "@chakra-ui/react";
import img3 from "../assets/images/img_8.jpg";
import useIsMobile from "../hooks/useIsMobile";

const AboutUs = () => {
  const isMobileView = useIsMobile();
  return (
    <SharedLayout>
      <Box pt="130px">
        <FixedBg image={img3} />
        <Box display="block" align="center">
          <Box bg="white">
            <Center py="100px" w={isMobileView ? "90%" : "50%"} color="green">
              <VStack>
                <Heading align="center">Our Story</Heading>
                <Text color="#87A922" fontSize="2xl" py={5}>
                  We began in 1989 when Mr. Tepi Emmanuel, our founder, returned
                  from the USA armed with a Master's degree in Agricultural
                  Economics from the University of Illinois.
                </Text>
                <a href="#our-story">
                  <Button colorScheme="green" variant="solid">
                    Read More
                  </Button>
                </a>
              </VStack>
            </Center>
          </Box>
          <Box>
            <HStack
              w={isMobileView ? "90%" : "50%"}
              color="#87A922"
              bg="white"
              p="10px"
              mt="70px"
            >
              <Box align="center">
                <Heading color="green" align="center">
                  Our Mission
                </Heading>
                <Text fontSize="2xl" p={5}>
                  Our mission at Sawyer Camp is to empower local farmers with
                  sustainable agricultural practices, fostering economic growth,
                  and ensuring environmental stewardship. Through education,
                  collaboration, and access to resources, we strive to cultivate
                  thriving communities while delivering high-quality produce to
                  customers.
                </Text>
              </Box>
            </HStack>

            <Box bg="white" bgSize="cover" bgPos="center">
              <Box
                id="our-story"
                display="flex"
                justifyContent="center"
                color="#87A922"
                mt="70px"
                py="70px"
                zIndex="1"
                w="70%"
              >
                <Box align="left" w="70%">
                  <Text fontSize={isMobileView ? "sm" : "2xl"}>
                    Sawyer Camp Farmers CIG was established in 1992 as a
                    community-based organization with the objective to address
                    three major gaps that emerge from the knowledge and
                    experiences of sustainable and rural farming processes.
                    These are:
                    <Box pl="25px">
                      <ul>
                        <li>Climate</li>
                        <li>Biodiversity Loss</li>
                        <li>Rural Poverty</li>
                      </ul>
                    </Box>
                    The organization has since evolved into a union of farmers
                    working together to address these gaps through education and
                    access to resources. We cultivate sustainable practices and
                    supply a variety of high-quality cash crops nationwide.
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </SharedLayout>
  );
};

export default AboutUs;
