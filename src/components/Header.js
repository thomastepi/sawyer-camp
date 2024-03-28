import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  Box,
  HStack,
  Text,
  Center,
  Flex,
  Image,
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
      <Center bg="#EEEEEE" color="green">
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
            {!isMobile && (
              <Center>
                <ChakraLink as={ReactRouterLink} to="/membership" height="100%">
                  Become a Member
                </ChakraLink>
              </Center>
            )}
            {!isMobile && (
              <Center>
                <ChakraLink as={ReactRouterLink} to="/contact-us" height="100%">
                  Contact Us
                </ChakraLink>
              </Center>
            )}
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
              py="15px"
            >
              Donate
            </ChakraLink>
          </HStack>
        </Flex>
      </Center>
      <Box bg="#D2E3C8" p="7px" align="center">
        <Center width="70%">
          <Flex justify="space-between" alignItems="center">
            <Box w={isMobile ? "15%" : "8%"} paddingTop="6px">
              <ReactRouterLink to="/">
                <Image src={logo} alt="logo" />
              </ReactRouterLink>
            </Box>
            {isMobile && <DrawerPanel />}
            {!isMobile && (
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
