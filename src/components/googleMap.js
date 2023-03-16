const axios = require("axios");

function getMap() {

    const options = {
        method: 'GET',
        url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
        params: { address: '21 devonshire road nw7 1ne', language: 'en' },
        headers: {
            'X-RapidAPI-Key': 'f73b328648mshb951bb7e2b043b9p1f299ajsnd32e56f7470f',
            'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

export default getMap;