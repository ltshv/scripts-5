
//5.4.3
let str = "Hello";

function reverseString (str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");

    return joinArray;
}
console.log(reverseString(str))