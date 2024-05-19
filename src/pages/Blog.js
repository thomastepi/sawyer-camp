import React from "react";
import { Subscribe, SharedLayout, BlogBox, HeadingBox } from "../components";
import { Box, Center } from "@chakra-ui/react";

const Blog = () => {
  const heading = "Grow With Us";
  const headingText = "Subscribe to Blog Posts";
  return (
    <SharedLayout>
      <Box>
        <HeadingBox
          title="Blog"
          image={"https://ik.imagekit.io/thormars/Sawyer-Camp/carrots.jpg"}
        />
        <Center py="20px" bg="#FFF">
          <Box w="80%">
            <BlogBox
              subtitle="News from Saywer Camp Farmers CIG"
              bgColor="#F8F4E1"
            />
          </Box>
        </Center>
        <Subscribe
          image={"https://ik.imagekit.io/thormars/Sawyer-Camp/about.jpg"}
          heading={heading}
          headingText={headingText}
        />
      </Box>
    </SharedLayout>
  );
};

export default Blog;
