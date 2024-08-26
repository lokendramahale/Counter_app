import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  
  ul {
  background: transparent;
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
        margin-left: 400px;

  }
  li {
    margin: 0 1rem;
    margin-left:50px;
  }
  a {
  font-family: arial;  
  text-decoration: none;
    color: #343535;
    // font-weight: bold;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </Nav>
  );
};

export default Navbar;
