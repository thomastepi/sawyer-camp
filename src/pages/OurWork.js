import React, { useState } from "react";
import Header from "../components/Header";
import pic1 from "../assets/images/img_5.jpg";
import pic2 from "../assets/images/img_6.jpg";
import pic3 from "../assets/images/img_7.jpg";
import { Footer } from "../components";
import {
  Button,
  ButtonGroup,
  Center,
  Flex,
  VStack,
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const OurWork = () => {
  const [showCard1, setShowCard1] = useState(true);
  const [showCard2, setShowCard2] = useState(false);
  const [showCard3, setShowCard3] = useState(false);

  const handleCard1 = () => {
    setShowCard1(true);
    setShowCard2(false);
    setShowCard3(false);
  };
  const handleCard2 = () => {
    setShowCard1(false);
    setShowCard2(true);
    setShowCard3(false);
  };
  const handleCard3 = () => {
    setShowCard1(false);
    setShowCard2(false);
    setShowCard3(true);
  };
  return (
    <>
      <Header />
      <>
        <Flex color="#87A922" justify="center" h="80vh" bg="#FFF" w="100%">
          <Box w="90%">
            <Flex justify="space-between" w="100%">
              <Center borderRight="solid 2px green" w="45%">
                <Heading color="green" fontSize="3xl" align="center">
                  We focus our efforts in achieving three strategic goals
                </Heading>
              </Center>
              <VStack h="fit-content" w="45%" pt="10px">
                <ButtonGroup variant="flush" px="90px">
                  <Button
                    onClick={handleCard1}
                    _hover={{
                      backgroundColor: "#74E291",
                      color: "white",
                      transition: "0.5s",
                    }}
                    px="50px"
                    bg={showCard1 ? "green" : "white"}
                    color={showCard1 ? "white" : "#87A922"}
                  >
                    Goal 1
                  </Button>
                  <Button
                    onClick={handleCard2}
                    _hover={{
                      backgroundColor: "#74E291",
                      color: "white",
                      transition: "0.5s",
                    }}
                    px="50px"
                    bg={showCard2 ? "green" : "white"}
                    color={showCard2 ? "white" : "#87A922"}
                  >
                    Goal 2
                  </Button>
                  <Button
                    onClick={handleCard3}
                    _hover={{
                      backgroundColor: "#74E291",
                      color: "white",
                      transition: "0.5s",
                    }}
                    px="50px"
                    bg={showCard3 ? "green" : "white"}
                    color={showCard3 ? "white" : "#87A922"}
                  >
                    Goal 3
                  </Button>
                </ButtonGroup>
                <Box
                  h="30rem"
                  w="90%"
                  justifyContent="center"
                  alignItems="center"
                  display="block"
                >
                  {showCard1 && (
                    <Grid templateRows="repeat(2, 1fr)" gap={6} align="center">
                      <GridItem
                        borderRadius="10px"
                        w="100%"
                        h="22rem"
                        bg="blue.500"
                        backgroundImage={pic1}
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                        backgroundPosition="center"
                      ></GridItem>
                      <GridItem w="100%" h="20" bg="#EEE" borderRadius="10px">
                        <Text as="b">
                          Expand and strengthen Sawyer Camp Farmers CIG as a
                          global collaborative network of organizations that
                          secures a sustainable future for people, food, and
                          nature.
                        </Text>
                      </GridItem>
                    </Grid>
                  )}
                  {showCard2 && (
                    <Grid templateRows="repeat(2, 1fr)" gap={6} align="center">
                      <GridItem
                        borderRadius="10px"
                        w="100%"
                        h="22rem"
                        bg="blue.500"
                        backgroundImage={pic2}
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                        backgroundPosition="center"
                      ></GridItem>
                      <GridItem w="100%" h="20" bg="#EEE" borderRadius="10px">
                        <Text as="b">
                          Catalyze credible sustainability and climate
                          commitments through an expanded set of nature-based
                          tools, partners, and delivery channels.
                        </Text>
                      </GridItem>
                    </Grid>
                  )}
                  {showCard3 && (
                    <Grid templateRows="repeat(2, 1fr)" gap={6} align="center">
                      <GridItem
                        borderRadius="10px"
                        w="100%"
                        h="22rem"
                        bg="blue.500"
                        backgroundImage={pic3}
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                        backgroundPosition="center"
                      ></GridItem>
                      <GridItem w="100%" h="20" bg="#EEE" borderRadius="10px">
                        <Text as="b">
                          Improve rural livelihoods through innovative,
                          scalable, and locally adapted technological solutions
                          in agriculture.
                        </Text>
                      </GridItem>
                    </Grid>
                  )}
                </Box>
              </VStack>
            </Flex>
          </Box>
        </Flex>
      </>
      <Footer />
    </>
  );
};

export default OurWork;
