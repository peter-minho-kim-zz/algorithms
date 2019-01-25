// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  const keyMap = buildKeyMap(A)

  for (let key in keyMap) {
    if (keyMap[key] % 2 !== 0) {
      return parseInt(key)
    }
  }
}

const buildKeyMap = (arr) => {
  const keyMap = {}

  arr.forEach((num) => {
    keyMap[num] = keyMap[num] + 1 || 1
  })

  return keyMap
}