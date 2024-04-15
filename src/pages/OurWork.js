import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/css/ourWork.css";
import { Carousel } from "react-responsive-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import goals from "../utils/goals";
import img from "../assets/images/teke.jpg";
import { SharedLayout } from "../components";
import { VStack, Box, Heading, Text, HStack, Image } from "@chakra-ui/react";
import useIsMobile from "../hooks/useIsMobile";

const OurWork = () => {
  const isMobileView = useIsMobile();

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
                <LazyLoadImage
                  src={img}
                  alt="photo of teke"
                  effect="blur"
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
          <Box m="0 auto" w={isMobileView ? "90%" : "70%"} mt="30px">
            <Carousel
              infiniteLoop
              autoPlay="true"
              transitionTime="1000"
              interval="5000"
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
                      opacity="0.8"
                    >
                      <VStack>
                        <Heading>{goal.title}</Heading>
                        <Text>{goal.text}</Text>
                      </VStack>
                    </Box>
                  </Box>
                );
              })}
            </Carousel>
          </Box>
        </Box>
      </Box>
    </SharedLayout>
  );
};

export default OurWork;
