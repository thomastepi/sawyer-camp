import React, { useEffect } from "react";
import FixedBg from "../FixedBackground/FixedBg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { submitNewsletter } from "../../features/newsletterSlice";
import DisplayAlert from "../Alert/DisplayAlert";
import {
  setEmail,
  setFirstName,
  setLastName,
  setCompany,
} from "../../features/newsletterSlice";
import {
  Box,
  Text,
  Center,
  Heading,
  Button,
  Input,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import useIsMobile from "../../hooks/useIsMobile";

const Subscribe = ({ image, heading, headingText }) => {
  const isMobileView = useIsMobile();
  const dispatch = useDispatch();
  const { isLoading, status, show } = useSelector((state) => state.newsletter);
  const alert = useSelector((state) => state.alert);

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      company: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      firstName: Yup.string().optional(),
      lastName: Yup.string().optional(),
      company: Yup.string().optional(),
    }),
    onSubmit: (values) => {
      dispatch(setEmail(values.email));
      dispatch(setFirstName(values.firstName));
      dispatch(setLastName(values.lastName));
      dispatch(setCompany(values.company));
      try {
        dispatch(submitNewsletter(values));
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    if (status === "success") {
      formik.resetForm();
    }
  }, [status, dispatch, formik]);

  return (
    <Center w="100%" pos="relative">
      <FixedBg image={image} />
      <Center py="50px" w={isMobileView ? "80%" : "30%"}>
        <Box
          align="center"
          px="10px"
          py="40px"
          color="green"
          w="100%"
          bg="#D2E3C8"
        >
          <VStack w="100%" spacing={10}>
            <Heading>{heading}</Heading>
            <Text fontSize="2xl">{headingText}</Text>
            <Box w="90%">
              <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
                <VStack spacing={4} w="100%">
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
                  <FormControl id="first-name">
                    <FormLabel>First Name</FormLabel>
                    <Input
                      borderRadius="0"
                      border="none"
                      borderBottom="solid green 2px"
                      type="text"
                      name="firstName"
                      {...formik.getFieldProps("firstName")}
                      _hover={{ border: "solid green 2px" }}
                      _focus={{ border: "solid green 1px" }}
                      focusBorderColor="green"
                    />
                    <FormHelperText align="left">(Optional)</FormHelperText>
                  </FormControl>
                  <FormControl id="last-name">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      borderRadius="0"
                      border="none"
                      borderBottom="solid green 2px"
                      type="text"
                      name="lastName"
                      {...formik.getFieldProps("lastName")}
                      _hover={{ border: "solid green 2px" }}
                      _focus={{ border: "solid green 1px" }}
                      focusBorderColor="green"
                    />
                    <FormHelperText align="left">(Optional)</FormHelperText>
                  </FormControl>
                  <FormControl id="company">
                    <FormLabel>Company</FormLabel>
                    <Input
                      borderRadius="0"
                      border="none"
                      borderBottom="solid green 2px"
                      type="text"
                      name="company"
                      {...formik.getFieldProps("company")}
                      _hover={{ border: "solid green 2px" }}
                      _focus={{ border: "solid green 1px" }}
                      focusBorderColor="green"
                    />
                    <FormHelperText align="left">(Optional)</FormHelperText>
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
          </VStack>
        </Box>
      </Center>
    </Center>
  );
};

export default Subscribe;
