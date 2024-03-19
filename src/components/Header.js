import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Text } from "@chakra-ui/react";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <Box bg="#4F6F52" color="white" align="center" height="3rem">
        <Box width="90%" align="center" paddingTop="6px">
          <HStack display="flex" justifyContent="space-between">
            <nav>
              <HStack spacing={6}>
                <a>
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a>
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </HStack>
            </nav>
            <nav>
              <HStack spacing={6}>
                <a>
                  <Text>Become a Member</Text>
                </a>
                <a>
                  <Text>Subscribe</Text>
                </a>
                <a>
                  <Text>Donate</Text>
                </a>
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>
      <Box bg="#D2E3C8" height="6rem" align="center">
        <Box width="90%" align="center" height="100%">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box width="5%" paddingTop="6px">
              <img src={logo} alt="logo" />
            </Box>
            <Box>
              <HStack spacing={24}>
                <a>
                  <Text>About Us</Text>
                </a>
                <a>
                  <Text>Our Work</Text>
                </a>
                <a>
                  <Text>Get Involved</Text>
                </a>
                <a>
                  <Text>Events</Text>
                </a>
                <a>
                  <Text>Blog</Text>
                </a>
              </HStack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
