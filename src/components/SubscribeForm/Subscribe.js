import React, { useEffect } from "react";
import validator from "validator";
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
        .max(254, "Email is too long")
        .required("Email is required"),

      firstName: Yup.string()
        .max(50, "First name must be at most 50 characters")
        .matches(/^[a-zA-Z\s'-]*$/, "First name contains invalid characters")
        .optional(),

      lastName: Yup.string()
        .max(50, "Last name must be at most 50 characters")
        .matches(/^[a-zA-Z\s'-]*$/, "Last name contains invalid characters")
        .optional(),

      company: Yup.string()
        .max(100, "Company name must be at most 100 characters")
        .matches(
          /^[a-zA-Z0-9\s.'\-&,()]*$/,
          "Company name contains invalid characters"
        )
        .optional(),
    }),
    onSubmit: (values) => {
      const sanitizedValues = {
        email: validator.normalizeEmail(values.email),
        firstName: validator.escape(values.firstName || ""),
        lastName: validator.escape(values.lastName || ""),
        company: validator.escape(values.company || ""),
      };

      dispatch(setEmail(sanitizedValues.email));
      dispatch(setFirstName(sanitizedValues.firstName));
      dispatch(setLastName(sanitizedValues.lastName));
      dispatch(setCompany(sanitizedValues.company));
      try {
        dispatch(submitNewsletter(sanitizedValues));
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
                  <FormControl
                    id="first-name"
                    isInvalid={
                      formik.touched.firstName && formik.errors.firstName
                    }
                  >
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
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <FormErrorMessage>
                        {formik.errors.firstName}
                      </FormErrorMessage>
                    ) : (
                      <FormHelperText align="left">(Optional)</FormHelperText>
                    )}
                  </FormControl>
                  <FormControl
                    id="last-name"
                    isInvalid={
                      formik.touched.lastName && formik.errors.lastName
                    }
                  >
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
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <FormErrorMessage>
                        {formik.errors.lastName}
                      </FormErrorMessage>
                    ) : (
                      <FormHelperText align="left">(Optional)</FormHelperText>
                    )}
                  </FormControl>
                  <FormControl
                    id="company"
                    isInvalid={formik.touched.company && formik.errors.company}
                  >
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
                    {formik.touched.company && formik.errors.company ? (
                      <FormErrorMessage>
                        {formik.errors.company}
                      </FormErrorMessage>
                    ) : (
                      <FormHelperText align="left">(Optional)</FormHelperText>
                    )}
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
