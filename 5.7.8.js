//5.7.8
let fruits = new Map([

    ["apple", "green"],
  
    ["strawberry", "red"],
  
    ["blueberry",  "blue"],

    ["orange" , "orange"],

    ["lemon", "yellow"],

    ["watermelon", "green-red"],

    ["banana", "yellow"]
  
]);

//только такой метод в голову пришел
for (let fruit of fruits.entries()) {
    console.log(`the color of ${fruit[0]} is ${fruit[1]}`);
}
  