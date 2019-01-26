// Implement the function unique_in_order which takes as argument a 
// sequence and returns a list of items without any elements with 
// the same value next to each other and preserving the original order of elements.

var uniqueInOrder = function (iterable) {
  const result = []

  for (let item of iterable) {
    if (item !== result[result.length - 1]) {
      result.push(item)
    }
  }

  return result
}