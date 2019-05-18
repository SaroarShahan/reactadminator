import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import SidebarMenu from './SidebarMenu';
import Footer from './Footer';
import {Base} from './Base';

const Sidebar = props => {
  const [isOpen, setIsOpen] = useState(true);
  const w = window.innerWidth;

  useEffect(() => {
    if (w <= 768) setIsOpen(false);
  }, [w]);

  window.addEventListener('resize', () => {
    if (w <= 768) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  });

  const handleClick = () => {
    if (w <= 768) setIsOpen(false);
  };

  const {children, location, history} = props;

  return (
    <>
      <Wrapper isActive={isOpen}>
        <SidebarMenu
          location={location}
          history={history}
          isActive={isOpen}
          onClick={handleClick}
        />
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
  display: flex;
  transition: all 0.4s ease 0s;
  position: relative;
`;

const BodyContent = styled.div`
  padding-left: ${props => (props.isActive ? '15.5rem' : '0rem')};
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
`;

const MainConatiner = styled.main`
  width: 100%;
  background-color: #f9fafb;
  padding: 1.5rem;
  min-height: calc(100vh - 7.8rem);
`;
