

let text = "";
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(print);

document.getElementById("demo").innerHTML = text;

function print(item, index) {
  text += index + ": " + item + "<br>"; 
}