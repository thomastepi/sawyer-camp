import React, { useState, useEffect } from "react";
import { Heading, Box, Button, HStack, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import img from "../assets/images/coffee-seed.jpg";
import img2 from "../assets/images/rubber_trees.webp";
import img3 from "../assets/images/plantain_bunch.webp";
import img4 from "../assets/images/seedling.webp";
import useIsMobile from "../hooks/useIsMobile";

const imgURLs = [img, img2, img3, img4];

export const Landing = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const preloadLinks = imgURLs.map((imageUrl) => {
      const preloadLink = document.createElement("link");
      preloadLink.rel = "preload";
      preloadLink.as = "image";
      preloadLink.href = imageUrl;
      preloadLink.fetchpriority = "high";
      return preloadLink;
    });

    preloadLinks.forEach((link) => document.head.appendChild(link));

    const intervalId = setInterval(() => {
      setCurrentImgIndex((prevIndex) =>
        prevIndex === imgURLs.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: imgURLs[currentImgIndex],
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    transition: "background-image 3s ease-in-out",
  };
  return (
    <>
      <VStack
        h="100vh"
        alignItems="center"
        backgroundColor="grey.900"
        color="white"
        {...backgroundImageStyle}
        position="relative"
      >
        <Box
          align="center"
          justifyContent="center"
          w="70%"
          position="absolute"
          bottom="9"
        >
          <Box fontSize="3xl" py={10}>
            <Heading fontSize={!isMobile && "7xl"}>Sawyer Camp Farmers</Heading>
            <Heading>Common Initiative Group</Heading>
          </Box>
          <Box display="flex" justifyContent="center" py={6}>
            <HStack spacing={6} color="white">
              <Button p={7} colorScheme="green" variant="solid">
                <Link to="/membership">Become a Member</Link>
              </Button>
            </HStack>
          </Box>
        </Box>
      </VStack>
    </>
  );
};

export default Landing;
