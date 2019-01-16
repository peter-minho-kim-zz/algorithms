// Remove duplicate values from an array. The array may consist of string, numbers, objects, and array.

const removeDupes = (arr) => {
  const unique = [...new Set(arr.map((item) => JSON.stringify(item)))]

  return unique.map((item) => {
    return JSON.parse(item)
  })
}

arr = [1, 1, 2, 2, 3, 3, 4, 4, { a: 1 }, { a: 1 }, ['a', 1], ['a', 1]]

removeDupes(arr)

// returns [ 1, 2, 3, 4, { a: 1 }, [ 'a', 1 ] ]