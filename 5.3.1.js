
// 5.3.1
let result = +prompt('Введите число', '')
if (typeof +result !== 'number' || isNaN(result)) {
  alert('Упс, кажется, вы ошиблись')
} else if (result % 2 === 0) {
  console.log('Число четное')
} else {
  console.log('число нечетное')
}

console.log(result);