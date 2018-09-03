let temperature = function(fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    kelvin: ((fahrenheit + 459.67) * 5) / 9,
    celcius: fahrenheit - 32 * (5 / 9)
  };
};

let temps = temperature(74);
console.log(temps);
