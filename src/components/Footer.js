import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: #333;
  color: #fff;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2023 Shoe Store. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;