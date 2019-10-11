// SOLUTION
function reduceEntries(arr) {
  return arr.reduce((total, current) => {
    total[current[0]] = current[1]
    return total
  }, {})
}

module.exports = reduceEntries
