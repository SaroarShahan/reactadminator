import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import SidebarMenu from './SidebarMenu';
import Footer from './Footer';
import {Base} from './Base';

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
        <SidebarMenu location={location} isActive={isOpen} />
        <BodyContent isActive={isOpen}>
          <div>
            <Header isOpen={isOpen} onHamburger={setIsOpen} />
            <Base />
          </div>
          <MainConatiner>{children}</MainConatiner>
          <Footer />
        </BodyContent>
      </Wrapper>
    </>
  );
};

export default withRouter(Sidebar);

const Wrapper = styled.div`
  /* display: grid;
  grid-template-columns: ${props =>
    props.isActive ? ' 20.5rem 1fr' : '0rem 1fr'}; */

    display: flex;
  transition: all 0.4s ease 0s;
  position: relative;
`;

const BodyContent = styled.div`
  /* display: grid;
  grid-template-rows: 6rem auto 6rem; */
  padding-left: ${props => (props.isActive ? '20.5rem' : '0rem')};
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const MainConatiner = styled.main`
  width: 100%;
  background-color: #f9fafb;
  padding: 2rem;
  min-height: calc(100vh - 12rem);
`;
