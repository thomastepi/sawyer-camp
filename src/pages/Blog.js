import React from "react";
import { Subscribe, SharedLayout } from "../components";
import { Box } from "@chakra-ui/react";

const Blog = () => {
  const heading = "Grow With Us";
  const headingText = "Subscribe to Blog Posts";
  return (
    <SharedLayout>
      <Box mt="150px">
        <Subscribe
          image={"https://ik.imagekit.io/thormars/Sawyer-Camp/green-leaves.jpg"}
          heading={heading}
          headingText={headingText}
        />
      </Box>
    </SharedLayout>
  );
};

export default Blog;
