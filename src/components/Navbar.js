import React from "react";
import {
  Box,
  Text,
  Center,
  Image,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import navLinks from "../utils/navLinks";
import logo from "../assets/images/logo.png";
import DrawerPanel from "./DrawerPanel";
import useIsMobile from "../hooks/useIsMobile";

const Navbar = () => {
  const isMobileView = useIsMobile();
  return (
    <Box>
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
                {navLinks.map(
                  (link, index) =>
                    !link.flag && (
                      <ChakraLink
                        as={ReactRouterLink}
                        key={index}
                        to={link.path}
                      >
                        <Text>{link.name}</Text>
                      </ChakraLink>
                    )
                )}
              </HStack>
            </Box>
          )}
        </Center>
      </Box>
    </Box>
  );
};

export default Navbar;
