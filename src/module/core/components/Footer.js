import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Copyright &copy; {new Date().getFullYear()} Developed by
        <DevelopedLink
          href="https://www.facebook.com/SaroarShahan"
          rel="noopener noreferrer"
          target="_blank">
          SaroarShahan
        </DevelopedLink>
        .
      </p>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7c8695;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.0625);
  text-align: center;
  font-size: 1rem;
  min-height: 4rem;
`;

const DevelopedLink = styled.a`
  display: inline-block;
  margin-left: 0.3rem;

  &:hover {
    color: #7c8695;
  }
`;
