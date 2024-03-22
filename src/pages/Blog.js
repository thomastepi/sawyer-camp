import React from "react";
import Header from "../components/Header";
import SharedLayout from "./SharedLayout";
import { Subscribe, Footer } from "../components";
import img from "../assets/images/img_8.jpg";
import { Box, Flex } from "@chakra-ui/react";

const Blog = () => {
  const heading = "Our Latest Stories";
  const headingText = `Right in your inbox.`;
  return (
    <>
      <Header />
      <Box>
        <Subscribe image={img} heading={heading} headingText={headingText} />
      </Box>

      <Footer />
    </>
  );
};

export default Blog;
