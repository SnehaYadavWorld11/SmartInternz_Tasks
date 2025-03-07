// 1. Declare age and check if it's an adult (No user input)
let age = 25;
let isAdult = age >= 18;
document.getElementById("isAdult").innerText = "Is Adult: " + isAdult;

// 2. Given x = 10 and y = 5, perform operations (No user input)
let x = 10, y = 5;
document.getElementById("addition").innerText = "Addition: " + (x + y);
document.getElementById("multiplication").innerText = "Multiplication: " + (x * y);
document.getElementById("modulus").innerText = "Modulus: " + (x % y);

// 3. Take user input to check if a number is even or odd
let n = parseInt(prompt("Enter a number to check if it's even or odd:"));
let isEven = (n % 2 === 0) ? "Even" : "Odd";
document.getElementById("evenOdd").innerText = `Number ${n} is: ${isEven}`;

// 4. Store numbers from 1 to 5 in an array (Fixed values, no user input)
let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}
document.getElementById("numbersArray").innerText = "Numbers array: " + numbers.join(", ");

// 5. Take user input to calculate the square of a number
function square(num) {
    return num * num;
}
let userNum = parseInt(prompt("Enter a number to find its square:"));
document.getElementById("squareResult").innerText = "Square of " + userNum + " is: " + square(userNum);
