// Reverse the provided string.

function reverseString(str) {
  // Solution 1
  // return str.split('').reverse().join('')

  // Solution 2
  return str.split('').reduce((prev, next) => next + prev)
}

reverseString("hello");

// reverseString("hello") should return a string.
// reverseString("hello") should become "olleh".
// reverseString("Howdy") should become "ydwoH".
// reverseString("Greetings from Earth") should return "htraE morf sgniteerG".