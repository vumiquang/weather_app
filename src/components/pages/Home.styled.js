import styled, { keyframes } from 'styled-components';

export const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Wrap = styled.div`
  height: calc(70vh);
  margin: 0 auto;
  margin-top: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 50px;
  text-shadow: 0 0 4px black;
  }
`;
const cloudXAnimation = keyframes`
  0%{
    transform:translateX(0);
  }
  // 50%{
  //   transform: translateX(30px);
  // }
  100%{
    transform:translateX(100%);
  }
`;
const cloudYAnimation = keyframes`
  0%{
    transform:translateY(0);
  }
  50%{
    transform: translateY(30px);
  }
  100%{
    transform:translateY(0);
  }
`;

export const Cloud = styled.div`
  opacity: 0.2;
  color: #021857;
  position: absolute !important;
  top: ${({ top }) => top + '%'};
  left: ${({ left }) => left + '%'};
  animation: ${cloudXAnimation} 8s linear ${({ delay }) => delay + 's'} infinite
    alternate;

  & svg {
    animation: ${cloudYAnimation} 10s linear ${({ delay }) => delay + 's'}
      infinite alternate;
    font-size: ${({ size }) => size * 1.5 + 'px'};
  }
`;
