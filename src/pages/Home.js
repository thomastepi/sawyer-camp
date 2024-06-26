import React from "react";
import {
  Landing,
  Team,
  WhatWeDo,
  Subscribe,
  //GoogleMaps,
  SharedLayout,
  BlogBox,
} from "../components";
import { Box, Center } from "@chakra-ui/react";

const Home = () => {
  return (
    <SharedLayout>
      <Landing />
      <WhatWeDo />
      <Team />
      <Center w="100%" mt="40px">
        <Box w="80%">
          <BlogBox title="Latest News" />
        </Box>
      </Center>
      <Subscribe
        image={"https://ik.imagekit.io/thormars/Sawyer-Camp/empower.jpg"}
        heading="Dont Miss Out!"
        headingText="Sign up for our newsletter"
      />
      {/*Renew Google Maps subscription*/}
      {/* <GoogleMaps /> */}
    </SharedLayout>
  );
};

export default Home;
