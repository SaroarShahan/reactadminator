import React from 'react';
import styled from 'styled-components';

const BoxWrapper = props => {
  return <Container {...props}>{props.children}</Container>;
};

export default BoxWrapper;

const Container = styled.div`
  padding: 2rem;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05),
    0 1px 3px 0 rgba(63, 63, 68, 0.15);
`;
