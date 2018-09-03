//Global Scope (value)
//Local Scope
//Local Scope

//Global Scope (score)

let value = function(studentScore, totalPossibleScore = 20) {
  let result = (studentScore / totalPossibleScore) * 100;

  if (result >= 90) {
    console.log(`You Got A (${result})`);
  } else if (result >= 80) {
    console.log('You Got B');
  } else if (result >= 70 <= 79) {
    console.log('You Got C');
  } else if (result >= 60 <= 69) {
    console.log('You Got D');
  } else if (result <= 50) {
    console.log('You Got E');
  }
};

let score = value(5);

console.log(score);
