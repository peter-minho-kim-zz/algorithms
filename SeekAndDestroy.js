// You will be provided with an initial array(the first argument 
// in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the 
// same value as these arguments.

function destroyer(arr) {
  const answer = []
  const args = []

  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i])
  }

  arr.forEach((item) => {
    if (!args.includes(item)) {
      answer.push(item)
    }
  })

  return answer
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// destroyer([2, 3, 2, 3], 2, 3) should return [].
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
// destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].