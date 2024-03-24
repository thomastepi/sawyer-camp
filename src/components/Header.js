import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  Box,
  HStack,
  Text,
  Center,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
import logo from "../assets/images/logo.png";
import { Link as ReactRouterLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Center bg="#EEEEEE" color="green" height="3rem">
        <Flex width="90%" justify="space-between" h="inherit">
          <HStack spacing={6}>
            <a>
              <FontAwesomeIcon color="green" icon={faLinkedin} size="2x" />
            </a>
            <a>
              <FontAwesomeIcon color="green" icon={faTwitter} size="2x" />
            </a>
          </HStack>
          <HStack spacing={6}>
            <ChakraLink
              as={ReactRouterLink}
              to="/contact-us"
              height="100%"
              display="flex"
              alignItems="center"
            >
              Contact Us
            </ChakraLink>
            <ChakraLink
              as={ReactRouterLink}
              bg="green"
              height="100%"
              display="flex"
              alignItems="center"
              px="20px"
              color="white"
              border="solid 2px green"
              _hover={{ bg: "white", color: "green", transition: "0.5s" }}
              to="/donate"
            >
              Donate
            </ChakraLink>
          </HStack>
        </Flex>
      </Center>
      <Box bg="#D2E3C8" height="6rem" align="center">
        <Box width="90%" align="center" height="100%">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box width="5%" paddingTop="6px">
              <ReactRouterLink to="/">
                <img src={logo} alt="logo" />
              </ReactRouterLink>
            </Box>
            <Box color="green">
              <HStack spacing={24}>
                <ReactRouterLink to="/about-us">
                  <Text>About Us</Text>
                </ReactRouterLink>
                <ReactRouterLink to="/our-work">
                  <Text>Our Work</Text>
                </ReactRouterLink>
                <ReactRouterLink to="/projects">
                  <Text>Projects</Text>
                </ReactRouterLink>
                <ReactRouterLink to="/blog">
                  <Text>Blog</Text>
                </ReactRouterLink>
              </HStack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
