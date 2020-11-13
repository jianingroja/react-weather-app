import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=Beijing`
      )
      .then((data) => {
        setWeather(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${input}`
      )
      .then((data) => {
        setWeather(data.data);
        setInput("");
        console.log(
          `${data.data.location.name}'s weather is presented for you!`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="search">
        <input onChange={handleInput} type="text" value={input} />
        <button onClick={handleSearch}>Search</button>
      </div>
      {weather && (
        <>
          <div className="img">
            <img src={weather.current.condition.icon} alt="" />
          </div>
          <div className="info">
            <h2>Temperature: {weather.current.temp_c} ℃</h2>
            <h3>Feels like: {weather.current.feelslike_c} ℃</h3>
            <h2>City: {weather.location.name}</h2>
            <h2>Country: {weather.location.country}</h2>
            <h2>Local Time: {weather.location.localtime}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
