import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import {MdSwapHoriz} from 'react-icons/md';
import UserAvatar from '../../../assets/images/saroarshahan.jpg';

const Header = ({onHamburger, isOpen}) => {
  const [isUserOpen, setIsUserOpen] = useState(false);
  let dropdownMenu = useRef(null);

  const showMenu = () => {
    setIsUserOpen(true);
    document.addEventListener('click', closeMenu);
  };

  const closeMenu = event => {
    if (!dropdownMenu.current.contains(event.target)) {
      setIsUserOpen(false);
      document.removeEventListener('click', closeMenu);
    }
  };

  return (
    <HeaderWrapper>
      <Hamburger onClick={() => onHamburger(!isOpen)}>
        <MdSwapHoriz />
      </Hamburger>
      <User onClick={showMenu}>
        <Avatar src={UserAvatar} alt="user avatar" />
        <UserName>Shahan</UserName>

        <Ul isActive={isUserOpen} ref={dropdownMenu}>
          <Li>Logout</Li>
        </Ul>
      </User>
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
  position: fixed;
  width: 100%;
  height: 4rem;
  z-index: 999;
`;

const Hamburger = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  line-height: 0;
`;

const User = styled.div`
  position: fixed;
  right: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const UserName = styled.span`
  padding-left: 0.3rem;
`;

const Ul = styled.ul`
  position: absolute;
  top: 120%;
  right: 0;
  border: 1px solid rgba(0, 0, 0, 0.0625);
  background-color: #fff;
  width: 10rem;
  border-radius: 0.2rem;
  z-index: 999;
  opacity: ${props => (props.isActive ? '1' : '0')};
`;
const Li = styled.li`
  padding: 1rem;
`;
