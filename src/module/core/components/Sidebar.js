import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import SidebarMenu from './SidebarMenu';
import Footer from './Footer';

class Sidebar extends Component {
  render() {
    const {children, location} = this.props;
    return (
      <>
        <Wrapper>
          <SidebarMenu location={location} />
          <BodyContent>
            <Header />
            <MainConatiner>{children}</MainConatiner>
            <Footer />
          </BodyContent>
        </Wrapper>
      </>
    );
  }
}

export default withRouter(Sidebar);

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20.5rem 1fr;
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
