import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Copyright &copy; 2017. Developed by SaroarShahan. </p>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  color: #fff;
  background-color: #2c3e50;
  text-align: center;
`;
