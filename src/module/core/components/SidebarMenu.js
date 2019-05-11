import React from 'react';
import styled from 'styled-components';

const SidebarMenu = () => {
  return (
    <Menu>
      <h1>ReAdmin</h1>
      <Ul>
        <Li>Dashboard</Li>
        <Li>Calendar</Li>
        <Li>Chat</Li>
        <Li>Charts</Li>
        <Li>Forms</Li>
      </Ul>
    </Menu>
  );
};

export default SidebarMenu;

const Menu = styled.aside`
  background-color: #34495e;
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
      background-color: #9b59b6;
    }
  }
  &:hover {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Li = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: white;
  margin-right: 5px;
`;
