import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GoogleMaps } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import img from "../assets/images/rubber_tree.jpg";
import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Divider,
  Grid,
  Center,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <Box w="100%" color="#87A922">
      <Header />
      <Center h="20rem">
        <VStack spacing={4}>
          <Heading>Get in Touch</Heading>
          <Text fontSize="2xl">
            We want to hear your questions, comments, suggestions and feedback.
            Let's work together.
          </Text>
          <Text as="b" fontSize="3xl">
            Let's Chat
          </Text>
          <Divider w="20%" />
        </VStack>
      </Center>
      <Box w="100%">
        <Grid h="30rem" w="100%" templateColumns="repeat(1, 1fr 2fr 1fr)">
          <Center bg="#E1F0DA">
            <VStack align="left" spacing={7}>
              <Box>
                <Text as="b" fontSize="2xl">
                  Address
                </Text>
                <Text>Banga Bakundu, South West</Text>
              </Box>
              <Box>
                <Text as="b" fontSize="2xl">
                  Phone
                </Text>
                <Text>+237 6 77 73 19 51</Text>
              </Box>
              <Box>
                <Text as="b" fontSize="2xl">
                  Email
                </Text>
                <Text>info@sawyercamp.com</Text>
              </Box>
              <Box>
                <Text as="b" fontSize="2xl">
                  Social
                </Text>
                <HStack spacing={3} pt={2}>
                  <ChakraLink>
                    <FontAwesomeIcon icon={faLinkedin} />{" "}
                  </ChakraLink>
                  <ChakraLink>
                    <FontAwesomeIcon icon={faTwitter} />
                  </ChakraLink>
                </HStack>
              </Box>
            </VStack>
          </Center>
          <Center bg="#FFF">
            <Box w="50%">
              <VStack spacing={4}>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    borderRadius="0"
                    border="none"
                    borderBottom="solid green 2px"
                    type="text"
                    _hover={{ border: "solid green 2px" }}
                    _focus={{ border: "solid green 1px" }}
                    focusBorderColor="green"
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input
                    borderRadius="0"
                    border="none"
                    borderBottom="solid green 2px"
                    type="email"
                    _hover={{ border: "solid green 2px" }}
                    _focus={{ border: "solid green 1px" }}
                    focusBorderColor="green"
                  />
                </FormControl>
                <FormControl id="message">
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    borderRadius="0"
                    border="none"
                    borderBottom="solid green 2px"
                    type="text"
                    _hover={{ border: "solid green 2px" }}
                    _focus={{ border: "solid green 1px" }}
                    focusBorderColor="green"
                  />
                </FormControl>
                <Button size="lg" px="50px" colorScheme="green">
                  Send
                </Button>
              </VStack>
            </Box>
          </Center>
          <Center bg="grey" bgImg={img}>
            <Box></Box>
          </Center>
        </Grid>
      </Box>

      <Box h="25rem">
        <GoogleMaps />
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactUs;
