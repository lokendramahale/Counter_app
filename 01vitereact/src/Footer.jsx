import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #282c34;
  color: white;
  text-align: center;
  padding: 1rem 0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 My Portfolio. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
