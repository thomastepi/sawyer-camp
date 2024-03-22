import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  HStack,
  VStack,
  Text,
  Link as ChakraLink,
  Box,
  Flex,
  Center,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Center h="15rem" bg="#EEEEEE" borderTop="green solid 2px" color="#87A922">
      <Flex w="60%" h="100%" justify="space-between">
        <Center>
          <VStack align="left">
            <ChakraLink>info@sawyercamp.com</ChakraLink>
            <Text>2024 Sawyer-Camp Farmers CIG</Text>
          </VStack>
        </Center>
        <Center>
          <VStack align="left">
            <ChakraLink as={ReactRouterLink} to="/">
              <Text as="b">Home</Text>
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/about-us">
              <Text as="b">About Us</Text>
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/projects">
              <Text as="b">Projects</Text>
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/blog">
              <Text as="b">Blog</Text>
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/get-in-touch">
              <Text as="b">Get in Touch</Text>
            </ChakraLink>
          </VStack>
        </Center>
      </Flex>
    </Center>
  );
};

export default Footer;
