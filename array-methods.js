// const veggies = [
//   { name: 'tomato', quantity: 3 },
//   { name: 'lettuce', quantity: 17 },
//   { name: 'carrot', quantity: 9 },
//   { name: 'pumpkin', quantity: 13 },
// ]

// let counter = 0

// const lowQuantity = veggies.filter(veggie => {
//   counter++
//   return veggie.quantity < 10
// })

// console.log('COUNTER', counter)

// // We're hoping for:
// // [ { name: 'tomato', quantity: 3 }, { name: 'carrot', quantity: 9 } ]
// console.log(lowQuantity)

// WORKS
const arr = [1, 2, 3]
  .map(num => num * 2)
  .filter(num => num < 5)

// ERROR
const arr = [1, 2, 3]
  .forEach(num => num * 2)
  .filter(num => num < 5)

console.log(arr2)
