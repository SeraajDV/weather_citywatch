const api = {
  key: "bc12083e70d2d22298c2df1cec7101d9",
  base: "https://api.openweathermap.org/data/2.5/"
};
const fetchWeatherData = async (cityProp) => {
  try {
    const response = await fetch(
      `${api.base}weather?q=${cityProp}&units=metric&APPID=${api.key}`
    );
    let weatherData = await response.json();
    return weatherData;
  } catch (errors) {
    console.log(errors);
  }
};

module.exports = {fetchWeatherData}