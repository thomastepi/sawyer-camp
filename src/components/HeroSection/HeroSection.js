import React, { useState, useEffect } from "react";
import { Heading, Box, Button, VStack, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";
import "./heroSection.css";

const MotionBox = motion(Box);

const imgURLs = [
  "https://ik.imagekit.io/thormars/Sawyer-Camp/rubber_trees.jpg",
  "https://ik.imagekit.io/thormars/Sawyer-Camp/cow.jpg",
  "https://ik.imagekit.io/thormars/Sawyer-Camp/pines.jpg",
  "https://ik.imagekit.io/thormars/Sawyer-Camp/fowl.jpg",
];

export const HeroSection = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [showItems, setShowItems] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setTimeout(() => setShowItems(true), 2000);

    imgURLs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const intervalId = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % imgURLs.length);
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
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          overflow="hidden"
        >
          {imgURLs.map((url, index) => (
            <Box
              key={index}
              className="background-fade"
              style={{
                backgroundImage: `url(${url})`,
                opacity: currentImgIndex === index ? 1 : 0,
              }}
            />
          ))}
        </Box>

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

export default HeroSection;
