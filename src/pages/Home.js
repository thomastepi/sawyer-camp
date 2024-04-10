import React from "react";
import img from "../assets/images/green-leaf.jpg";
import { Landing, Team, WhatWeDo, Subscribe, GoogleMaps } from "../components";
import { SharedLayout } from "../components";

const Home = () => {
  return (
    <SharedLayout>
      <Landing />
      <WhatWeDo />
      <Team />
      <Subscribe
        image={img}
        heading="News"
        headingText="Subscribe to our Newsletter"
      />
      <GoogleMaps />
    </SharedLayout>
  );
};

export default Home;
