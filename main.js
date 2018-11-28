console.log("hello world main.js")
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