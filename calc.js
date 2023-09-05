function appendCharacter(character) {
    document.getElementById("result").value += character;
}

function deleteLastCharacter() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculate() {
    var result = document.getElementById("result").value;
    var answer = eval(result);
    document.getElementById("result").value = answer;
}

function calculateSquareRoot() {
    var result = document.getElementById("result").value;
    var answer = Math.sqrt(eval(result));
    document.getElementById("result").value = answer;
}

function calculateLog() {
    var result = document.getElementById("result").value;
    var answer = Math.log10(eval(result));
    document.getElementById("result").value = answer;
}

function calculatePower() {
    var result = document.getElementById("result").value;
    var numbers = result.split("^");
    var base = parseFloat(numbers[0]);
    var exponent = parseFloat(numbers[1]);
    var answer = Math.pow(base, exponent);
    document.getElementById("result").value = answer;
}

function calculateNaturalLog() {
    var result = document.getElementById("result").value;
    var answer = Math.log(eval(result));
    document.getElementById("result").value = answer;
}