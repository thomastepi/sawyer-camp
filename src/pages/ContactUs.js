import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GoogleMaps, DisplayAlert } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setName, setEmail, setMessage } from "../features/contactUsSlice";
import { setAlert } from "../features/alertSlice";
import { submitContactUs } from "../features/contactUsSlice";
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
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  Link as ChakraLink,
  useBreakpointValue,
} from "@chakra-ui/react";

const ContactUs = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.contactUs);
  const alert = useSelector((state) => state.alert);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(setName(values.name));
      dispatch(setEmail(values.email));
      dispatch(setMessage(values.message));

      try {
        dispatch(submitContactUs(values));
      } catch (err) {
        console.log(err);
      }
    },
  });

  useEffect(() => {
    if (alert.isSuccessful) {
      formik.resetForm();
      dispatch(
        setAlert({
          ...alert,
          isSuccessful: false,
        })
      );
    }
  }, [alert.isSuccessful, dispatch, formik, alert]);

  return (
    <Box w="100%" color="#87A922">
      <Header />
      <Center h="20rem">
        <VStack spacing={4} pl={isMobile && "20px"}>
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
        <Grid
          h="30rem"
          w="100%"
          templateColumns={
            isMobile ? "repeat(1, 1fr 2fr)" : "repeat(1, 1fr 2fr 1fr)"
          }
        >
          <Center bg="#E1F0DA">
            <VStack align="left" spacing={7} pl={isMobile && "10px"}>
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
            <Box w={isMobile ? "80%" : "50%"}>
              <form onSubmit={formik.handleSubmit}>
                <VStack spacing={4}>
                  <FormControl
                    id="name"
                    isInvalid={formik.touched.name && formik.errors.name}
                  >
                    <FormLabel>Name</FormLabel>
                    <Input
                      borderRadius="0"
                      border="none"
                      borderBottom="solid green 2px"
                      type="text"
                      name="name"
                      {...formik.getFieldProps("name")}
                      _hover={{ border: "solid green 2px" }}
                      _focus={{ border: "solid green 1px" }}
                      focusBorderColor="green"
                    />
                    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    id="email"
                    isInvalid={formik.touched.email && formik.errors.email}
                  >
                    <FormLabel>Email</FormLabel>
                    <Input
                      borderRadius="0"
                      border="none"
                      borderBottom="solid green 2px"
                      type="email"
                      name="email"
                      {...formik.getFieldProps("email")}
                      _hover={{ border: "solid green 2px" }}
                      _focus={{ border: "solid green 1px" }}
                      focusBorderColor="green"
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    id="message"
                    isInvalid={formik.touched.message && formik.errors.message}
                  >
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      borderRadius="0"
                      border="none"
                      borderBottom="solid green 2px"
                      type="text"
                      name="message"
                      {...formik.getFieldProps("message")}
                      _hover={{ border: "solid green 2px" }}
                      _focus={{ border: "solid green 1px" }}
                      focusBorderColor="green"
                    />
                    <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
                  </FormControl>
                  <Button
                    type="submit"
                    size="lg"
                    px="50px"
                    colorScheme="green"
                    isLoading={isLoading}
                    loadingText="Sending"
                  >
                    Send
                  </Button>
                  {alert.show && (
                    <DisplayAlert
                      message={alert.message}
                      alertStatus={alert.status}
                      title={alert.title}
                    />
                  )}
                </VStack>
              </form>
            </Box>
          </Center>
          {isMobile ? null : (
            <Center bg="grey" bgImg={img}>
              <Box></Box>
            </Center>
          )}
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
