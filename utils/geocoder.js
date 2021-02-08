const NodeGeocoder = require('node-geocoder');

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  httpAdapter: 'https',
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null,
};

console.log('process.env.GEOCODER_PROVIDER', process.env.GEOCODER_PROVIDER);
console.log('process.env.GEOCODER_API_KEY', process.env.GEOCODER_API_KEY);
// console.log('process.env', process.env);

const geoCoder = NodeGeocoder(options);

module.exports = geoCoder;
