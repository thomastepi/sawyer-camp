import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Blog from "./pages/Blog/Blog";
import Projects from "./pages/ProjectsOverview/Projects";
import OurWork from "./pages/OurWork/OurWork";
import ContactUs from "./pages/ContactUs/ContactUs";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import Donate from "./pages/Donate/Donate";
import Paypal from "./pages/Paypal/Paypal";
import Membership from "./pages/Membership/Membership";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Article from "./pages/BlogArticlePage/Article";
import Volunteer from "./pages/Volunteer/Volunteer";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Products from "./pages/Products/Products";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import MainLayout from "./layouts/MainLayout";
import { PayPalProvider, ChakraUIProvider } from "./providers";

function App() {
  return (
    <ChakraUIProvider>
      <PayPalProvider>
        <Router>
          <ScrollToTop />
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route
                path="/project/:projectId"
                element={<ProjectDetail />}
                errorElement={<ErrorPage />}
              />
              <Route path="/donate" element={<Donate />} />
              <Route path="/paypal" element={<Paypal />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:categoryName" element={<CategoryPage />} />
              <Route path="/article/:articleId" element={<Article />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </MainLayout>
        </Router>
      </PayPalProvider>
    </ChakraUIProvider>
  );
}

export default App;
