import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  // background: white;
  color: black;
  text-align: center;
  padding: 2px;
  background: transparent;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1></h1>
    </HeaderWrapper>
  );
};

export default Header;
