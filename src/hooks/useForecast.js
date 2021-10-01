import { useRef, useState } from 'react';

const useForecast = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const ref = useRef(0);
  ref.current += 1;
  console.log(ref);
  const getDataCurrent = async (searchLocation) => {
    let query = '';
    if (typeof searchLocation === 'string') {
      if (searchLocation.trim() === '') {
        setError('No place found!');
        setLoading(false);
        return;
      }
      query = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        searchLocation
      )}&units=metric&appid=35895e6d21cae06df5f29137facd2c87`;
    } else {
      query = `https://api.openweathermap.org/data/2.5/weather?lat=${searchLocation.lat}&lon=${searchLocation.long}&appid=35895e6d21cae06df5f29137facd2c87&units=metric`;
    }
    const res = await fetch(query);
    if (res.status === 404) {
      setError('No place found!');
      setLoading(false);
      return;
    }
    if (!res.ok) {
      setError('Somethings went wrong!');
      setLoading(false);
      return;
    }
    const dataCurent = await res.json();
    return dataCurent;
  };

  const getDataDaily = async (dataCurrent) => {
    const queryDaily = `https://api.openweathermap.org/data/2.5/onecall?lat=${dataCurrent.coord.lat}&lon=${dataCurrent.coord.lon}&exclude=hourly&appid=35895e6d21cae06df5f29137facd2c87&units=metric`;

    const resDaily = await fetch(queryDaily);

    if (!resDaily.ok) {
      setError('Somethings went wrong!');
      setLoading(false);
      return;
    }

    const dataDaily = await resDaily.json();

    return dataDaily;
  };

  const fetchWeather = async (searchLocation) => {
    setLoading(true);
    setError(null);

    const dataCurrent = await getDataCurrent(searchLocation);

    if (!dataCurrent) {
      return;
    }
    const dataDaily = await getDataDaily(dataCurrent);
    if (!dataDaily) {
      return;
    }
    console.log(dataCurrent);
    const data = {
      name: dataCurrent.name,
      sunrise: dataCurrent.sys.sunrise,
      sunset: dataCurrent.sys.sunset,
      temp: dataCurrent.main.temp,
      tempMin: dataCurrent.main.temp_min,
      tempMax: dataCurrent.main.temp_max,
      humidity: dataCurrent.main.humidity,
      wind: dataCurrent.wind.speed,
      status: dataCurrent.weather[0].main,
      icon: dataCurrent.weather[0].icon,
      timeZone: dataCurrent.timezone,
      nextDay: dataDaily.daily,
    };
    setData(data);
    setLoading(false);
  };

  return {
    data,
    error,
    loading,
    fetchWeather,
    setError,
  };
};

export default useForecast;
