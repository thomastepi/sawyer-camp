import React from "react";
import SharedLayout from "../pages/SharedLayout";
import img from "../assets/images/palm_plantation.jpg";
import { Image, Heading, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Stats = () => {
  const backgroundImageStyle = {
    backgroundImage: img,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: "0.5",
    minHeight: "100vh",
    position: "relative",
  };

  const headingStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1",
    color: "white",
    opacity: "1",
  };

  return (
    <SharedLayout
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg="black"
      zIndex={-9999}
    >
      <Box {...backgroundImageStyle} w="100%">
        <Box>
          <Heading {...headingStyle}>
            Stats
          </Heading>
        </Box>
      </Box>
    </SharedLayout>
  );
};

export default Stats;
