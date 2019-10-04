const string = 'my name is Finn'

/**
 * Strings are not arrays, so they do not have array methods.
 * However, they are an awful lot like arrays: they are collections
 * of letters, and we can access each letter by its index:
 *
 * const city = "Chicago";
 * city[3] // 'c'
 *
 * If we want to use an array method, such as map, on a string,
 * we can convert the string to an array by splitting it up.
 *
 * const city = 'New York'
 * city.split(' ') // ['New', 'York']
 *
 * We can then turn that array back into a string by joining it:
 *
 * const country = ['Costa', 'Rica']
 * country.join(' ') // 'Costa Rica'
 *
 * Notice that split and join both take a delimiter as an argument.
 * So, to split a string to an array of each individual character,
 * we pass in an empty string, like so:
 *
 * const dog = 'Spot'
 * dog.split('') // ['S', 'p', 'o', 't']
 */

const spongebobify = str => {
  return str
    .split('')
    .map((letter, idx) => {
      if (idx % 2 === 1) return letter.toUpperCase()
      return letter.toLowerCase()
    })
    .join('')
}

console.log(spongebobify(string))
