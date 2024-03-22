import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Box,
  Text,
  Heading,
  Image,
  Button,
  HStack,
  VStack,
} from "@chakra-ui/react";
import img from "../assets/images/img_9.jpg";
import img2 from "../assets/images/palm_plantation.jpg";
import { createPath } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <Header />
      <>
        <VStack py="140px" color="#87A922">
          <Box display="block" align="center">
            <HStack w="80%">
              <Box w="50%" align="left">
                <Heading align="center" color="green">
                  Our Story
                </Heading>
                <Text fontSize="2xl" py={5}>
                  Our story began in 1989 when Mr. Tepi Emmanuel, our founder,
                  returned from the USA armed with a Master's degree in
                  Agricultural Economics from the University of Illinois.
                </Text>
                <a href="#our-story">
                  <Button colorScheme="green" variant="solid">
                    Read More
                  </Button>
                </a>
              </Box>
              <Box w="50%" h="1rem" display="flex" alignItems="center">
                <Image
                  boxSize="400px"
                  borderRadius="10px"
                  objectFit="cover"
                  src={img}
                  w="100%"
                  alt="Dan Abramov"
                />
              </Box>
            </HStack>
            <Box
              id="our-story"
              display="flex"
              justifyContent="center"
              bg="#D2E3C8"
              my="140px"
              py="70px"
            >
              <Box
                bg="#FFF"
                p="53px"
                align="left"
                w="70%"
                borderRadius="10px"
                boxShadow="10px 5px 5px green"
              >
                <Text fontSize="2xl">
                  Sawyer Camp Farmers CIG was established in 1999 as a
                  community-based organization with the objective to address
                  three major gaps that emerge from the knowledge and
                  experiences of sustainable and rural farming processes. These
                  are:
                  <Box paddingLeft="25px">
                    <ul>
                      <li>Climate</li>
                      <li>Biodiversity Loss</li>
                      <li>Rural Poverty</li>
                    </ul>
                  </Box>
                  The organization has since evolved into a union of farmers
                  working together to address these gaps through education and
                  access to resources. We cultivate sustainable practices and
                  supply a variety of high-quality cash crops to the regional
                  market.
                </Text>
              </Box>
            </Box>

            <HStack w="80%">
              <>
                <Box
                  height="fit-content"
                  style={{ clipPath: "path(var(--badge))", width: "80%" }}
                  position="relative"
                  w="50%"
                  display="flex"
                  alignItems="center"
                >
                  <Image
                    boxSize="400px"
                    borderRadius="10px"
                    objectFit="cover"
                    src={img2}
                    w="100%"
                    alt="photo of a palm plantation"
                  />
                </Box>
              </>

              <Box w="50%" align="center">
                <Heading align="center" color="green">
                  Our Mission
                </Heading>
                <Text fontSize="2xl" p={5}>
                  Our mission at Sawyer Camp is to empower local farmers with
                  sustainable agricultural practices, fostering economic growth,
                  and ensuring environmental stewardship. Through education,
                  collaboration, and access to resources, we strive to cultivate
                  thriving communities while delivering high-quality produce to
                  local and national markets.
                </Text>
              </Box>
            </HStack>
          </Box>
        </VStack>
        <Footer />
      </>
    </>
  );
};

export default AboutUs;
