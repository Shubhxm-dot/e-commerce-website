import React from "react";
import styled from "styled-components";

const ProductsContainer = styled.div`
  padding: 20px;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: calc(33.333% - 20px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Products = () => {
  const products = [
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$20" },
    { id: 3, name: "Product 3", price: "$30" },
  ];

  return (
    <ProductsContainer>
      <h1>Products</h1>
      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </ProductCard>
        ))}
      </ProductList>
    </ProductsContainer>
  );
};

export default Products;
