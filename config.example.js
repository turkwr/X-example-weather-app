module.exports = {
    consumer: {
        token: "CONSUMER_TOKEN",
        secret: "CONSUMER_SECRET",
    },
    authentication: {
        bearer: {
            token: "BEARER_TOKEN",
        },
        access: {
            token: "ACCESS_TOKEN",
            secret: "ACCESS_SECRET"
        },
    },
    oauth2: {
        clientId: "OAUTH2_CLIENT_ID",
        clientSecret: "OAUTH2_CLIENT_SECRET",
    },
    weather: {
        City: "CITY_NAME", // Example: Izmir, Ankara, London, Paris, etc. 
        Language: "LANGUAGE", // Example: tr, en, fr, etc.
        key: "OPENWEATHERMAP_API_KEY",
    },
}