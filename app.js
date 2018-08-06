const yargs = require('yargs');
const request = require('request');


const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'address to fetch weather',
			string: true
		}
})
	.help()
	.alias('help', 'h')
	.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	}
	else {
		console.log(results.address);
		weather.getWeather(results.latitude,results.longitude, (errorMessage, weatherResults) => {
		if (errorMessage) {
			console.log(errorMessage);
		} else {
			console.log(`Its currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperatur}`);
	}
});

	}
});


