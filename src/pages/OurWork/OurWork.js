import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../assets/css/ourWork.css";
import { Carousel } from "react-responsive-carousel";
import goals from "../../utils/goals";
import MainLayout from "../../layouts/MainLayout";
import PageHeader from "../../components/PageHeader/PageHeader";
import { motion } from "framer-motion";
import {
  VStack,
  Box,
  Heading,
  Text,
  HStack,
  Image,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  faArrowCircleUp,
  faArrowAltCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIsMobile from "../../hooks/useIsMobile";
import { Link } from "react-router-dom";

const MotionBox = motion(Box);

const OurWork = () => {
  const isMobile = useBreakpointValue({ base: true, md: false, lg: false });
  const isMobileView = useIsMobile();
  const [showText, setShowText] = useState(false);

  return (
    <MainLayout>
      <PageHeader
        title="Our Work"
        image="https://ik.imagekit.io/thormars/Sawyer-Camp/farm-girls.jpg"
      />
      <Box>
        <Box color="#87A922">
          <Box m="0 auto" w={isMobileView ? "95%" : "70%"} py="65px">
            <HStack
              spacing={isMobileView && "14"}
              flexDir={isMobileView && "column"}
            >
              <Box>
                <VStack spacing={8} px="30px">
                  <Heading size="2xl" align="center" color="green">
                    Building a Network of Sustainable Farmers
                  </Heading>
                  <Text fontSize="2xl" align="center">
                    Our strategy centers on fostering a thriving community of
                    smallholder farmers through resource provision, education,
                    and collaboration.
                  </Text>
                </VStack>
              </Box>
              <Box w="70%">
                <img
                  src={"https://ik.imagekit.io/thormars/Sawyer-Camp/teke.jpg"}
                  alt="teke"
                  width="100%"
                />
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
          <Box m="0 auto" w={isMobileView ? "90%" : "70%"} my="30px">
            <Carousel
              infiniteLoop
              autoPlay="true"
              transitionTime="1000"
              interval="9000"
              showThumbs={false}
              showStatus={false}
            >
              {goals.map((goal) => {
                return (
                  <Box w="100%" pos="relative" key={goal.id} color="white">
                    <Image src={goal.image} alt={goal.alt} zIndex="-1" />
                    <Box
                      pos="absolute"
                      p="10px"
                      zIndex="1"
                      bgColor="black"
                      bottom="30"
                      left="30"
                      right="30"
                      opacity={0.8}
                    >
                      <VStack spacing={5}>
                        <Heading size="md">{goal.title}</Heading>
                        <Text fontSize="lg">{goal.shortText}</Text>
                        {!isMobile && (
                          <>
                            <Button
                              onClick={() => {
                                setShowText(!showText);
                              }}
                              rightIcon={
                                <FontAwesomeIcon
                                  icon={
                                    showText
                                      ? faArrowCircleUp
                                      : faArrowAltCircleDown
                                  }
                                />
                              }
                            >
                              {showText ? "Show Less" : "Show More"}
                            </Button>
                            <MotionBox
                              initial={{ opacity: 0, y: 90 }}
                              animate={{
                                opacity: showText ? 1 : 0,
                                y: showText ? 0 : 90,
                              }}
                              transition={{ duration: 0.9 }}
                            >
                              {showText && (
                                <Text fontSize={isMobileView && "sm"}>
                                  {goal.text}
                                </Text>
                              )}
                            </MotionBox>
                          </>
                        )}
                      </VStack>
                    </Box>
                  </Box>
                );
              })}
            </Carousel>
          </Box>
        </Box>
        <Box bg="gray.100" py="50px">
          <Heading color="green" fontSize="3xl" align="center" mb="20px">
            Get Involved
          </Heading>
          <Text align="center" fontSize="xl" mb="10px">
            Join us in our mission to empower farmers and build sustainable
            communities.
          </Text>
          <Box
            display="flex"
            justifyContent="center"
            flexDir={isMobile && "column"}
          >
            <Button
              borderRadius={0}
              colorScheme="green"
              size="lg"
              m="10px"
              as={Link}
              to="/donate"
            >
              Donate
            </Button>
            <Button
              borderRadius={0}
              colorScheme="green"
              size="lg"
              m="10px"
              as={Link}
              to="/volunteer"
            >
              Volunteer
            </Button>
            <Button
              colorScheme="green"
              borderRadius={0}
              size="lg"
              m="10px"
              as={Link}
              to="/contact-us"
            >
              Partner with Us
            </Button>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default OurWork;
