import { useState, useEffect } from "react";
import TempCard from "../components/tempCard";

function convertToCelsius(temp) {
  return Math.round(temp - 273);
}

function CurrentWeather() {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `${process.env.REACT_APP_BASE_API}/weather?q=Kathmandu&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setWeatherData(res);
        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setIsLoading(false); // Set loading to false even if there is an error
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Display loading message while data is being fetched
  }

  return (
    <div className="body">
      <TempCard
        temp={convertToCelsius(weatherData.main.temp)}
        wind={weatherData.wind.speed}
        humidity={weatherData.main.humidity}
        status={weatherData.weather[0].main}
        icon={weatherData.weather[0].icon}
      />
    </div>
  );
}

export default CurrentWeather;
