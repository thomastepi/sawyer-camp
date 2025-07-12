import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  HStack,
  VStack,
  Text,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";

const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionImage = motion(Image);

const WhatWeDo = () => {
  const ref = useRef(null);
  const isMobileView = useIsMobile();
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <Box minHeight="100vh" bg="white" pt="70px">
      <VStack justifyContent="center" alignItems="center">
        <Box align="center">
          <VStack w={isMobileView ? "90%" : "80%"} color="#87A922" spacing={9}>
            <Heading color="green">
              Sustainable Farming. Thriving Communities.
            </Heading>
            <Box paddingY={8}>
              <Text fontSize={isMobileView ? "2xl" : "3xl"}>
                In Banga Bakundu, Cameroon, we empower local farmers with
                sustainable agriculture and modern techniques. Through education
                and access to resources, we cultivate a thriving farming
                community that produces high-quality cash crops, driving both
                economic growth and food security.
              </Text>
            </Box>

            <Box
              py="55px"
              bg="#436850"
              px={!isMobileView && "30px"}
              color="white"
              ref={ref}
            >
              <HStack flexDir={isMobileView && "column"} spacing={5}>
                <Box align={isMobileView ? "center" : "left"} w="90%">
                  <MotionText
                    fontSize="2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    Using innovative and eco-friendly methods, we produce
                    high-quality, sustainable palm oil that nourishes our
                    communities and strengthens local economies.
                  </MotionText>

                  <MotionButton
                    colorScheme="green"
                    variant="solid"
                    marginTop={5}
                    p={5}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <Link to="/project/3">Learn More</Link>
                  </MotionButton>
                </Box>

                <Box
                  w={isMobileView ? "100%" : "70%"}
                  display="flex"
                  alignItems="center"
                >
                  <MotionImage
                    src="https://ik.imagekit.io/thormars/Sawyer-Camp/fri-emeline.jpg"
                    alt="palm oil"
                    boxSize="250px"
                    objectFit="cover"
                    w="100%"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  />
                </Box>
              </HStack>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default WhatWeDo;
