import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import SidebarMenu from './SidebarMenu';
import Footer from './Footer';

const Sidebar = props => {
  const [isOpen, setIsOpen] = useState(true);

  window.addEventListener('resize', () => {
    const w = window.innerWidth;
    if (w <= 768) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  });

  const {children, location} = props;
  return (
    <>
      <Wrapper isActive={isOpen}>
        <SidebarMenu location={location} />
        <BodyContent>
          <Header isOpen={isOpen} onHamburger={setIsOpen} />
          <MainConatiner>{children}</MainConatiner>
          <Footer />
        </BodyContent>
      </Wrapper>
    </>
  );
};

export default withRouter(Sidebar);

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.isActive ? ' 20.5rem 1fr' : '0rem 1fr'};
  transition: all 0.4s ease 0s;
`;

const BodyContent = styled.div`
  display: grid;
  grid-template-rows: 6rem auto 6rem;
`;

const MainConatiner = styled.main`
  width: 100%;
  background-color: #f9fafb;
  padding: 2rem;
`;
