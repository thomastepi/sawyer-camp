import React from "react";
import {
  Box,
  Image,
  Text,
  Link,
  Heading,
  VStack,
  Button,
  Center,
} from "@chakra-ui/react";
import img from "../../assets/images/page_not_found.svg";

const ErrorPage = ({
  heading = "Page Not Found",
  text = "Sorry, the page you are looking for does not exist.",
  btnText = "Go Back Home",
  btnLink = "/",
}) => {
  return (
    <Box mb="35px">
      <Center pt="18px">
        <VStack spacing={7}>
          <Image src={img} alt={heading} />
          <Heading>{heading}</Heading>
          <Text>{text}</Text>
          <Link href={btnLink}>
            <Button colorScheme="green">{btnText}</Button>
          </Link>
        </VStack>
      </Center>
    </Box>
  );
};

export default ErrorPage;
