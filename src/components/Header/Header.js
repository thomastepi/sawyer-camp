import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  Box,
  HStack,
  Center,
  Flex,
  Divider,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import useIsMobile from "../../hooks/useIsMobile";
import { Link as ReactRouterLink } from "react-router-dom";

const Header = () => {
  const isMobileView = useIsMobile();

  return (
    <>
      <Center
        bg="#EEEEEE"
        color="green"
        position="sticky"
        top="0"
        zIndex="sticky"
      >
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
            {!isMobileView && (
              <Center>
                <HStack spacing={4}>
                  <ChakraLink as={ReactRouterLink} to="/login" height="100%">
                    Sign In
                  </ChakraLink>
                  <Divider
                    borderColor="green"
                    height="40px"
                    orientation="vertical"
                  />
                  <ChakraLink
                    as={ReactRouterLink}
                    to="/membership"
                    height="100%"
                  >
                    Become a Member
                  </ChakraLink>
                </HStack>
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
              py="12px"
            >
              Donate
            </ChakraLink>
          </HStack>
        </Flex>
      </Center>
      <Navbar />
    </>
  );
};

export default Header;
