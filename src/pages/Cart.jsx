import React from "react";
import styled from "styled-components";

const CartContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;

const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProductItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ProductCategory = styled.h2`
  margin-top: 20px;
  font-size: 20px;
  color: grey;
`;

const Cart = () => {
  const products = {
    tops: ["Top 1", "Top 2", "Top 3"],
    bottoms: ["Bottom 1", "Bottom 2", "Bottom 3"],
    dresses: ["Dress 1", "Dress 2", "Dress 3"],
  };

  return (
    <CartContainer>
      <ProductCategory>Tops</ProductCategory>
      <ProductList>
        <ProductItem>{products.tops[0]}</ProductItem> {/* Show only the first item */}
      </ProductList>

      <ProductCategory>Bottoms</ProductCategory>
      <ProductList>
        <ProductItem>{products.bottoms[0]}</ProductItem> {/* Show only the first item */}
      </ProductList>

      <ProductCategory>Dresses</ProductCategory>
      <ProductList>
        <ProductItem>{products.dresses[0]}</ProductItem> {/* Show only the first item */}
      </ProductList>
    </CartContainer>
  );
};

export default Cart;
