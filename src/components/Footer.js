import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  HStack,
  VStack,
  Text,
  Link as ChakraLink,
  Box,
  Flex,
  Center,
  Link,
} from "@chakra-ui/react";
import useIsMobile from "../hooks/useIsMobile";

const Footer = () => {
  const isMobileView = useIsMobile();
  return (
    <>
      <Center
        h="20rem"
        bg="#EEEEEE"
        borderTop="green solid 2px"
        color="#87A922"
      >
        <Flex w={isMobileView ? "90%" : "60%"} h="100%" justify="space-between">
          <Center>
            <VStack align="left">
              <HStack spacing={4}>
                <ChakraLink
                  href="https://linkedin.com/in/thomastepi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </ChakraLink>
                <ChakraLink
                  href="https://twitter.com/tomtepi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </ChakraLink>
              </HStack>
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
              <ChakraLink as={ReactRouterLink} to="/contact-us">
                <Text as="b">Get in Touch</Text>
              </ChakraLink>
              <ChakraLink as={ReactRouterLink} to="/membership">
                <Text as="b">Become a Member</Text>
              </ChakraLink>
            </VStack>
          </Center>
        </Flex>
      </Center>
      <Box bg="white">
        <Center m="0 auto" borderTop="green solid 2px" w="80%" py={5}>
          <VStack spacing={2} color="#87A922">
            <Text>Website created by Thomas Tepi - 2023</Text>
            <Link
              target="_blank"
              rel="noopener noreferre"
              href="https://www.thomastepi.com"
            >
              www.thomastepi.com
            </Link>
          </VStack>
        </Center>
      </Box>
    </>
  );
};

export default Footer;
