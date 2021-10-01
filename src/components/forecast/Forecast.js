import React from 'react';
import {
  Container,
  Location,
  Time,
  InfoWrap,
  LeftInfo,
  RightInfo,
  Image,
  Temp,
  WeatherState,
  WrapSubInfo,
  Title,
  SubInfo,
  FutureWrap,
  DayItem,
  Day,
} from './Forecast.styled.js';

const Forecast = ({ weather }) => {
  const today = new Date();
  const dayOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',

    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const nextDay = weather.nextDay.slice(1, 6);
  return (
    <Container>
      <Location>{weather.name}</Location>
      <Time>
        {dayOfWeek[today.getDay(0)] +
          ', ' +
          today.getDate() +
          ' ' +
          months[today.getMonth()]}
      </Time>
      <InfoWrap>
        <LeftInfo>
          <Image
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          />
          <div>
            <Temp size="150" weight="700">
              {Math.trunc(weather.temp)}
            </Temp>
            <WeatherState>{weather.status}</WeatherState>
          </div>
        </LeftInfo>
        <RightInfo>
          <WrapSubInfo>
            <Temp size="20" weight="700">
              {Math.trunc(weather.tempMax)}
            </Temp>
            <Title>High</Title>
          </WrapSubInfo>
          <WrapSubInfo>
            <SubInfo>{weather.wind}m/s</SubInfo>
            <Title>Wind</Title>
          </WrapSubInfo>
          <WrapSubInfo>
            <SubInfo>
              {new Date(
                weather.sunrise * 1000
              ).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </SubInfo>
            <Title>Sunrise</Title>
          </WrapSubInfo>
          <WrapSubInfo>
            <Temp size="20" weight="700">
              {Math.trunc(weather.tempMin)}
            </Temp>
            <Title>Low</Title>
          </WrapSubInfo>
          <WrapSubInfo>
            <SubInfo>{weather.humidity}%</SubInfo>
            <Title>Humidity</Title>
          </WrapSubInfo>
          <WrapSubInfo>
            <SubInfo>
              {new Date(
                weather.sunset * 1000
              ).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </SubInfo>
            <Title>Sunset</Title>
          </WrapSubInfo>
        </RightInfo>
      </InfoWrap>
      <FutureWrap>
        {nextDay.map((day, index) => {
          let date = new Date();
          date.setDate(today.getDate() + index + 1);
          return (
            <DayItem key={index}>
              <Day>
                {date.getDate()}/{date.getMonth() + 1}
              </Day>
              <div>
                <Image
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                />
              </div>
              <div>
                <Temp size="20" weight="800">
                  {Math.trunc(day.temp.day)}
                </Temp>
              </div>
            </DayItem>
          );
        })}
      </FutureWrap>
    </Container>
  );
};

export default Forecast;
