import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: grey;
  padding: 20px;
  text-align: center;
  position: relative; 
  width: 100%;
  bottom: 0;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 E-Commerce. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
