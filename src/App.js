import logo from './logo.svg';
import './App.css';

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
import { fetchWeatherData } from './methods';

function App() {
  const [temperature, setTemperature] = useState(null)
  const [weatherCode, setWeatherCode] = useState(null)

  async function getWeather(){
    try {
      let res = await fetchWeatherData()
      setTemperature(Math.round(res.current.temperature2m))
      setWeatherCode(res.current.weatherCode)
    }
    catch (err) {
      console.log('fetchWeatherData() error: ' + err)
      // setTemperature('--')
      // setWeatherCode('--')
    }
  }
  useEffect(() => {
    getWeather()
    const timeoutId = setInterval(() => {
      getWeather();
    }, 900000);
    
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
      </div>
      <div className='footer-content'>
          <Geo/>
          <Weather temp={temperature} weatherCode={weatherCode}/>
          <Language/>
        </div>
    </div>
  );
}

export default App;

