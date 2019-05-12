import React from 'react';
import styled from 'styled-components';
import {Image404} from '../../assets/svg/404';

export function PageNotFound(props) {
  return (
    <Wrapper>
      <ImageContainer>
        <Image404 />
      </ImageContainer>
      <Text>Oops! Page not found</Text>
      <ButtonWrapper>
        <Button onClick={() => props.history.replace('/')}>Go Back</Button>
      </ButtonWrapper>
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
const ButtonWrapper = styled.div`
  margin-top: 0.7rem;
  border-radius: 90rem;
  padding: 0.3rem 1.5rem;
  background-color: #0f9aee;
`;
const Button = styled.button`
  color: #fff;
  font-weight: 500;
  font-size: 1.5rem;
`;
const ImageContainer = styled.div`
  height: 20rem;
  width: 20rem;
  padding: 2.5rem;
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1.2rem;
  text-align: center;
  font-weight: 500;
`;
