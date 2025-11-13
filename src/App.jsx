import { useState, useEffect } from 'react'
import Search from './components/search/Search'
import WeatherCard from './components/weather-card/WeatherCard'
import Temperature from './components/temperature/Temperature';
import { fetchWeatherByCity } from './services/weatherApi'
import './app.scss';

function App() {
  const [city, setCity] = useState("Lisbon");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!city) return;

    const controller = new AbortController();

    async function getWeather () {
      setLoading(true);
      setError("");
      try {
        const data = await fetchWeatherByCity(city, controller.signal);
        setWeather(data);
        console.log(data);
      } catch (err) {
        if(err.name !== "CanceledError")
          setError("City not found or network error");
      } finally {
        setLoading(false)
      }
    }

    getWeather();
    return () => controller.abort();

  }, [city]);

  return (
    <div className="app">
      <div className="app__left">
        <Search onSearch = {setCity}/>
        {weather && !loading && <Temperature data={weather}/>}
      </div>
      <div className="app__right">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {weather && !loading && <WeatherCard data={weather}/>}
      </div>
    </div>
  )
}

export default App