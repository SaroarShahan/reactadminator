import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const SidebarMenu = ({location, isActive}) => {
  return (
    <Menu isActive={isActive}>
      <SidebarLogo>
        <SidebarLogoText>ReAdmin</SidebarLogoText>
      </SidebarLogo>
      <Ul>
        <Link to="/readminator/dashboard">
          <Li>
            <Wrapper
              isActive={location.pathname.includes('/readminator/dashboard')}>
              Dashboard
            </Wrapper>
          </Li>
        </Link>
        <Link to="/readminator/calendar">
          <Li>
            <Wrapper
              isActive={location.pathname.includes('/readminator/calendar')}>
              Calendar
            </Wrapper>
          </Li>
        </Link>
        <Link to="/readminator/charts">
          <Li>
            <Wrapper
              isActive={location.pathname.includes('/readminator/charts')}>
              Charts
            </Wrapper>
          </Li>
        </Link>
        <Link to="/readminator/forms">
          <Li>
            <Wrapper
              isActive={location.pathname.includes('/readminator/forms')}>
              Forms
            </Wrapper>
          </Li>
        </Link>

        <Link to="/readminator/map">
          <Li>
            <Wrapper isActive={location.pathname.includes('/readminator/map')}>
              Map
            </Wrapper>
          </Li>
        </Link>
      </Ul>
    </Menu>
  );
};

export default SidebarMenu;

const Menu = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  width: 15.5rem;
  background-color: #fff;
  border-right: 1px solid rgba(0, 0, 0, 0.0625);
  transform: ${props => !props.isActive && 'translateX(-100%)'};
  z-index: 99;
`;

const SidebarLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0625);
`;

const SidebarLogoText = styled.h3`
  color: #313435;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.2rem;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0rem;
    transition: all 400ms ease;
    &-track {
      -webkit-box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
    }
    &-thumb {
      border-radius: 0rem;
      background-color: #5f5f5f;
    }
  }
  &:hover {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
  }
`;
const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: #72777a;
  height: 3.3rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 1.2rem;
  border-left: 0.5rem;
  font-weight: 500;
  background-color: ${props => props.isActive && ' #cacaca'};
  color: ${props => props.isActive && ' #313435'};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: ${props => props.isActive && '.3rem'};
    height: 100%;
    background-color: #5f5f5f;
  }
`;
