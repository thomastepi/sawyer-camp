import React from "react";
import img from "../assets/images/green-leaf.jpg";
import {
  Box,
  Text,
  Center,
  Heading,
  Button,
  Input,
  VStack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const Subscribe = ({ image, heading, headingText }) => {
  const boxStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundImage: image,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: "0.8",
    zIndex: "-1",
  };
  return (
    <Center h="100vh" position="relative" overflow="hidden">
      <Box {...boxStyle} />
      <Center zIndex="1">
        <Box spacing={9}>
          <Box
            align="center"
            px="150px"
            py="40px"
            color="green"
            w="100%"
            bg="#D2E3C8"
            borderRadius="10px"
          >
            <VStack spacing={10}>
              <Heading>{heading}</Heading>
              <Text fontSize="2xl">{headingText}</Text>
              <FormControl id="subscribe" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  _focus={{ border: "solid 2px green" }}
                  variant="filled"
                  type="email"
                />
                <FormLabel>First Name</FormLabel>
                <Input
                  _focus={{ border: "solid 2px green" }}
                  variant="filled"
                  type="text"
                />
                <FormLabel>Last Name</FormLabel>
                <Input
                  _focus={{ border: "solid 2px green" }}
                  variant="filled"
                  type="text"
                />
                <FormLabel>Company</FormLabel>
                <Input
                  _focus={{ border: "solid 2px green" }}
                  variant="filled"
                  type="text"
                />
                <Button
                  colorScheme="green"
                  variant="solid"
                  w="full"
                  marginTop="30px"
                >
                  Subscribe
                </Button>
              </FormControl>
            </VStack>
          </Box>
        </Box>
      </Center>
    </Center>
  );
};

export default Subscribe;
