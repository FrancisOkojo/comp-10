// Math in JS

// JS understand many math ops:  + - * /
// JS can perform math on variables
let x = 1;
let y = 4;
let z = x - y;
console.log(z);

document.getElementById("add-btn").addEventListener("click", addNums);

function addNums() {
  // input
  var num1 = Number(document.getElementById("num-1-input").value);
  var num2 = Number(document.getElementById("num-2-input").value);

  // process
  var answer = num1 + num2;

  // output
  document.getElementById("add-answer").innerHTML = answer;
}