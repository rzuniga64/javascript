/**
 *  Usees openweathermap.org. You have to signup to get an API key which you need to make calls to this API.
 *  API Key: 6c8cc50864157f6dabf88a171dc8352f
 *  - use of lite-server
 *  - fat arrow functions
 *  - proxy
 *  - promises
 *  - connect to third party service.
 */

import * as ELEMENTS from 'elements.js';
import {Http} from 'http.js';   // Weather service, need .js for SystemJS which will later not be needed.
import {WeatherData, WEATHER_PROXY_HANDLER} from 'weather-data.js';

const APP_ID = '6c8cc50864157f6dabf88a171dc8352f';

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather() {

    const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value.trim();

    if (CITY_NAME.length == 0) {
        return alert('Please enter a city name');
    }

    ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'block';
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'none';
    const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + CITY_NAME + '&units=metric&appid=' + APP_ID;

    // Get back a promise so we need to handle the data we get back.
    Http.fetchData(URL)
        .then(responseData => {
            const WEATHER_DATA = new WeatherData(CITY_NAME, responseData.weather[0].description.toUpperCase());
            const WEATHER_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);
            WEATHER_PROXY.temperature = responseData.main.temp;
            updateWeather(WEATHER_PROXY);
        })
        .catch(error => alert(error));
}

function updateWeather(weatherData) {

    console.log(weatherData);
    ELEMENTS.ELEMENT_WEATHER_CITY.textContent = weatherData.cityName;
    ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description;
    ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature;

    ELEMENTS.ELEMENT_LOADING_TEXT.style.display = 'none';
    ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'block';
}