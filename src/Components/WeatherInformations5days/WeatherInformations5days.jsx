import "./WeatherInformations5days.css";

function WeatherInformations5days({ weather5days }) {
  console.log(weather5days);

  let dailyForecast = {};

  for (let forecast of weather5days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  const next5DaysForecast = Object.values(dailyForecast).slice(1, 6);

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });

    return newDate;
  }
  return (
    <div className="wather-container">
      <h3>Previsão proximos 5 dias</h3>
      <div className="weather-list">
        {next5DaysForecast.map((forecast) => (
          <div key={forecast.dt} className="weather-item">
            <p className="forecast-day">{convertDate(forecast)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
            />
            <p className="forecast-Description">
              {forecast.weather[0].description}
            </p>
            <p>
              {Math.round(forecast.main.temp_min)}°C min /{" "}
              {Math.round(forecast.main.temp_max)}°C max
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherInformations5days;
