import styled, { keyframes } from 'styled-components';
export const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
`;
export const BackDrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Wrap = styled.div`
  margin: 0 auto;
  margin-top: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 50px;
  text-shadow: 0 0 4px black;
  }

  @media (max-width:700px){
    font-size: 40px;
  }

  @media (max-width:500px){
    font-size: 30px;
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
