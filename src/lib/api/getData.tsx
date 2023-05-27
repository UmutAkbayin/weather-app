const api_key = process.env.OPEN_WEATHER_KEY;

export type weatherData = {
  id: number,
  temp: number,
  description: string,
  humidity: number,
  windspeed: number,
  icon: string,
};

export async function getData(city: string) {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
  const json = await data.json();
  const filterdResult = {
    id: json.id,
    temp: json.main.temp - 273.15,
    description: json.weather[0].description,
    humidity: json.main.humidity,
    windspeed: json.wind.speed,
    icon: json.weather[0].icon,
  }
  return filterdResult;
}