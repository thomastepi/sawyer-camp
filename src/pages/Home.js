import React from "react";
import img from "../assets/images/green-leaf.jpg";
import {
  Landing,
  Team,
  WhatWeDo,
  Subscribe,
  GoogleMaps,
  SharedLayout,
} from "../components";

const Home = () => {
  return (
    <SharedLayout>
      <Landing />
      <WhatWeDo />
      <Team />
      <Subscribe
        image={img}
        heading="Dont Miss Out!"
        headingText="Sign up for our newsletter"
      />
      <GoogleMaps />
    </SharedLayout>
  );
};

export default Home;
