import React, { useRef, useEffect, useState } from "react";
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
import useIsMobile from "../../hooks/useIsMobile";

const WhatWeDo = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const isMobileView = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasBeenVisible) {
        setHasBeenVisible(true);
        setTimeout(() => {
          setIsVisible(entry.isIntersecting);
        }, 1000);
      }
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref, hasBeenVisible]);
  return (
    <Box minHeight="100vh" bg="white" pt="70px">
      <VStack justifyContent="center" alignItems="center">
        <Box align="center">
          <VStack w="80%" color="#87A922" spacing={9}>
            <Heading color="green">
              Sustainable Farming. Thriving Communities.
            </Heading>
            <Box padding={8}>
              <Text fontSize={isMobileView ? "2xl" : "3xl"}>
                In Banga Bakundu, Cameroon, we empower local farmers with
                sustainable agriculture and modern techniques. Through education
                and access to resources, we cultivate a thriving farming
                community that produces high-quality cash crops, driving both
                economic growth and food security.
              </Text>
            </Box>
            <Box py="55px" bg="#436850" px="30px" color="white">
              <HStack flexDir={isMobileView && "column"} spacing={5} ref={ref}>
                <Box align={isMobileView ? "center" : "left"} w="90%">
                  <Text
                    fontSize="2xl"
                    opacity={isVisible ? 1 : 0}
                    transition="opacity 0.5s ease-in-out"
                  >
                    Using innovative and eco-friendly methods, we produce
                    high-quality, sustainable palm oil that nourishes our
                    communities and strengthens local economies.
                  </Text>
                  <Button
                    colorScheme="green"
                    variant="solid"
                    marginTop={5}
                    p={5}
                    opacity={isVisible ? 1 : 0}
                    transition="opacity 2s ease-in-out"
                  >
                    <Link to="/project/3">Learn More</Link>
                  </Button>
                </Box>
                <Box
                  w={isMobileView ? "100%" : "70%"}
                  display="flex"
                  alignItems="center"
                >
                  <Image
                    opacity={isVisible ? 1 : 0}
                    transition="opacity 0.5s ease-in-out"
                    boxSize="250px"
                    objectFit="cover"
                    src={
                      "https://ik.imagekit.io/thormars/Sawyer-Camp/palm-oil-bottle.jpg"
                    }
                    w="100%"
                    alt="palm oil"
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
