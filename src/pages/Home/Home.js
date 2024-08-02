import React from "react";
import MainLayout from "../../layouts/MainLayout";
import HeroSection from "../../components/HeroSection/HeroSection";
import WhatWeDo from "../../components/WhatWeDoSection/WhatWeDo";
import Team from "../../components/TeamSection/Team";
import BlogArticleBox from "../../components/BlogArticles/BlogArticleBox";
// import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";
import Subscribe from "../../components/SubscribeForm/Subscribe";
import { Box, Center } from "@chakra-ui/react";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <WhatWeDo />
      <Team />
      <Center w="100%" mt="40px">
        <Box w="80%">
          <BlogArticleBox title="Latest News" />
        </Box>
      </Center>
      <Subscribe
        image={"https://ik.imagekit.io/thormars/Sawyer-Camp/empower.jpg"}
        heading="Dont Miss Out!"
        headingText="Sign up for our newsletter"
      />
      {/*Renew Google Maps subscription*/}
      {/* <GoogleMaps /> */}
    </MainLayout>
  );
};

export default Home;
