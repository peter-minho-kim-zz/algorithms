// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  // Solution 1
  // return str.repeat(num)

  // Solution 2
  let answer = ''

  for (let i = 0; i < num; i++) {
    answer += str
  }

  return answer
}

repeatStringNumTimes("abc", 3);

// repeatStringNumTimes("*", 3) should return "***".
// repeatStringNumTimes("abc", 3) should return "abcabcabc".
// repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
// repeatStringNumTimes("abc", 1) should return "abc".
// repeatStringNumTimes("*", 8) should return "********".
// repeatStringNumTimes("abc", -2) should return "".