import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  BecomeMember,
  AboutUs,
  Blog,
  OurServices,
  OurWork,
  Tools,
} from "./pages";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/become-member" element={<BecomeMember />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
