Array.prototype.customMap = function(callback) {
  const oldArray = this
  const newArray = []

  for (let i = 0; i < oldArray.length; i++) {
    const item = oldArray[i]
    const newItem = callback(item)

    newArray.push(newItem)
  }

  return newArray
}


const multiplyByTwo = [1,2,3,4].customMap((num => num  * 2))
console.log(multiplyByTwo)