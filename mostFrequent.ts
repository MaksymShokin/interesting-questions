const mostFrequent = (arr: (number | number[])[]) => {
  const flatArray = arr.flat(Infinity) 

  const map: Record<string, number> = {}

  flatArray.forEach(val => {
    if (typeof val !== 'number') {
      return
    }
    if (val in map) {
      map[val] += 1
    } else {
      map[val] = 1
    }
  })

  const highest = Object.entries(map).reduce((acc, val) => {
    if (val[1] > acc[1]) {
      return val
    } else {
      return acc
    }
  },['', 0])

  return {[highest[0]]: highest[1]}
} 

console.log(mostFrequent([3,3,4,[3424,423,3], [3], 4]))
console.log(mostFrequent([[1, 2, 2], [3, 3, 3], 3, 2, 2]));