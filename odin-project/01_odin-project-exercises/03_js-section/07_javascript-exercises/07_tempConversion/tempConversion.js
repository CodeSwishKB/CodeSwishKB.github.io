const convertToCelsius = function(fahrenheit) {
  // let converted = ((fahrenheit - 32) * (5 / 9))
  // let rounded = Math.round(converted * 10) / 10 
  // return rounded
  return Math.round(((fahrenheit - 32) * (5 /9)) * 10) / 10
};

const convertToFahrenheit = function(celsius) {
  // let converted = (celsius * (5 / 9) + 32)
  // let rounded = Math.round(converted * 10) / 10
  // return rounded 
  return Math.round((celsius * (5 / 9) + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
