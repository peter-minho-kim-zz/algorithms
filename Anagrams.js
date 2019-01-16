// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const keyMapA = buildKeyMap(stringA)
  const keyMapB = buildKeyMap(stringB)

  if (Object.keys(keyMapA).length !== Object.keys(keyMapB).length) {
    return false
  }

  for (let key in keyMapA) {
    if (keyMapA[key] !== keyMapB[key]) {
      return false
    }
  }

  return true
}

// Create helper keymap function

const buildKeyMap = (str) => {
  const keyMap = {}

  for (let char of str.toLowerCase().replace(/[^\w]/g, '')) {
    keyMap[char] = keyMap[char] + 1 || 1
  }

  return keyMap
}