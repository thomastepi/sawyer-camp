import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  AboutUs,
  Blog,
  Projects,
  OurWork,
  ContactUs,
  ProjectDescription,
  Donate,
  Paypal,
  Membership,
  ErrorPage,
} from "./pages";
import { ScrollToTop } from "./components";

function App() {
  const initialOptions = {
    "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
    currency: "CAD",
    intent: "capture",
  };
  return (
    <PayPalScriptProvider options={initialOptions}>
      <ChakraProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="/project/:projectId"
              element={<ProjectDescription />}
              errorElement={<ErrorPage />}
            />
            <Route path="/donate" element={<Donate />} />
            <Route path="/paypal" element={<Paypal />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </PayPalScriptProvider>
  );
}

export default App;
