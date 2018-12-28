console.log("hello world main.js")

// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0 ) {
        console.log(currentNumber + " ChickenMonkey")
    } else if (currentNumber % 5 === 0) {
        console.log(currentNumber + " Chicken")
    } else if (currentNumber % 7 === 0 ) {
        console.log(currentNumber + " Monkey")
    }
}


console.log("battle of the bands")

let bandNumber = 1

let takeNumber = function (bandname) {
    console.log(bandNumber + ". " + bandname );
    bandNumber++;
}

let scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

let under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console
