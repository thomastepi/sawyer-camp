import React from "react";
import img from "../assets/images/green-leaf.jpg";
import {
  Landing,
  Team,
  Projects,
  Subscribe,
  Footer,
  GoogleMaps,
} from "../components";

const Home = () => {
  return (
    <>
      <Landing />
      <Projects />
      <Team />
      <Subscribe
        image={img}
        heading="News"
        headingText="Subscribe to our Newsletter"
      />
      <GoogleMaps />
      <Footer />
    </>
  );
};

export default Home;
