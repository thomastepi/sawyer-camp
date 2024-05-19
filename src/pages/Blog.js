import React from "react";
import { Subscribe, SharedLayout, BlogBox } from "../components";
import { Box, Center } from "@chakra-ui/react";

const Blog = () => {
  const heading = "Grow With Us";
  const headingText = "Subscribe to Blog Posts";
  return (
    <SharedLayout>
      <Box>
        <Center>
          <Box w="80%">
            <BlogBox title="BLOG" />
          </Box>
        </Center>
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
