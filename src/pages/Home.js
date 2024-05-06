import React from "react";
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
        image={"https://ik.imagekit.io/thormars/Sawyer-Camp/green-leaf.jpg"}
        heading="Dont Miss Out!"
        headingText="Sign up for our newsletter"
      />
      <GoogleMaps />
    </SharedLayout>
  );
};

export default Home;
