// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const keyMap = buildKeyMap(str)
  let count = 0
  let char = ''

  for (let key in keyMap) {
    if (keyMap[key] > count) {
      count = keyMap[key]
      char = key
    }
  }

  return char
}

const buildKeyMap = (str) => {
  const keyMap = {}

  for (let char of str) {
    keyMap[char] = keyMap[char] + 1 || 1
  }

  return keyMap
}