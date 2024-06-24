import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  VStack,
  Button,
  Text,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DrawerPanel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button ref={btnRef} colorScheme="green" onClick={onOpen} bg="green">
        {<FontAwesomeIcon color="white" icon={faBars} size="2x" />}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="#D2E3C8">
          <DrawerCloseButton padding={5} size={3} color="green" />
          <DrawerBody marginTop={20}>
            <Box py={4}>
              <Box color="green">
                <VStack spacing={7}>
                  <ReactRouterLink to="/">
                    <Text>Home</Text>
                  </ReactRouterLink>
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
                  <ReactRouterLink to="/volunteer">
                    <Text>Volunteer</Text>
                  </ReactRouterLink>
                  <ReactRouterLink to="/contact-us">
                    <Text>Contact Us</Text>
                  </ReactRouterLink>
                  <ReactRouterLink to="/membership">
                    <Text>Become a Member</Text>
                  </ReactRouterLink>
                </VStack>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerPanel;
