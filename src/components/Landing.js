import React, { useState, useEffect } from "react";
import SharedLayout from "../pages/SharedLayout";
import { Heading, Box, Text, Button, HStack } from "@chakra-ui/react";
import Header from "./Header";
import { Link } from "react-router-dom";
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
            <Heading fontSize="6xl">Sawyer Camp Farmers</Heading>
            <Heading>Common Initiative Group</Heading>
          </Box>
          <Box display="flex" justifyContent="center" py={6}>
            <HStack spacing={6} color="white">
              <Link to="/about-us">
                <Button p={7} colorScheme="green" variant="solid">
                  <Link to='/blog'>Subscribe</Link>
                </Button>
              </Link>
            </HStack>
          </Box>
        </Box>
      </SharedLayout>
    </>
  );
};

export default Landing;
