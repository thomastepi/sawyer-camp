import React, { useEffect } from "react";
import { GoogleMaps, DisplayAlert, SharedLayout } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { setName, setEmail, setMessage } from "../features/contactUsSlice";
import { submitContactUs } from "../features/contactUsSlice";
import useIsMobile from "../hooks/useIsMobile";
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
} from "@chakra-ui/react";

const ContactUs = () => {
  const isMobileView = useIsMobile();
  const dispatch = useDispatch();
  const { isLoading, status, show } = useSelector((state) => state.contactUs);
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
    if (status === "success") {
      formik.resetForm();
    }
  }, [status, dispatch, formik]);

  return (
    <SharedLayout>
      <Box w="100%" color="#87A922">
        <Center h="20rem">
          <VStack spacing={4} pl={isMobileView && "20px"}>
            <Heading align="center" color="green">
              Connect with Us
            </Heading>
            <Text fontSize="2xl" align="center">
              Help us make Sawyer Camp Farmers CIG even better! Share your
              feedback and suggestions. Let's build something great together.
            </Text>
            <Text as="b" fontSize="3xl">
              Let's Chat
            </Text>
            <Divider w="20%" />
          </VStack>
        </Center>
        <Box w="100%">
          <Grid
            h="100%"
            w="100%"
            templateColumns={
              isMobileView ? "repeat(1, 1fr 2fr)" : "repeat(1, 1fr 2fr 1fr)"
            }
          >
            <Center bg="#E1F0DA" py="50px">
              <VStack align="left" spacing={7} pl={isMobileView && "10px"}>
                <Box>
                  <Text as="b" fontSize="2xl">
                    Address
                  </Text>
                  <Text>Banga Bakundu, South West Region, Cameroon</Text>
                </Box>
                <Box>
                  <Text as="b" fontSize="2xl">
                    Phone
                  </Text>
                  <Text>
                    Tel/Whatsapp: <br /> +237 6 51 77 18 43
                  </Text>
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
                    <ChakraLink
                      href="https://linkedin.com/in/thomastepi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />{" "}
                    </ChakraLink>
                    <ChakraLink
                      href="https://twitter.com/tomtepi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </ChakraLink>
                  </HStack>
                </Box>
              </VStack>
            </Center>
            <Center bg="#FFF">
              <Box w={isMobileView ? "80%" : "50%"}>
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
                      isInvalid={
                        formik.touched.message && formik.errors.message
                      }
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
                      <FormErrorMessage>
                        {formik.errors.message}
                      </FormErrorMessage>
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
                    {show && (
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
            {isMobileView ? null : (
              <Center>
                <Box
                  w="100%"
                  bgImg={
                    "https://ik.imagekit.io/thormars/Sawyer-Camp/rubber_trees.jpg"
                  }
                  h="100%"
                  bg="grey.100"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  bgPos="center"
                ></Box>
              </Center>
            )}
          </Grid>
        </Box>

        <Box h="25rem">
          <GoogleMaps />
        </Box>
      </Box>
    </SharedLayout>
  );
};

export default ContactUs;
