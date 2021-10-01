import React from 'react';
import styled, { keyframes } from 'styled-components';

const WrapLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30vh;
`;
const loadingAnimation = keyframes`
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
`;
const LoadingDisplay = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    background: #021857;
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 14px;
    animation: ${loadingAnimation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  & div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  & div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  & div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
`;
const Message = styled.div`
  color: #021857;
`;

const Loading = (props) => {
  return (
    <>
      <WrapLoading>
        <LoadingDisplay>
          <div></div>
          <div></div>
          <div></div>
        </LoadingDisplay>
        <Message>{props.message}</Message>
      </WrapLoading>
    </>
  );
};

export default Loading;
