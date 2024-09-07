import React from "react";
import ProductGrid from "../components/ProductGrid";

const Tops = () => {
  const topsImages = [
    "/src/assets/images/top1.jpeg",
    "/src/assets/images/top2.jpeg",
    "/src/assets/images/top3.jpeg",
    "/src/assets/images/top4.jpeg",
    "/src/assets/images/top5.jpeg",
    "/src/assets/images/top6.jpeg",
  ];

  return (
    <div>
      <h2>This Are Best Tops Picks</h2>
      <ProductGrid images={topsImages} />
    </div>
  );
};

export default Tops;
