// 1st problem...............


// write  a funtion where input is a number and output will be 
// number multiplay by 3 than add 10 than diveded by 2 and lastly substract by 5.

function mindGame(anyNumber) {
    if (anyNumber < 0) {
        return "plese input a positive number"
    }
    else if (typeof (anyNumber) !== "number") {
        return "plese input a number"
    }
    let result = (((anyNumber * 3) + 10) / 2) - 5;
    return result;
}
let resultOfMindgame = mindGame('22');
// console.log(resultOfMindgame);



// 2nd problem.............

// write a funtion  which input a string and give output will be  total number of characters in the String and if total number of characters is even than show "even" or show "odd"
let a_string = "oliullah";
function evenOdd(anystring) {
    if (typeof (anystring) !== "string") {
        return "plese input a string"
    }
    const countstring = anystring.length;
    if (countstring % 2 == 0) {
        return "even"
    }
    else {
        return "odd"
    }
}
let resultOfEvenOdd = evenOdd(a_string);
// console.log(resultOfEvenOdd);






// 3rd problem

//write a funtion which receive a number and output will be 
//1. 1st difference between the input value and 7.
//2.If this difference is smaller than 7, you must return the subtraction.
//3.Otherwise you must return double of the input....





function isLGSeven(a_number) {
    if (typeof (a_number) !== "number") {
        return "plese input a number"
    }
    let difference = a_number - 7;

    if (difference < 7) {
        return a_number - 7;
    }
    else {
        return a_number * 2;
    }
}
const SevenLessOrBig = isLGSeven(15);
// console.log(SevenLessOrBig);


// 4th problem

// write a funtion which input an arrey of numbers and output will be show how many negetive numbers in this arrey
let arrPositiveNegetive = [-4, -9, -5, -33, -55];
function findingBadData(arreyOfNumbers) {
    if (Array.isArray(arreyOfNumbers) !== true) {
        return "please input an array"
    }
    let countNegetive = 0;
    for (let i = 0; i < arreyOfNumbers.length; i++) {
        let index = arreyOfNumbers[i];
        if (index < 0) {
            countNegetive++;
        }
    }
    return countNegetive;
}
let countingBadData = findingBadData(arrPositiveNegetive);
// console.log(countingBadData);


// 5th problem

// write a funtion where i input three numbers james of three friends and output will be total of friend1James*21 ,friend2James*32 and friend3James*43. and lastly if total is more than 2000 then output will be total subtraction by 2000;

function gemsToDiamond(friend1James, friend2James, friend3James) {
    if (typeof (friend1James) !== "number" || typeof (friend2James) !== "number" || typeof (friend3James) !== "number") {
        return "please type a number"
    }
    const convertoDimond = (friend1James * 21) + (friend2James * 32) + (friend3James * 43);
    if (convertoDimond >= 2000) {
        return convertoDimond - 2000;
    }
    return convertoDimond;

}
let inputJemes = gemsToDiamond(100, 5,5);
// console.log(inputJemes);

