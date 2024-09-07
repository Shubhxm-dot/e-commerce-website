import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Tops from "./pages/Tops"; 
import Bottoms from "./pages/Bottoms";
import Dresses from "./pages/Dresses"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyles from "./GlobalStyles"; 
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
          marginTop: "120px", 
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
