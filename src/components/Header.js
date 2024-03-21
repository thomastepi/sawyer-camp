import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Text } from "@chakra-ui/react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

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
                <>
                  <Link to='/become-member'>Become a Member</Link>
                </>
                <>
                  <Link>Subscribe</Link>
                </>
                <>
                  <Link>Donate</Link>
                </>
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
              <Link to='/'><img src={logo} alt="logo" /></Link>
            </Box>
            <Box color='green'>
              <HStack spacing={24}>
                <Link to='/about-us'>
                  <Text>About Us</Text>
                </Link>
                <Link to='/our-work'>
                  <Text>Our Work</Text>
                </Link>
                <Link to='/our-services'>
                  <Text>Our Services</Text>
                </Link>
                <Link to='/tools'>
                  <Text>Tools</Text>
                </Link>
                <Link to='/blog'>
                  <Text>Blog</Text>
                </Link>
              </HStack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
