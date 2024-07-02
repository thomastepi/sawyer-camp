import React, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";
import { FixedBg } from "../components";
import logo from "../assets/images/logo.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) return alert("Please fill in all fields");
    console.log("Logging in with:", { username, password });
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={4}
      color="green"
    >
      <FixedBg image={"https://ik.imagekit.io/thormars/Sawyer-Camp/palm.jpg"} />
      <Box
        bg="#D2E3C8"
        p={6}
        rounded="md"
        shadow="md"
        w="full"
        maxW="md"
        borderRadius="0"
      >
        <Box w="20%" m="0 auto" mb="50px">
          <Image src={logo} alt="logo" />
        </Box>
        <Heading mb={3} size="md" textAlign="left">
          Member Login
        </Heading>
        <hr style={{ marginBottom: "30px", borderTop: "1px solid #87A922" }} />
        <VStack spacing={4}>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              value={username}
              border="1px solid #87A922"
              borderRadius="0"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              border="1px solid #87A922"
              borderRadius="0"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="green" width="full" onClick={handleLogin}>
            Login
          </Button>
          <Text>
            Dont't have an account?{" "}
            <ReactRouterLink
              style={{ textDecoration: "underline", fontStyle: "italic" }}
              to="/register"
            >
              Register
            </ReactRouterLink>
          </Text>
          <ReactRouterLink
            to="/"
            style={{ textDecoration: "underline", fontStyle: "italic" }}
          >
            Return Home
          </ReactRouterLink>
        </VStack>
      </Box>
    </Box>
  );
};

export default Login;
