import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  max-width: 830px;
  margin: 0 auto;
  padding-top: 20px;
  color: #4a4a4a;
  padding-bottom: 20px;
  @media (max-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 1200px) {
    width: 80%;
  }
`;

export const Location = styled.div`
  font-size: 50px;
  font-weight: bold;
  @media (max-width: 500px) {
    text-align: center;
  }
`;
export const Time = styled.div`
  font-size: 15px;
  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  margin-top: 10px;
  & > div {
    height: 180px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 767px) {
    & > div {
      height: 160px;
    }
  }
`;

export const LeftInfo = styled.div`
  position: relative;
  padding-left: 30px;
  display: flex;
  border-right: 1px solid #4a4a4a;
  & > div {
    display: flex;
    flex-direction: column;
    padding: 0 30px;
  }

  @media (max-width: 1200px) {
    border-right: none;
    padding-left: 0px;
  }
  @media (max-width: 767px) {
    & span {
      font-size: 125px;
    }
  }

  @media (max-width: 500px) {
    & > div {
      padding-left: 0;
    }
  }
`;

export const RightInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  height: 100%;
  width: auto;
`;

export const Temp = styled.span`
  font-size: ${({ size }) => size + 'px'};
  font-weight: ${({ weight }) => weight};
  position: relative;

  &:after {
    content: 'o';
    position: absolute;
    top: ${({ size }) => '-' + size / 9 + 'px'};
    right: ${({ size }) => '-' + size / 6 + 'px'};
    font-size: ${({ size }) => size / 3 + 'px'};
    font-weight: ${({ weight }) => weight};
  }

  @media (max-width: 500px) {
    font-size: ${({ size }) => {
      if (size === 150) return 130 + 'px';
    }};
  }
`;

export const WeatherState = styled.div`
  font-size: 30px;
  position: absolute;
  bottom: 0;
`;

export const WrapSubInfo = styled.div`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

export const Title = styled.div``;
export const SubInfo = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const FutureWrap = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;
  margin-top: 30px;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
  @media (max-width: 767px) {
    justify-content: space-around;
  }
`;
export const DayItem = styled.div`
  min-width: 100px;
  margin: 0 10px;
  height: 150px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #c1c1c1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  & img {
    height: 70px;
    width: auto;
  }

  @media (max-width: 767px) {
    min-width: 140px;
    height: 160px;
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    min-width: 100px;
    height: 150px;
    margin-bottom: 20px;
  }
`;
export const Day = styled.div`
  padding: 5px 0;
  font-weight: bold;
  border-bottom: 1px solid #c1c1c1;
`;
