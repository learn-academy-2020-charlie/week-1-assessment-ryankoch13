// ASSESSMENT 1: Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// var temp1 = 35
// var temp2 = 350
// var temp3 = 212

// const bpCheck = (temp) => {
//     if (temp > 212) {
//         return `${temp} is above boiling point`;
//     } else if (temp == 212) {
//         return `${temp} is at boiling point`;
//     } else if (temp < 212) {
//         return `${temp} is below boiling point`}
// }
// console.log(bpCheck(35));
// console.log(bpCheck(temp2));
// console.log(bpCheck(temp3));


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

// var myNumbers1 = [3, 7, 0, 6, -9]

// const multFive = (array) => {
//     for( i=0 ; i<array.length ; i++ ) {
//         array[i] = array[i] * 5;
//     }
//     return array;
// }

// console.log(multFive(myNumbers1))

// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

// var myNumbers2 = [8, -7, 0, 6, 2]

// const mapFive = (array) => {
//     let newarr = array.map(value => value * 5);
//     array = newarr;
//     return array;
// }

// console.log(mapFive(myNumbers2));


// --------------------4) Create a function that takes in an array and returns an array with only the values at odd indexes.
// Use the test variables provided below. Expected output: [ "Chai tea", "Mocha", "Double espresso" ]

// var coffeeRun = ["Vanilla latte", "Chai tea", "Black coffee", "Mocha", "Americano", "Double espresso"]

// const oddIndex = (array) => {
//     let newArr = array.filter((value, index, arr) => {
//         if (index % 2 !== 0) {
//             return value;
//             }   
//         })
//     return newArr;
// }
// console.log(oddIndex(coffeeRun))

// --------------------5) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

const noVowel = (string) => {
    if (typeof string == "string") {
    strArr = string.split("");
    let noVowelArr = strArr.filter(value => value !== "a" && value !== "e" && value!== "i"  && value !== "o"  && value !== "u" && value !== "A" && value !== "E" && value!== "I"  && value !== "O"  && value !== "U");
    noVowelStr = noVowelArr.join("");
    return noVowelStr;
    } else {
    return "Not a string!!";
    }
}
console.log(noVowel(stringWithVowels1))
console.log(noVowel(stringWithVowels2))


// --------------------6) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var stringWithVowels3 = true
var stringWithVowels4 = 42
var stringWithVowels5 = "CodingIsGreat"

console.log(noVowel(stringWithVowels3))
console.log(noVowel(stringWithVowels4))
console.log(noVowel(stringWithVowels5))