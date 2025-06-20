import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import CurrentDay from './Components/CurrentDay';
import ForecastDay from './Components/ForecastDay';
//import dotenv from 'dotenv';

function App() {
  //dotenv.config();
  const [data, setData] = useState([]);
  const [city, setCity] = useState('');
  const [inputValue, setInputValue] = useState('');

  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(apiKey);

  useEffect(() => {
    axios.get('http://api.weatherapi.com/v1/forecast.json?key='+apiKey+'&q='+city+'&days=7&aqi=no&alerts=no').then(
      response => {
        setData(response.data);
      }
    ).catch(error=> {
      console.error(error);
    });
    console.log(data);
  }, [city]);

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  return (
    <>
        <input placeholder='Search city' onChange={handleCityChange}></input>
        <button onClick={() => setCity(inputValue)}>Search</button>
      <CurrentDay/>
      <div id={'forecastContent'}>
        <ForecastDay/>
        <ForecastDay/>
        <ForecastDay/>
        <ForecastDay/>
        <ForecastDay/>
        <ForecastDay/>
      </div>
    </>
  )
}

export default App
