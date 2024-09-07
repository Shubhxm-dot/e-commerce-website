import React from "react";
import ProductGrid from "../components/ProductGrid";

const Home = () => {
  const homeImages = [
    "/src/assets/images/product1home.jpeg",
    "/src/assets/images/product2home.jpeg",
    "/src/assets/images/product3home.jpeg",
    "/src/assets/images/product4home.jpeg",
    "/src/assets/images/product5home.jpeg",
    "/src/assets/images/product6home.jpeg",
    "/src/assets/images/product7home.jpeg",
    "/src/assets/images/product8home.jpeg",
    "/src/assets/images/product9home.jpeg",
  ];

  return (
    <div>
     <center> <h1>GlamourFits: Premium Fashion, Exclusively for You</h1>
      <p>"Indulge in the best of branded fashion with our exclusive collection!"</p></center>
      <ProductGrid images={homeImages} /> {/* Passing images as props */}
    </div>
  );
};

export default Home;
