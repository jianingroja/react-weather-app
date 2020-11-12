import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=London`
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
    <div>
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
            <h1>CITY: {weather.location.name}</h1>
            <h2>REIGION: {weather.location.region}</h2>
            <h3>LOCALTIME: {weather.location.localtime}</h3>
            <h4>
              It is {weather.current.temp_c} but it feels like{" "}
              {weather.current.feelslike_c}, why...?
            </h4>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
