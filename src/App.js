import React from "react";
import "./App.css";
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
  Article,
  Volunteer,
  Login,
  Register,
} from "./pages";
import { ScrollToTop } from "./components";
import { PayPalProvider, ChakraUIProvider } from "./providers";

function App() {
  return (
    <ChakraUIProvider>
      <PayPalProvider>
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
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/article/:articleId" element={<Article />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </PayPalProvider>
    </ChakraUIProvider>
  );
}

export default App;
