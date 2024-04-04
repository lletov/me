import logo from './logo.svg';
import './App.css';


import { fetchWeatherApi } from 'openmeteo';
import { useState, useEffect } from 'react';
import { Description } from './components/Description';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contacts } from './components/Contacts';
import { Geo } from './components/Geo';
import { Weather } from './components/Weather';
import { Language } from './components/Language';

// Weather Code	Description
// 0	Clear sky
// 1, 2, 3	Mainly clear, partly cloudy, and overcast
// 45, 48	Fog and depositing rime fog
// 51, 53, 55	Drizzle: Light, moderate, and dense intensity
// 56, 57	Freezing Drizzle: Light and dense intensity
// 61, 63, 65	Rain: Slight, moderate and heavy intensity
// 66, 67	Freezing Rain: Light and heavy intensity
// 71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
// 77	Snow grains
// 80, 81, 82	Rain showers: Slight, moderate, and violent
// 85, 86	Snow showers slight and heavy

function App() {
  const [temperature, setTemperature] = useState(null)
  async function getWeather(){
    const params = {
      // Moscow
      "latitude": 55.762242, 
      "longitude": 37.639008,
      "current": ["temperature_2m", "weather_code"]
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);
    
    // Helper function to form time ranges
    const range = (start, stop, step) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
    
    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];
    
    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const timezone = response.timezone();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const latitude = response.latitude();
    const longitude = response.longitude();
    
    const current = response.current();
    
    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
      current: {
        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
        temperature2m: current.variables(0).value(),
        weatherCode: current.variables(1).value(),
      },
    
    };
    console.log(weatherData.current)
    setTemperature(Math.round(weatherData.current.temperature2m))
  }
  useEffect(() => {
    getWeather()
    },[]);
  return (
    <div className="App">
      <div className='main-content'>
        <Header/>
        <Description/>
        <Skills/>
        <Experience/>
      </div>
      <div className='secondary-content'>
        <Projects/>
        <Education/>
        <Contacts/>
        <div className='footer-content'>
          <Geo/>
          <Weather temp={temperature}/>
          <Language/>
        </div>
        
      </div>
    </div>
  );
}

export default App;

