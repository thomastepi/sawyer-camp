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
  useBreakpointValue,
} from "@chakra-ui/react";
import logo from "../assets/images/logo.png";
import DrawerPanel from "./DrawerPanel";
import { Link as ReactRouterLink } from "react-router-dom";

const Header = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <Center bg="#EEEEEE" color="green" height="3rem">
        <Flex width="90%" justify="space-between" h="inherit">
          <HStack spacing={6}>
            <ChakraLink
              href="https://linkedin.com/in/thomastepi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon color="green" icon={faLinkedin} size="2x" />
            </ChakraLink>
            <ChakraLink
              href="https://twitter.com/tomtepi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon color="green" icon={faTwitter} size="2x" />
            </ChakraLink>
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
      <Box w="100%" bg="#D2E3C8" height="6rem" align="center">
        <Center width="90%" height="100%">
          <Flex justify="space-between" alignItems="center">
            <Box w={isMobile ? "15%" : "8%"} paddingTop="6px">
              <ReactRouterLink to="/">
                <img src={logo} alt="logo" />
              </ReactRouterLink>
            </Box>
            {isMobile ? <DrawerPanel /> : null}
            {isMobile ? null : (
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
            )}
          </Flex>
        </Center>
      </Box>
    </>
  );
};

export default Header;
