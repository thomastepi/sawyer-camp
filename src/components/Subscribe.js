import React from "react";
import { FixedBg } from "../components";
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
  return (
    <Center h="100vh">
      <FixedBg image={image} />
      <Box />
      <Center zIndex="1">
        <Box spacing={9}>
          <Box
            align="center"
            px="100px"
            py="40px"
            color="green"
            w="100%"
            bg="#D2E3C8"
          >
            <VStack spacing={10}>
              <Heading>{heading}</Heading>
              <Text fontSize="2xl">{headingText}</Text>
              <Box w="100%">
                <VStack spacing={4}>
                  <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Input
                      borderRadius="0"
                      border="none"
                      borderBottom="solid green 2px"
                      type="email"
                      _hover={{ border: "solid green 2px" }}
                      _focus={{ border: "solid green 1px" }}
                      focusBorderColor="green"
                    />
                  </FormControl>
                  <FormControl id="first-name">
                    <FormLabel>First Name</FormLabel>
                    <Input
                      borderRadius="0"
                      border="none"
                      borderBottom="solid green 2px"
                      type="text"
                      _hover={{ border: "solid green 2px" }}
                      _focus={{ border: "solid green 1px" }}
                      focusBorderColor="green"
                    />
                  </FormControl>
                  <FormControl id="last-name">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      borderRadius="0"
                      border="none"
                      borderBottom="solid green 2px"
                      type="text"
                      _hover={{ border: "solid green 2px" }}
                      _focus={{ border: "solid green 1px" }}
                      focusBorderColor="green"
                    />
                  </FormControl>
                  <FormControl id="company">
                    <FormLabel>Company</FormLabel>
                    <Input
                      borderRadius="0"
                      border="none"
                      borderBottom="solid green 2px"
                      type="text"
                      _hover={{ border: "solid green 2px" }}
                      _focus={{ border: "solid green 1px" }}
                      focusBorderColor="green"
                    />
                  </FormControl>
                  <Button size="lg" px="50px" colorScheme="green">
                    Send
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </Box>
        </Box>
      </Center>
    </Center>
  );
};

export default Subscribe;
