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

const ErrorPage = () => {
  return (
    <Box>
      <Center pt="18px">
        <VStack spacing={7}>
          <Image src={img} alt="Page Not Found" />
          <Heading>Page Not Found</Heading>
          <Text>Sorry, the page you are looking for does not exist.</Text>
          <Link href="/">
            <Button colorScheme="green">Go Back Home</Button>
          </Link>
        </VStack>
      </Center>
    </Box>
  );
};

export default ErrorPage;
