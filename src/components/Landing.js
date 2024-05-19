import React, { useState, useEffect } from "react";
import { Heading, Box, Button, VStack, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const url1 = "https://ik.imagekit.io/thormars/Sawyer-Camp/rubber_trees.jpg";
const url2 = "https://ik.imagekit.io/thormars/Sawyer-Camp/cow.jpg";
const url3 = "https://ik.imagekit.io/thormars/Sawyer-Camp/pines.jpg";
const url4 = "https://ik.imagekit.io/thormars/Sawyer-Camp/fowl.jpg";
const imgURLs = [url1, url2, url3, url4];

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

  return (
    <>
      <VStack
        h="80vh"
        alignItems="center"
        backgroundColor="grey.900"
        color="white"
        position="relative"
        overflow="hidden"
      >
        {imgURLs.map((url, index) => (
          <Box
            key={index}
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            backgroundImage={`url(${url})`}
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            transition="opacity 3s ease-in-out"
            opacity={currentImgIndex === index ? 1 : 0}
          />
        ))}
        <Center>
          <Box
            align="center"
            justifyContent="center"
            w="70%"
            position="absolute"
            bottom="9"
          >
            <MotionBox
              initial={{ opacity: 0, y: -90 }}
              animate={{
                opacity: showItems ? 1 : 0,
                y: showItems ? 0 : -90,
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
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: showItems ? 1 : 0,
                y: showItems ? 0 : 40,
              }}
              transition={{ duration: 0.9 }}
            >
              {showItems && (
                <>
                  <Box py={6}>
                    <Button p={7} colorScheme="green" variant="solid">
                      <Link to="/membership">Become a Member</Link>
                    </Button>
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
