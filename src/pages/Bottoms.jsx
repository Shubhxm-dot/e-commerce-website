import React from "react";
import ProductGrid from "../components/ProductGrid";

const Bottoms = () => {
  const bottomsImages = [
    "/src/assets/images/bottom1.jpeg",
    "/src/assets/images/bottom2.jpeg",
    "/src/assets/images/bottom3.jpeg",
    "/src/assets/images/bottom4.jpeg",
    "/src/assets/images/bottom5.jpeg",
    "/src/assets/images/bottom6.jpeg",
  ];

  return (
    <div>
      <h2>This Are Best Bottoms Picks</h2>
      <ProductGrid images={bottomsImages} />
    </div>
  );
};

export default Bottoms;
