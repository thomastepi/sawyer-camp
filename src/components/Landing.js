import React, { useState, useEffect } from "react";
import { Heading, Box, Button, HStack, VStack, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import img from "../assets/images/rubber_trees.webp";
import img1 from "../assets/images/cow.jpg";
import img2 from "../assets/images/pines.jpg";
import img3 from "../assets/images/fowl.jpg";
import useIsMobile from "../hooks/useIsMobile";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const imgURLs = [img, img1, img2, img3];

export const Landing = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [showItems, setShowItems] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setTimeout(() => {
      setShowItems(true);
    }, 2000);
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
    }, 9000);

    return () => clearInterval(intervalId);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: imgURLs[currentImgIndex],
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
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
        <Center>
          <Box
            align="center"
            justifyContent="center"
            w="70%"
            position="absolute"
            bottom="9"
          >
            <MotionBox
              initial={{ opacity: 0, x: 90 }}
              animate={{
                opacity: showItems ? 1 : 0,
                x: showItems ? 0 : 90,
              }}
              transition={{ duration: 0.9 }}
            >
              {showItems && (
                <>
                  <Box fontSize="3xl" py={10}>
                    <Heading fontSize={!isMobile && "7xl"}>
                      Sawyer Camp Farmers
                    </Heading>
                    <Heading>Common Initiative Group</Heading>
                  </Box>
                </>
              )}
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, x: -90 }}
              animate={{
                opacity: showItems ? 1 : 0,
                x: showItems ? 0 : -90,
              }}
              transition={{ duration: 0.9 }}
            >
              {showItems && (
                <>
                  <Box display="flex" justifyContent="center" py={6}>
                    <HStack spacing={6} color="white">
                      <Button p={7} colorScheme="green" variant="solid">
                        <Link to="/membership">Become a Member</Link>
                      </Button>
                    </HStack>
                  </Box>
                </>
              )}
            </MotionBox>
          </Box>
        </Center>
      </VStack>
    </>
  );
};

export default Landing;
