import React from "react";
import { Box, Heading, Center } from "@chakra-ui/react";

const img = "https://ik.imagekit.io/thormars/Sawyer-Camp/nature.jpg";

const PageHeader = ({ image, title }) => {
  return (
    <>
      <Box
        bgImg={image || img}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPos="center"
        color="white"
        bgColor="green.200"
      >
        <Center py="150px">
          <Box w="90%">
            <Heading align="center" size="4xl">
              {title}
            </Heading>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default PageHeader;
