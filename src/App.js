import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  AboutUs,
  Blog,
  Projects,
  OurWork,
  ContactUs
} from "./pages";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
