import { useState, useRef } from "react";
import "./App.css";
import axios from "axios";
import WeatherInformations from "./components/WeatherInformations/WeatherInformations";
import WeatherInformations5days from "./components/WeatherInformations5days/WeatherInformations5days";

function App() {
  const [weather, setWeather] = useState();
  const [weather5days, setWeather5days] = useState();

  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "b3cfe41c562116ef4b168c4591d08ba9";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`;
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=pt_br`;

    const apiInfo = await axios.get(url);
    const apiInfo5days = await axios.get(url5days);

    console.log(apiInfo5days.data);
    setWeather5days(apiInfo5days.data);
    setWeather(apiInfo.data);
  }
  return (
    <div className="Conteiner">
      <h1>DevClub Previção do tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite sua cidade..." />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations weather={weather} />}
      {weather5days && <WeatherInformations5days weather5days={weather5days} />}
    </div>
  );
}
export default App;
