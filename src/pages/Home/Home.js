import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import WhatWeDo from "../../components/WhatWeDoSection/WhatWeDo";
import Team from "../../components/TeamSection/Team";
import BlogArticleBox from "../../components/BlogArticles/BlogArticleBox";
// import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";
import Subscribe from "../../components/SubscribeForm/Subscribe";
import { Box, Center } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhatWeDo />
      <Team />
      <Center w="100%" my="40px">
        <Box w="80%">
          <BlogArticleBox title="Latest News" bgColor="#F8F4E1" />
        </Box>
      </Center>
      <Subscribe
        image={"https://ik.imagekit.io/thormars/Sawyer-Camp/fowl.jpg"}
        heading="Dont Miss Out!"
        headingText="Sign up for our newsletter"
      />
      {/*Renew Google Maps subscription*/}
      {/* <GoogleMaps /> */}
    </>
  );
};

export default Home;
