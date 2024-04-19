import React, { useEffect, useRef, useState } from "react";
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
} from "@chakra-ui/react";
import logo from "../assets/images/logo.png";
import DrawerPanel from "./DrawerPanel";
import useIsMobile from "../hooks/useIsMobile";
import { Link as ReactRouterLink } from "react-router-dom";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const boxRef = useRef(null);
  const isMobileView = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollDown = currentScrollPos > prevScrollPos;
      setVisible(!scrollDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const translateY = visible ? "0" : "-200px";

  return (
    <Box
      ref={boxRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={`translateY(${translateY})`}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      zIndex="1000"
    >
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
            {!isMobileView && (
              <Center>
                <ChakraLink as={ReactRouterLink} to="/membership" height="100%">
                  Become a Member
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
              py="12px"
            >
              Donate
            </ChakraLink>
          </HStack>
        </Flex>
      </Center>
      <Box bg="#D2E3C8" p="7px" align="center" w="100%">
        <Center width="85%" justifyContent="space-between">
          <Box w={isMobileView ? "15%" : "5%"} paddingTop="6px">
            <ReactRouterLink to="/">
              <Image src={logo} alt="logo" />
            </ReactRouterLink>
          </Box>
          {isMobileView ? (
            <DrawerPanel />
          ) : (
            <Box color="green">
              <HStack spacing={"14"}>
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
                <ReactRouterLink to="/contact-us">
                  <Text>Contact Us</Text>
                </ReactRouterLink>
              </HStack>
            </Box>
          )}
        </Center>
      </Box>
    </Box>
  );
};

export default Header;
