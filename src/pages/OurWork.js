import React, { useState } from "react";
import Header from "../components/Header";
import pic1 from "../assets/images/farm-women.jpg";
import pic2 from "../assets/images/palmnuts.jpg";
import pic3 from "../assets/images/assorted-fruits.jpg";
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
        <Flex color="#87A922" justify="center" h="80vh" bg="#436850" w="100%">
          <Box w="90%" bg="white" h="50rem">
            <Center justify="space-between" w="100%">
              <Center w="40%">
                <Heading color="green" fontSize="3xl" align="center">
                  We focus our efforts in achieving three strategic goals
                </Heading>
              </Center>
              <VStack h="fit-content" w="60%" pt="10px">
                <ButtonGroup variant="flush" px="90px">
                  <Button
                    onClick={handleCard1}
                    _hover={{
                      backgroundColor: "#74E291",
                      color: "white",
                      transition: "0.5s",
                    }}
                    px="50px"
                    bg={showCard1 ? "#9BCF53" : "white"}
                    color={showCard1 ? "white" : "#87A922"}
                    borderRadius="0"
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
                    bg={showCard2 ? "#9BCF53" : "white"}
                    color={showCard2 ? "white" : "#87A922"}
                    borderRadius="0"
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
                    bg={showCard3 ? "#9BCF53" : "white"}
                    color={showCard3 ? "white" : "#87A922"}
                    borderRadius="0"
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
                        w="100%"
                        h="22rem"
                        bg="blue.500"
                        backgroundImage={pic1}
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                        backgroundPosition="center"
                      ></GridItem>
                      <GridItem w="100%" h="20" bg="#436850" color="white">
                        <Text fontSize="lg">
                          Expand and strengthen Sawyer Camp Farmers CIG as a
                          national collaborative network of organizations that
                          secures a sustainable future for people, food, and
                          nature.
                        </Text>
                      </GridItem>
                    </Grid>
                  )}
                  {showCard2 && (
                    <Grid templateRows="repeat(2, 1fr)" gap={6} align="center">
                      <GridItem
                        w="100%"
                        h="22rem"
                        bg="blue.500"
                        backgroundImage={pic2}
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                        backgroundPosition="center"
                      ></GridItem>
                      <GridItem w="100%" h="20" bg="#436850" color="white">
                        <Text fontSize="lg">
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
                        w="100%"
                        h="22rem"
                        bg="blue.500"
                        backgroundImage={pic3}
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                        backgroundPosition="center"
                      ></GridItem>
                      <GridItem w="100%" h="20" bg="#436850" color="white">
                        <Text fontSize="lg">
                          Improve rural livelihoods through innovative,
                          scalable, and locally adapted technological solutions
                          in agriculture.
                        </Text>
                      </GridItem>
                    </Grid>
                  )}
                </Box>
              </VStack>
            </Center>
          </Box>
        </Flex>
      </>
      <Footer />
    </>
  );
};

export default OurWork;
