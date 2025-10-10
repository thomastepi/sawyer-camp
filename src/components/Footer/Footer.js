import React from "react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import navLinks from "../../utils/navLinks";
import {
  HStack,
  VStack,
  Text,
  Link as ChakraLink,
  Box,
  Flex,
  Center,
  Button,
} from "@chakra-ui/react";
import useIsMobile from "../../hooks/useIsMobile";

const Footer = () => {
  const isMobileView = useIsMobile();
  const navigate = useNavigate();
  return (
    <footer>
      <Center
        py="50px"
        bg="#EEEEEE"
        borderTop="green solid 2px"
        color="#87A922"
      >
        <Flex
          w={isMobileView ? "95%" : "70%"}
          h="100%"
          justify="space-between"
          direction={{ base: "column", md: "row" }}
        >
          <Box mb={isMobileView ? "40px" : "0"}>
            <VStack align={isMobileView ? "center" : "left"}>
              {navLinks.map((link, index) => (
                <ChakraLink key={index} as={ReactRouterLink} to={link.path}>
                  <Text as="b">{link.name}</Text>
                </ChakraLink>
              ))}
            </VStack>
          </Box>
          <Box
            mb={isMobileView ? "30px" : "0"}
            display={!isMobileView ? "flex" : "block"}
            alignItems="center"
          >
            <VStack>
              <Text align="center">Support Our Mission</Text>
              <Button
                onClick={() => navigate("/donate")}
                colorScheme="green"
                size="md"
              >
                Donate
              </Button>
            </VStack>
          </Box>
          <Box>
            <VStack>
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
              <ChakraLink href="mailto:contact@thomastepi.com">
                contact@thomastepi.com
              </ChakraLink>
              <Text align="center">
                Sawyer Camp Farmers CIG • © {new Date().getFullYear()}
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Center>
      <Box bg="white">
        <Center m="0 auto" borderTop="green solid 2px" w="80%" py={5}>
          <VStack spacing={2} color="#87A922">
            <Text>Made with ❤️ by Thomas Tepi</Text>
            <ChakraLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.thomastepi.com"
            >
              www.thomastepi.com
            </ChakraLink>
          </VStack>
        </Center>
      </Box>
    </footer>
  );
};

export default Footer;
