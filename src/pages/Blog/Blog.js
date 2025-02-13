import React from "react";
import Subscribe from "../../components/SubscribeForm/Subscribe";
import BlogArticleBox from "../../components/BlogArticles/BlogArticleBox";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Box, Center } from "@chakra-ui/react";

const Blog = () => {
  const heading = "Grow With Us";
  const headingText = "Subscribe to Blog Posts";
  return (
    <>
      <Box>
        <PageHeader
          title="Blog"
          image={"https://ik.imagekit.io/thormars/Sawyer-Camp/carrots.jpg"}
        />
        <Center py="20px" bg="#FFF">
          <Box w="80%">
            <BlogArticleBox
              subtitle="News from Saywer Camp Farmers CIG"
              bgColor="#F8F4E1"
            />
          </Box>
        </Center>
        <Subscribe
          image={"https://ik.imagekit.io/thormars/Sawyer-Camp/root-veggies.jpg"}
          heading={heading}
          headingText={headingText}
        />
      </Box>
    </>
  );
};

export default Blog;
