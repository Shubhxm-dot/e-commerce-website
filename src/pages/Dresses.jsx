import React from "react";
import ProductGrid from "../components/ProductGrid";

const Dresses = () => {
  // Replace with the paths to your actual images
  const dressesImages = [
    "/src/assets/images/dress1.jpeg",
    "/src/assets/images/dress2.jpeg",
    "/src/assets/images/dress3.jpeg",
    "/src/assets/images/dress4.jpeg",
    "/src/assets/images/dress5.jpeg",
    "/src/assets/images/dress6.jpeg",
  ];

  return (
    <div>
      <h2>This Are Best Dresses Picks</h2>
      <ProductGrid images={dressesImages} />
    </div>
  );
};

export default Dresses;
