import React from "react";
import { Box } from "@chakra-ui/react";

const img = "https://ik.imagekit.io/thormars/Sawyer-Camp/nature.jpg";

const FixedBg = ({ image }) => {
  const bgImgStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    bg: "#344955",
    backgroundImage: image || img,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    opacity: "1",
    zIndex: "-1",
  };
  return <Box {...bgImgStyle}></Box>;
};

export default FixedBg;
