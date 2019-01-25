// You are given an array(which will have a length of at least 3, 
// but could be very large) containing integers.The array is either 
// entirely comprised of odd integers or entirely comprised of even 
// integers except for a single integer N.Write a method that takes 
// the array as an argument and returns this "outlier" N.

function findOutlier(integers) {
  let even = 0
  let odd = 0

  for (let i = 0; i < integers.length; i++) {
    integers[i] % 2 === 0 ? even++ : odd++
  }

  if (even > odd) {
    for (let j = 0; j < integers.length; j++) {
      if (integers[j] % 2 !== 0) {
        return integers[j]
      }
    }
  } else {
    for (let k = 0; k < integers.length; k++) {
      if (integers[k] % 2 === 0) {
        return integers[k]
      }
    }
  }
}