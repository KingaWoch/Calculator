
const previousNumber = document.querySelector(".previousNumber p");
const mathSign = document.querySelector(".mathSign");
const currentNumber = document.querySelector(".currentNumber");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");


let result = "";

function displayNumbers() {
   if(this.textContent === "." && currentNumber.innerHTML.includes(".")) return;
   if(this.textContent === "." && currentNumber.innerHTML === "") return currentNumber.innerHTML = "0.";

    currentNumber.innerHTML += this.textContent;
}

function operate() {

    if(currentNumber.innerHTML === "" && this.textContent === "-") {
        currentNumber.innerHTML = "-";
        return;
    }

    else if (currentNumber.innerHTML ==="") {
        return;
    }

    if(mathSign.innerHTML !== "") {
        showResult();
    }
    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML = "";
}

function showResult() {
    if(previousNumber.innerHTML === "" || currentNumber.innerHTML === "") return;

    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = mathSign.innerHTML;

    switch(operator) {
        case "+":
            result = a + b;
        break;
        case "-":
            result = b - a;
        break;
        case "x":
            result = a * b;
        break;
        case "/":
            result = b / a;
        break;
    }

    currentNumber.innerHTML = result;
    previousNumber.innerHTML = "";
    mathSign.innerHTML = "";
}

function clearScreen() {
    result = "";
    currentNumber.innerHTML = "";
    previousNumber.innerHTML = "";
    mathSign.innerHTML = "";
}



numbers.forEach( (button) => button.addEventListener("click", displayNumbers) );

operators.forEach( (button) => button.addEventListener("click", operate) );

equals.addEventListener("click", showResult);

clear.addEventListener("click", clearScreen);

