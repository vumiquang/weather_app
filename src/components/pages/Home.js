import React, { useEffect, useRef, useState } from 'react';
import { BackDrop, Wrap, Title, Cloud } from './Home.styled';
import SearchLocationForm from '../form/SearchLocationForm';
import { BsCloud } from 'react-icons/bs';
import useForecast from '../../hooks/useForecast';
import Loading from '../loading/Loading';
import Error from '../error/Error';
import Forecast from '../forecast/Forecast';

const Home = (props) => {
  const [loadingMsg, setLoadingMsg] = useState(
    'Loading your location weather...'
  );
  const { data, loading, error, setError, fetchWeather,setLoading } = useForecast();

  if (data === null) {
    console.log('init weather null');
  }
  const handleSearch = (query) => {
    if (query.trim() === '') {
      setLoadingMsg('Loading your location weather...');
      getYourWeatherLocation();
    } else {
      setLoadingMsg('Loading weather in ' + query);
      fetchWeather(query);
    }
  };

  useEffect(() => {
    getYourWeatherLocation();
  }, []);

  function getYourWeatherLocation() {
    console.log('use effect');
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
    } else {
      console.log(navigator.geolocation.getCurrentPosition);
      navigator.geolocation.getCurrentPosition(
        getLocationSuccess,
        getLocationError
      );
    }
  }

  function getLocationSuccess(location) {
    console.log(' step 2');
    fetchWeather({
      lat: location.coords.latitude,
      long: location.coords.longitude,
    }).then(() => {
      console.log('step 3');
    });
  }

  function getLocationError() {
    setError('Cannot get your location!');
    setLoading(false);
  }

  return (
    <>
      <BackDrop>
        <Cloud size="70" top="10" left="10" delay="0">
          <BsCloud />
        </Cloud>
        <Cloud size="50" top="40" left="70" delay="1">
          <BsCloud />
        </Cloud>
        <Cloud size="60" top="50" left="50" delay="2">
          <BsCloud />
        </Cloud>
        <Cloud size="60" top="60" left="80" delay="0">
          <BsCloud />
        </Cloud>
        <Cloud size="40" top="50" left="30" delay="2">
          <BsCloud />
        </Cloud>
        <Cloud size="70" top="80" left="45" delay="3.5">
          <BsCloud />
        </Cloud>
        <Cloud size="80" top="80" left="85" delay="1">
          <BsCloud />
        </Cloud>
        <Cloud size="50" top="30" left="90" delay="3">
          <BsCloud />
        </Cloud>
        <Cloud size="50" top="0" left="90" delay="0">
          <BsCloud />
        </Cloud>
        <Cloud size="60" top="10" left="30" delay="2">
          <BsCloud />
        </Cloud>
        <Cloud size="50" top="80" left="10" delay="3">
          <BsCloud />
        </Cloud>
      </BackDrop>
      <Wrap>
        <Title>
          Weather<span> FORECAST</span>
        </Title>
        <SearchLocationForm onHandleSearch={handleSearch} />
        {loading && <Loading message={loadingMsg}></Loading>}
        {error && <Error message={error}></Error>}
        {!error && !loading && <Forecast weather={data}></Forecast>}
      </Wrap>
    </>
  );
};

export default Home;
