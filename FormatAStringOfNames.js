// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by 
// commas except for the last two names, which should be separated by an ampersand.

function list(names) {
  const nameList = []

  names.forEach((obj) => {
    nameList.push(obj.name)
  })

  let result = ''

  for (let i = 0; i < nameList.length; i++) {
    result +=
      i === nameList.length - 2 ? nameList[i] + ' & ' :
        i === nameList.length - 1 ? nameList[i] :
          nameList[i] + ', '

  }

  return result
}

// list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])
// returns 'Bart, Lisa & Maggie'

// list([{ name: 'Bart' }, { name: 'Lisa' }])
// returns 'Bart & Lisa'

// list([{ name: 'Bart' }])
// returns 'Bart'

// list([])
// returns ''