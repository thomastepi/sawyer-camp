import React, { useState } from "react";
import Header from "../components/Header";
import pic1 from "../assets/images/farm-women.jpg";
import pic2 from "../assets/images/palmnuts.jpg";
import pic3 from "../assets/images/assorted-fruits.jpg";
import pic4 from "../assets/images/ayisatu.jpg";
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
  HStack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

const OurWork = () => {
  const [showCard1, setShowCard1] = useState(true);
  const [showCard2, setShowCard2] = useState(false);
  const [showCard3, setShowCard3] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

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
      <Box bg="" color="#87A922">
        <Box m="0 auto" w="70%" py="65px">
          <Center>
            <Box>
              <VStack spacing={8} px="30px">
                <Heading size="2xl">Our Strategy</Heading>
                <Text fontSize="lg" align="center">
                  We have extensive experience with various approaches to
                  sustainability in agriculture, from certification to the
                  design and implementation of customized tools for companies
                  and agencies.
                </Text>
              </VStack>
            </Box>
            {!isMobile && (
              <Box w="60%">
                <Image src={pic4} alt="assorted fruits" />
              </Box>
            )}
          </Center>
        </Box>
      </Box>
      <>
        <Box
          color="blue"
          m="0 auto"
          bg="#789461"
          py="100px"
          px={isMobile && "15px"}
        >
          <Heading color="white" fontSize="3xl" align="center">
            We focus our efforts in achieving three strategic goals
          </Heading>
        </Box>
        <Flex color="#87A922" justify="center" bg="#789461" w="100%">
          <Box w="90%" bg="white">
            <Center w="100%">
              <VStack h="fit-content" w={isMobile ? "80%" : "60%"} pt="40px">
                <ButtonGroup variant="flush">
                  <HStack spacing={10} w="100%">
                    <Button
                      onClick={handleCard1}
                      _hover={{
                        backgroundColor: "#74E291",
                        color: "white",
                        transition: "0.5s",
                      }}
                      px="30px"
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
                      px="30px"
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
                      px="30px"
                      bg={showCard3 ? "#9BCF53" : "white"}
                      color={showCard3 ? "white" : "#87A922"}
                      borderRadius="0"
                    >
                      Goal 3
                    </Button>
                  </HStack>
                </ButtonGroup>
                <Box
                  w="90%"
                  justifyContent="center"
                  alignItems="center"
                  display="block"
                >
                  {showCard1 && (
                    <Grid templateRows="repeat(2, 1fr)" gap={6} align="center">
                      <GridItem
                        w="100%"
                        h="100%"
                        py="9rem"
                        bg="blue.500"
                        backgroundImage={pic1}
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                        backgroundPosition="center"
                      ></GridItem>
                      <GridItem w="100%" h="20" bg="#789461" color="white">
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
                        py="9rem"
                        bg="blue.500"
                        backgroundImage={pic2}
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                        backgroundPosition="center"
                      ></GridItem>
                      <GridItem w="100%" h="20" bg="#789461" color="white">
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
                        py="9rem"
                        bg="blue.500"
                        backgroundImage={pic3}
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                        backgroundPosition="center"
                      ></GridItem>
                      <GridItem w="100%" h="20" bg="#789461" color="white">
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
