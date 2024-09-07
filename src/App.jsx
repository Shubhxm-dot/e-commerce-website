import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Tops from "./pages/Tops"; // Ensure this import is correct
import Bottoms from "./pages/Bottoms"; // Ensure this import is correct
import Dresses from "./pages/Dresses"; // Ensure this import is correct
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyles from "./GlobalStyles"; // Ensure this path is correct

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          marginTop: "120px", // Adjust if necessary
        }}
      >
        <main style={{ flex: "1" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/tops" element={<Tops />} />
            <Route path="/products/bottoms" element={<Bottoms />} />
            <Route path="/products/dresses" element={<Dresses />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
