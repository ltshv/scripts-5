//5.6.6
let arr = [0, "0", 0, 1, "1", true, false, "false", true];

let duplicates = [...arr]
newArr.forEach((item) => {
    const i = duplicates.indexOf(item)
    duplicates = duplicates
      .slice(0, i)
      .concat(duplicates.slice(i + 1, duplicates.length))
})

let duplicatesLenght = duplicates.length;

console.log(duplicates);
if (duplicatesLenght > 1) {
    console.log(true)
} else {
    console.log(false)
}