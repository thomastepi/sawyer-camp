import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FixedBg } from "../components";
import {
  Box,
  Text,
  Heading,
  Button,
  HStack,
  VStack,
  Center,
} from "@chakra-ui/react";
import img3 from "../assets/images/sky.jpg";

const AboutUs = () => {
  return (
    <>
      <Header />
      <Box>
        <FixedBg image={img3} />
        <VStack py="100px" color="#87A922">
          <Box display="block" align="center">
            <Center w='50%' color='green' bg='white' p='10px'>
              <VStack>
                <Heading align="center">Our Story</Heading>
                <Text  color="#87A922" fontSize="2xl" py={5}>
                  We began in 1989 when Mr. Tepi Emmanuel, our founder,
                  returned from the USA armed with a Master's degree in
                  Agricultural Economics from the University of Illinois.
                </Text>
                <a href="#our-story">
                  <Button colorScheme="green" variant="solid">
                    Read More
                  </Button>
                </a>
              </VStack>
            </Center>
            <Box>
              <Box bgImage={img3} bgSize="cover" bgPos="center">
                <Box
                  id="our-story"
                  display="flex"
                  justifyContent="center"
                  bg="#D2E3C8"
                  my="140px"
                  py="70px"
                  zIndex="1"
                >
                  <>
                    <Box
                      bg="#FFF"
                      p="53px"
                      align="left"
                      w="70%"
                      boxShadow="3px 3px 3px white"
                    >
                      <Text fontSize="2xl">
                        Sawyer Camp Farmers CIG was established in 1999 as a
                        community-based organization with the objective to
                        address three major gaps that emerge from the knowledge
                        and experiences of sustainable and rural farming
                        processes. These are:
                        <Box paddingLeft="25px">
                          <ul>
                            <li>Climate</li>
                            <li>Biodiversity Loss</li>
                            <li>Rural Poverty</li>
                          </ul>
                        </Box>
                        The organization has since evolved into a union of
                        farmers working together to address these gaps through
                        education and access to resources. We cultivate
                        sustainable practices and supply a variety of
                        high-quality cash crops to the regional market.
                      </Text>
                    </Box>
                  </>
                </Box>
              </Box>
            </Box>

            <HStack w="50%" color="#87A922" bg='white' p='10px'>
              <></>

              <Box align="center">
                <Heading color="green" align="center">Our Mission</Heading>
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
      </Box>
    </>
  );
};

export default AboutUs;
