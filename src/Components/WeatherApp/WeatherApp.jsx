import React from "react";
import "./WeatherApp.css";
import search_icon from "../assets/search.png";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";
export const WeatherApp = () => {
  let api_key = "db3cc06f1b544ac3955180559242403";

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }

    let url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${element[0].value}&aqi=no`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-speed");
    const temperature = document.getElementsByClassName("weather-temp");
    const locations = document.getElementsByClassName("weather-location");
    // const [icon, seticon] = useState([]);
    // let icon_url = ""

    // icon_url ="http://" +data.current.condition.icon
    humidity[0].innerHTML = Math.floor(data.current.humidity) + "%";
    wind[0].innerHTML = Math.floor(data.current.wind_kph) + " km/h";
    temperature[0].innerHTML = Math.floor(data.current.temp_c) + " °C";
    locations[0].innerHTML = data.location.name;
    // useEffect(() => {
    //   fetch("https://reqres.in/api/users")
    //     .then((response) => response.json())
    //     .then((resData) => seticon(resData.data));
    // }, []);
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src="" alt="" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>
      <div className="hold">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-speed">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
