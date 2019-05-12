import React from 'react';
import styled from 'styled-components';
import {MdFormatIndentDecrease} from 'react-icons/md';

const Header = ({onHamburger, isOpen}) => {
  return (
    <HeaderWrapper>
      <Hamburger onClick={() => onHamburger(!isOpen)}>
        <MdFormatIndentDecrease />
      </Hamburger>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0625);
  padding: 0 1rem;
`;

const Hamburger = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  line-height: 1;
`;
