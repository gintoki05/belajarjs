let min = 1;
let max = 5;
let num = function(makeGuess) {
  let guess = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(guess);
  return makeGuess === guess;
};

let value = num(1);
console.log(value);
