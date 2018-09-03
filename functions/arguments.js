let tip = function(total, tipPercent = 0.2) {
  let percent = tipPercent * 100;
  let value = total * tipPercent;
  return `A ${percent}% tip on ${total} is a ${value} `;
};

let result = tip(40, 0.25);
console.log(result);
