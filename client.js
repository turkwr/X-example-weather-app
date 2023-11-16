const { TwitterApi } = require('twitter-api-v2');
const { consumer, authentication, weather } = require('./config');
const moment = require('moment');
moment.locale('tr')

const twitterClient = new TwitterApi({
    appKey: consumer.token,
    appSecret: consumer.secret,
    accessToken: authentication.access.token,
    accessSecret: authentication.access.secret,
});

const getDailyWeather = async () => {

    function getWeatherEmoji(weatherType) {

        if (weatherType === "Clouds") {

            return "☁️"

        } else if (weatherType === "Clear") {

            return "☀️"

        } else if (weatherType === "Rain") {

            return "🌧️"

        } else if (weatherType === "Snow") {

            return "🌨️"

        } else if (weatherType === "Haze") {

            return "🍃"

        } else {

            return "🌤️"

        }

    };

    const Fetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather.City}&appid=${weather.key}&lang=${weather.Language}`).then().catch((err) => {
        console.log(err)
    })
    const Json = await Fetch.json()
    const Temp = Json.main.temp - 273.15
    const Weather = Json.weather[0].description
    const Type = Json.weather[0].main
    const Feels = Json.main.feels_like - 273.15
    const Humidity = Json.main.humidity
    const Wind = Json.wind.speed
    const Max = Json.main.temp_max - 273.15

    const text = `
    ${getWeatherEmoji(Type)} ${weather.City} Weather Status (${moment().format('DD.MM.YYYY')})
    ▫️ Weather: ${Temp.toFixed(1)} °C
    ▫️ Wind: ${Wind} km/s
    ▫️ Status: ${Weather}
    `

twitterClient.v2.tweet(text).then(tweet => {
        console.log(tweet);
    }
    ).catch(error => {
        console.error(error);
    }
    );
    console.log("Send tweet!")
}

getDailyWeather()
