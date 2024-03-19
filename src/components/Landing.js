import React, { useState, useEffect } from "react";
import SharedLayout from "../pages/SharedLayout";
import { Heading, Box, Text, Button, HStack } from "@chakra-ui/react";
import Header from "./Header";
import img from "../assets/images/img_8.jpg";
import img2 from "../assets/images/rubber_trees.jpg";
import img3 from "../assets/images/plantain_bunch.jpg";

const imgURLs = [img, img2, img3];

export const Landing = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
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
    transition: "background-image 1s ease-in-out",
  };
  return (
    <>
      <Header />
      <SharedLayout
        minHeight="80vh"
        alignItems="center"
        backgroundColor="#2A4365"
        color="white"
        {...backgroundImageStyle}
      >
        <Box w="70%">
          <Box py={10}>
            <Heading as="h1">Sawyer Camp Farmers</Heading>
            <Heading as="h4">Common Initiative Group</Heading>
          </Box>
          <Box w="50%">
            <Text fontSize={20} as="p">
              We are a group of farmers in the Sawyer Camp area of Cameroon. We
              are dedicated to sustainable farming practices and the promotion
              of environmental conservation.
            </Text>
          </Box>
          <Box py={10}>
            <HStack spacing={6} color="white">
              <Button p={7} colorScheme="green" variant="solid">
                Learn More
              </Button>
              <Button p={7} colorScheme="whiteAlpha">
                Become a Member
              </Button>
            </HStack>
          </Box>
        </Box>
      </SharedLayout>
    </>
  );
};

export default Landing;
