const request = require('request');

var getWeather = (lat, long, callback) => {
	request({
	url: `https://api.darksky.net/forecast/00998ddd1762b56b16ffb7a17810e30e/${lat},${long}`,
	json: true
 }, (error, response, body) => {
	if(!error && response.statusCode === 200) {
		callback(undefined, {
			temperature: body.currently.temperature,
			apparentTemperatur: body.currently.apparentTemperature
		});
	} else {
		callback('Unable to fetch weather');
	}
 });
};

module.exports.getWeather = getWeather;
