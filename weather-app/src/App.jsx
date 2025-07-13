import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import CurrentDay from './Components/CurrentDay';
import ForecastDay from './Components/ForecastDay';
//import dotenv from 'dotenv';

function App() {
  //dotenv.config();
  const days = '7';
  const [currentDay, setCurrentDay] = useState();
  const [forecastDays, setForecastDays] = useState([]);
  const [city, setCity] = useState('london');
  const [inputValue, setInputValue] = useState('');
  const test = true;

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios.get('http://api.weatherapi.com/v1/forecast.json?key='+apiKey+'&q='+city+'&days='+days+'&aqi=no&alerts=no').then(
      response => {
        const apiInfo = response.data;
        let forecastData = [];
        let current;
        let i = 0;
        apiInfo.forecast.forecastday.forEach(forecast => {
          if(i < 1){
            current={
              'date': forecast.date,
              'avgtemp': Math.floor(forecast.day.avgtemp_c),
              'maxtemp': Math.floor(forecast.day.maxtemp_c),
              'mintemp': Math.floor(forecast.day.mintemp_c),
              'maxwind': Math.floor(forecast.day.maxwind_kph),
              'chance_of_rain': Math.floor(forecast.day.daily_chance_of_rain),
              'totalprecip': Math.floor(forecast.day.totalprecip_mm),
              'icon': forecast.day.condition.icon
            }
          }
          else{
            const element = {
              'date': forecast.date,
              'maxtemp': Math.floor(forecast.day.maxtemp_c),
              'mintemp': Math.floor(forecast.day.mintemp_c),
              'chance_of_rain': Math.floor(forecast.day.daily_chance_of_rain),
              'totalprecip': Math.floor(forecast.day.totalprecip_mm),
              'icon': forecast.day.condition.icon
            };
            forecastData.push(element);
          }
          i++;
        });
        setCurrentDay(current);
        setForecastDays(forecastData);
        console.log(current);
        console.log(forecastData);
      }
    ).catch(error=> {
      console.error(error);
    });
  }, [city]);

  const handleCityChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <>
        <input placeholder='Search city' onChange={handleCityChange}></input>
        <button onClick={() => setCity(inputValue)}>Search</button>
        {currentDay 
        ? <CurrentDay city={city} date={currentDay.date} avgtemp={currentDay.avgtemp} maxtemp={currentDay.maxtemp} mintemp={currentDay.mintemp} maxwind={currentDay.maxwind} chance_of_rain={currentDay.chance_of_rain} totalprecip={currentDay.totalprecip} icon={currentDay.icon}/> 
        : null}
      
      <div id={'forecast-container'}>
        {forecastDays.length > 0
          ? forecastDays.map((day, key) => 
            <ForecastDay date={day.date} maxtemp={day.maxtemp} mintemp={day.mintemp} chance_of_rain={day.chance_of_rain} totalprecip={day.totalprecip} icon={day.icon}/>
          )
        : null}
      </div>
    </>
  )
}

export default App
