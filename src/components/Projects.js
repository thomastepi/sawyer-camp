import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, HStack, VStack, Text, Image, Button } from "@chakra-ui/react";
import img from "../assets/images/group.jpg";
import SharedLayout from "./SharedLayout";
import useIsMobile from "../hooks/useIsMobile";

const Projects = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobileView = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return (
    <SharedLayout
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg="white"
    >
      <Box align="center">
        <VStack w="80%" color="#87A922">
          <Box padding={8}>
            <Text fontSize={isMobileView ? "2xl" : "4xl"}>
              We are a community-driven union empowering local farmers in the
              Banga Bakundu area of Cameroon. Through education and access to
              resources, we cultivate sustainable practices and supply a variety
              of high-quality cash crops to the regional market.
            </Text>
          </Box>
          <Box py="55px" bg="#436850" px="30px" color="white">
            <HStack
              flexDir={isMobileView && "column"}
              spacing={5}
              ref={ref}
              opacity={isVisible ? 1 : 0}
              transition="opacity 4s ease-in-out"
            >
              <Box align={isMobileView ? "center" : "left"} w="90%">
                <Text fontSize="2xl">
                  We employ modern techniques to process ripe palm fruits,
                  yielding top-quality palm oil supplied to both local and
                  national markets.
                </Text>
                <Button colorScheme="green" variant="solid" marginTop={5} p={5}>
                  <Link to="/about-us">Learn More</Link>
                </Button>
              </Box>
              <Box
                w={isMobileView ? "100%" : "70%"}
                display="flex"
                alignItems="center"
              >
                <Image
                  boxSize="250px"
                  objectFit="cover"
                  src={img}
                  w="100%"
                  alt="photo of a group of people working in a field"
                />
              </Box>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </SharedLayout>
  );
};

export default Projects;
