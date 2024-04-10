import React, { useState } from "react";
import pic1 from "../assets/images/farm-women.jpg";
import pic2 from "../assets/images/palmnuts.jpg";
import pic3 from "../assets/images/assorted-fruits.jpg";
import pic4 from "../assets/images/teke.jpg";
import { SharedLayout } from "../components";
import {
  Button,
  ButtonGroup,
  Center,
  Flex,
  VStack,
  Box,
  Heading,
  Text,
  HStack,
  Image,
} from "@chakra-ui/react";
import useIsMobile from "../hooks/useIsMobile";

const OurWork = () => {
  const [showCard1, setShowCard1] = useState(true);
  const [showCard2, setShowCard2] = useState(false);
  const [showCard3, setShowCard3] = useState(false);
  const isMobileView = useIsMobile();

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
    <SharedLayout>
      <Box pt="100px">
        <Box color="#87A922">
          <Box m="0 auto" w="70%" py="65px">
            <HStack
              spacing={isMobileView && "14"}
              flexDir={isMobileView && "column"}
            >
              <Box>
                <VStack spacing={8} px="30px">
                  <Heading size="2xl" align="center" color='green'>
                    Building a Network of Sustainable Farmers
                  </Heading>
                  <Text fontSize="2xl" align="center">
                    Our strategy centers on fostering a thriving community of
                    smallholder farmers through resource provision, education,
                    and collaboration.
                  </Text>
                </VStack>
              </Box>
              <Box w="80%">
                <Image src={pic4} alt="photo of teke" />
              </Box>
            </HStack>
          </Box>
        </Box>
        <Box>
          <Box
            color="blue"
            m="0 auto"
            bg="#789461"
            py="100px"
            px={isMobileView && "15px"}
          >
            <Heading color="white" fontSize="3xl" align="center">
              We focus our efforts in achieving three key goals
            </Heading>
          </Box>
          <Flex
            color="#87A922"
            justify="center"
            bg="#789461"
            w="100%"
            mb="70px"
          >
            <Box w="100%" bg="white">
              <Center w="100%">
                <VStack
                  h="fit-content"
                  w={isMobileView ? "80%" : "60%"}
                  pt="40px"
                >
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
                      <VStack spacing={0}>
                        <Box
                          w="100%"
                          h="60vh"
                          bg="blue.500"
                          backgroundImage={pic1}
                          backgroundSize="cover"
                          backgroundRepeat="no-repeat"
                          backgroundPosition="center"
                        ></Box>
                        <VStack w="100%" bg="#789461" color="white" py="40px">
                          <Heading align="center">
                            Empower Farmers, Strengthen Communities
                          </Heading>
                          <Text
                            fontSize={isMobileView ? "md" : "2xl"}
                            align="center"
                          >
                            We aim to expand and strengthen Sawyer Camp Farmers
                            CIG as a national collaborative network, equipping
                            smallholder farmers with the resources, knowledge,
                            and support they need to thrive. By working
                            together, we can ensure a sustainable future for
                            farmers, their families, and our communities.
                          </Text>
                        </VStack>
                      </VStack>
                    )}
                    {showCard2 && (
                      <VStack spacing={0}>
                        <Box
                          w="100%"
                          h="60vh"
                          bg="blue.500"
                          backgroundImage={pic2}
                          backgroundSize="cover"
                          backgroundRepeat="no-repeat"
                          backgroundPosition="center"
                        ></Box>
                        <VStack w="100%" bg="#789461" color="white" py="40px">
                          <Heading align="center">
                            Cultivate Sustainable Practices, Nurture the
                            Environment
                          </Heading>
                          <Text
                            fontSize={isMobileView ? "md" : "2xl"}
                            align="center"
                          >
                            We are committed to catalyzing credible
                            sustainability and climate commitments by promoting
                            best practices and nature-based solutions. Through
                            education, training, and partnerships, we empower
                            farmers to adopt sustainable practices that protect
                            the environment and ensure long-term food security.
                          </Text>
                        </VStack>
                      </VStack>
                    )}
                    {showCard3 && (
                      <VStack spacing={0}>
                        <Box
                          w="100%"
                          h="60vh"
                          bg="blue.500"
                          backgroundImage={pic3}
                          backgroundSize="cover"
                          backgroundRepeat="no-repeat"
                          backgroundPosition="center"
                        ></Box>
                        <VStack w="100%" bg="#789461" color="white" py="40px">
                          <Heading align="center">
                            Innovate for Success, Scale for Impact
                          </Heading>
                          <Text
                            fontSize={isMobileView ? "md" : "2xl"}
                            align="center"
                          >
                            We believe in improving rural livelihoods through
                            innovative, scalable, and locally-adapted
                            technological solutions in agriculture. Our goal is
                            to identify and implement practical solutions that
                            address the specific needs of our farmers, enhancing
                            their productivity and resilience.
                          </Text>
                        </VStack>
                      </VStack>
                    )}
                  </Box>
                </VStack>
              </Center>
            </Box>
          </Flex>
        </Box>
      </Box>
    </SharedLayout>
  );
};

export default OurWork;
