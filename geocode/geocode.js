const request = require('request');
const yargs = require('yargs');

var geocodeAddress = (address, callback) => {
	var address = encodeURIComponent(address);
	console.log(address);
	request({
	url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
	json: true
}, (error, response, body) => {
	if (error){
		callback('unable to connect to google servers');

	} else if(body.status === 'ZERO_RESULTS') {
		callback('Unable to find that address.');

	} else if(body.status === 'OK') {
		callback(undefined, {
			address: body.results[0].formatted_address,
			latitude: body.results[0].geometry.location.lat,
			longitude: body.results[0].geometry.location.lng
		});
		
	}
});

}





module.exports.geocodeAddress = geocodeAddress;
//00998ddd1762b56b16ffb7a17810e30e