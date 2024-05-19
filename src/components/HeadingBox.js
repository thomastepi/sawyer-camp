import React from "react";
import { Box, Heading, Center } from "@chakra-ui/react";

const img = "https://ik.imagekit.io/thormars/Sawyer-Camp/nature.jpg";

const HeadingBox = ({ image, title }) => {
  return (
    <>
      <Box
        bgImg={image || img}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPos="center"
        color="white"
      >
        <Center py="110px">
          <Box w="90%">
            <Heading align="center" size="3xl">
              {title}
            </Heading>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default HeadingBox;
