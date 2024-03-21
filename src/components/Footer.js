import React from "react";
import {
  HStack,
  VStack,
  Text,
  Link,
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
            <Link>info@sawyercamp.com</Link>
            <Text>2024 Sawyer-Camp Farmers CIG</Text>
          </VStack>
        </Center>
        <Center>
          <VStack align="left">
            <Link as="b">Home</Link>
            <Link as="b">About Us</Link>
            <Link as="b">Our Team</Link>
            <Link as="b">Blog</Link>
            <Link as="b">Get in Touch</Link>
          </VStack>
        </Center>
      </Flex>
    </Center>
  );
};

export default Footer;
