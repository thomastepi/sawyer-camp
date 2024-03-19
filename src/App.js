import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SharedLayout from "./pages/SharedLayout";
import { Landing, Team } from "./components";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landing />
                <Team />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
