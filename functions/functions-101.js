let celciusToFahrenheit = function(celcius) {
  let result = ((celcius - 32) * 5) / 9;
  return result;
};

let value = celciusToFahrenheit(32);

console.log(value);
