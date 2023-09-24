import React, { useState } from "react"
import './WeatherApp.css'
import search_icon from '../Assets/search1-png.webp'
import cloud_icon from '../Assets/cloud.png'
import wind_icon from '../Assets/wind2-removebg-preview.png'
import humid_icon from '../Assets/icons8-humidity-50.png'
import drizzle_icon from '../Assets/icons8-drizzle-64.png'
import rain_icon from '../Assets/icons8-rain-60.png'
import snow_icon from '../Assets/icons8-snow-64.png'
import clear_icon from '../Assets/icons8-sun-64.png'


const WeatherApp = () => {

    let api_key = "add17c6a828be160a201e65cf4192090";

    const [wicon, setWicon] = useState(cloud_icon);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value==="")
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let data = await response.json();
         const humidity = document.getElementsByClassName("humidity-percent")
         const windrate = document.getElementsByClassName("wind-rate")
         const temperature = document.getElementsByClassName("weather-temp")
         const location = document.getElementsByClassName("weather-location")


         humidity[0].innerHTML = data.main.humidity + " % ";
         windrate[0].innerHTML = Math.floor(data.wind.speed) + " km/h ";
         temperature[0].innerHTML = Math.floor(data.main.temp) + " °C ";
         location[0].innerHTML = data.name

         if(data.weather[0].icon==="01d" || data.weather[0].icon==="o1n")
         {
            setWicon(clear_icon)
         }
         else if(data.weather[0].icon==="02d" || data.weather[0].icon==="o2n")
         {
            setWicon(cloud_icon)
         }
         else if(data.weather[0].icon==="03d" || data.weather[0].icon==="o3n")
         {
            setWicon(drizzle_icon)
         }
         else if(data.weather[0].icon==="04d" || data.weather[0].icon==="o4n")
         {
            setWicon(drizzle_icon)
         }
         else if(data.weather[0].icon==="09d" || data.weather[0].icon==="o9n")
         {
            setWicon(rain_icon)
         }
         else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
         {
            setWicon(rain_icon)
         }
         else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
         {
            setWicon(snow_icon)
         }
         else
         {
            setWicon(clear_icon)
         }

    }

    return (
        <div>
            <div className="container">
                <div className="top-bar">
                    <input type="text" className="cityInput" placeholder="Search" />
                    <div className="search-icon" onClick={() => {search()}}>
                        <img src={search_icon} alt="" />
                    </div>
                </div>
                <div className="weather-image">
                    <img src={wicon} alt="" />
                </div>
                <div className="weather-temp">24°C</div>
                <div className="weather-location">London</div>
                <div className="data-container">
                    <div className="element">
                        <img src={humid_icon} alt="" className="icon" id="humid" />
                        <div className="data">
                            <div className="humidity-percent">64%</div>
                            <div className="text">Humidity</div>
                        </div>
                    </div>
                    <div className="element">
                        <img src={wind_icon} alt="" className="icon" id="wind" />
                        <div className="data">
                            <div className="wind-rate">18 km/h</div>
                            <div className="text">Wind Speed</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp