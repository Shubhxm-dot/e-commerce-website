import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 10px; /* Adjust the gap between images */
  width: 100%;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ProductGrid = ({ images }) => {
  return (
    <GridContainer>
      {images.map((image, index) => (
        <ProductImage key={index} src={image} alt={`Product ${index + 1}`} />
      ))}
    </GridContainer>
  );
};

export default ProductGrid;
