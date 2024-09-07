import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1px 00px;
  margin:1px 0px 20px 0px;
  border-bottom: 1px solid #e5e5e5;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; 
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const TabBar = styled.div`
  background-color: #f8f8f8;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 60px; 
  width: 100%;
  z-index: 999; 
`;

const TabLink = styled(Link)`
  margin: 0 20px;
  color: grey;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <>
      <Navbar>
        <h1>GlamourFits</h1>
        <NavLinks>
          <Link to="/"><b>Home</b></Link>
          <Link to="/products"><b>Products</b></Link>
          <Link to="/cart"><b>Cart</b></Link>
          <Link to="/login"><b>Login</b></Link>
        </NavLinks>
      </Navbar>

      
      <TabBar>
        <TabLink to="/products/tops"><b>Tops</b></TabLink>
        <TabLink to="/products/bottoms"><b>Bottoms</b></TabLink>
        <TabLink to="/products/dresses"><b>Dresses</b></TabLink>
      </TabBar>
    </>
  );
};

export default Header;
