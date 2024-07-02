import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const Register = () => {
  const [memberId, setMemberId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!memberId || !username || !password)
      return alert("Please fill in all fields");
    console.log("Registering with:", { memberId, username, password });
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
          Register
        </Heading>
        <hr style={{ marginBottom: "30px", borderTop: "1px solid #87A922" }} />
        <VStack spacing={4}>
          <FormControl id="memberId">
            <FormLabel>Member ID</FormLabel>
            <Input
              type="text"
              value={memberId}
              border="1px solid #87A922"
              borderRadius="0"
              onChange={(e) => setMemberId(e.target.value)}
            />
          </FormControl>
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
              type="password"
              value={password}
              border="1px solid #87A922"
              borderRadius="0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="green" width="full" onClick={handleRegister}>
            Register
          </Button>
          <Text>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ textDecoration: "underline", fontStyle: "italic" }}
            >
              Login
            </Link>
          </Text>
          <Link
            to="/"
            style={{ textDecoration: "underline", fontStyle: "italic" }}
          >
            Return Home
          </Link>
        </VStack>
      </Box>
    </Box>
  );
};

export default Register;
