// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let userInput = document.querySelector("#userInput1");
let copy = document.querySelector("#copy");
let output = document.querySelector("#output");

// add an event listener on the target element
copy.addEventListener("click", copyText);

// callback function to handle event
function copyText(event) {
  output.textContent = userInput.value;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let userInput2 = document.querySelector("#userInput2");

// add an event listener on the target element
userInput2.addEventListener("input", displayText);

// create output element
let section = document.querySelector("#inputEventExample");
let output2 = document.createElement("div");
output2.setAttribute("class", "output");
section.append(output2);

// callback function to handle event
function displayText(event) {
  output2.textContent = userInput2.value;
}

