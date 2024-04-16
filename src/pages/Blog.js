import React from "react";
import { Subscribe, SharedLayout } from "../components";
import img from "../assets/images/green-leaves.jpg";
import { Box } from "@chakra-ui/react";

const Blog = () => {
  const heading = "Our Latest Stories";
  const headingText = `Right in your inbox.`;
  return (
    <SharedLayout>
      <Box mt="150px">
        <Subscribe image={img} heading={heading} headingText={headingText} />
      </Box>
    </SharedLayout>
  );
};

export default Blog;
