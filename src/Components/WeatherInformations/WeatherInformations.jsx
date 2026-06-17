import "./WeatherInformations.css";

function WeatherInformations({ weather }) {
  return (
    <div className="wather-container">
      <h2>{weather.name}</h2>
      <div className="wather-info">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        />
        <p className="temperature">{Math.round(weather.main.temp)}°C</p>
      </div>

      <p className="description">{weather.weather[0].description}</p>

      <div className="details">
        <p>Sensação Térmica: {Math.round(weather.main.feels_like)}°C</p>
        <p>Humidade: {weather.main.humidity}%</p>
        <p>Pressão: {weather.main.pressure} hPa</p>
      </div>
    </div>
  );
}

export default WeatherInformations;
