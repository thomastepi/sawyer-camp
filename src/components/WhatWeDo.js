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
import useIsMobile from "../hooks/useIsMobile";

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
            <Heading color="green">What We Do</Heading>
            <Box padding={8}>
              <Text fontSize={isMobileView ? "2xl" : "4xl"}>
                Empowering local farmers in Banga Bakundu, Cameroon, our
                community-driven union cultivates sustainable practices and
                supplies the region with high-quality cash crops. We achieve
                this through education and resource access.
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
                    Harnessing modern methods, we transform ripe palm fruits
                    into exceptional palm oil, nourishing both our communities
                    and the nation.
                  </Text>
                  <Button
                    colorScheme="green"
                    variant="solid"
                    marginTop={5}
                    p={5}
                    opacity={isVisible ? 1 : 0}
                    transition="opacity 2s ease-in-out"
                  >
                    <Link to="/project/2">Learn More</Link>
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
                    src={"https://ik.imagekit.io/thormars/Sawyer-Camp/palm-tree.jpg"}
                    w="100%"
                    alt="photo of palm tree"
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
