import React from 'react';
import styled from 'styled-components';
import {Image404} from '../../assets/svg/404';

export function PageNotFound(props) {
  return (
    <Wrapper>
      <ImageContainer>
        <Image404 />
      </ImageContainer>
      <p className="text-xl text-center font-medium">Oops! Page not found</p>
      <div className="mt-3 rounded-full border px-3 py-1 bg-grey-dark">
        <Button onClick={() => props.history.replace('/')}>Go Back</Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 18rem);
`;

const Button = styled.button`
  color: '#fff';
  font-weight: 600;
`;
const ImageContainer = styled.div`
  height: 20rem;
  width: 20rem;
  padding: 2.5rem;
  display: flex;
  align-items: center;
`;
