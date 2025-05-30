import React, { useState, useEffect } from "react";
import { Heading, Box, Button, VStack, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import imgURLs from "../../utils/crossfadeImgUrl";
import "./heroSection.css";

const MotionBox = motion(Box);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.8 } },
};

export const HeroSection = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowItems(true), 1000);

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
    <VStack
      h="80vh"
      alignItems="center"
      backgroundColor="gray.900"
      color="white"
      position="relative"
      overflow="hidden"
    >
      <Box position="absolute" top="0" left="0" right="0" bottom="0" zIndex={0}>
        {imgURLs.map((url, index) => (
          <motion.div
            key={index}
            className="background-fade"
            style={{
              backgroundImage: `url(${url})`,
              opacity: currentImgIndex === index ? 1 : 0,
              transition: "opacity 1.2s ease-in-out",
              transform: currentImgIndex === index ? "scale(1.05)" : "scale(1)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          />
        ))}
      </Box>

      <Center zIndex={1} w="100%">
        <Box
          align="center"
          justifyContent="center"
          w="70%"
          position="absolute"
          bottom="9"
        >
          <AnimatePresence>
            {showItems && (
              <MotionBox
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <MotionBox variants={itemVariants}>
                  <Box py={10}>
                    <Heading fontSize={{ base: "5xl", md: "7xl", lg: "8xl" }}>
                      Sawyer Camp Farmers
                    </Heading>
                    <Heading>Common Initiative Group</Heading>
                    <Heading
                      mt="8px"
                      fontSize={{ base: "2xl", md: "3xl" }}
                      color="whiteAlpha.900"
                    >
                      (SCF-CIG)
                    </Heading>
                  </Box>
                </MotionBox>

                <MotionBox variants={itemVariants}>
                  <Box py={6}>
                    <Button p={7} colorScheme="green" variant="solid">
                      <Link to="/membership">Become a Member</Link>
                    </Button>
                  </Box>
                </MotionBox>
              </MotionBox>
            )}
          </AnimatePresence>
        </Box>
      </Center>
    </VStack>
  );
};

export default HeroSection;
