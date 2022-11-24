//5.6.7
let arr = [0, "0", 2, 1, "1", true, false, "false", 4, true, null, 2, 3, 'number', 4, 8];
let arrNumbers = (arr.filter(item => typeof item === "number"));
let arrNumbersLenght = arrNumbers.length;

console.log('Числа в массиве: ' + arrNumbers);

let evenNumbersArray = arrNumbers.filter(function(elem) {
    if (elem % 2 == 0 && elem != 0) {
        return true;
    } else {
        return false;
    }
});

let evenNumbersLenght = evenNumbersArray.length;
console.log('Четных чисел: ' + evenNumbersLenght);

let oddNumbersArray = arrNumbers.filter(function(elem) {
    if (elem % 2 !== 0 && elem != 0) {
        return true;
    } else {
        return false;
    }
});

let oddNumbersLenght = oddNumbersArray.length;
console.log('Нечетных чисел: ' + oddNumbersLenght);

let zeroNumbersArray = arrNumbers.filter(function(elem) {
    if (elem == 0) {
        return true;
    } else {
        return false;
    }
});

let zeroNumbersLenght = zeroNumbersArray.length;
console.log('Количество нолей: ' + zeroNumbersLenght);