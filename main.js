const fetch = require('node-fetch')
let phoneNumber = '5746859'
const phoneToLetters = {
  // ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
  '0': '0',
  '1': '1',
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
}


let lettersArray = [];
for(let i = 0; i < phoneNumber.length; i++){
  // console.log(phoneNumber[i])
  lettersArray.push(phoneToLetters[phoneNumber[i]])
}
console.log('array of possible letter combinations: ',lettersArray)

//generate possible words
let hugeArray = [];
for(let i = 0; i < lettersArray.length; i++){

}



/*
0000000
0000001
0000002
0000003

NEXT

0000010
0000011
0000012
0000013

0000020
0000021
0000022
0000023

NEXT

0000100
0000101
0000102
0000103

0000110
0000111
0000112
0000113

0000120
0000121
0000122
0000123

0000200
0000201
0000202
0000203

0000210
0000211
0000212
0000213

0000220
0000221
0000222
0000223




*/



// ANAGRAM FINDER

// let getAnagram = letters => {
//   console.log(letters)

//     fetch(`http://www.anagramica.com/all/:${letters}`, {
//     method: 'GET',
//     mode: 'no-cors',
//   }
//   )
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// getAnagram('kjfgaapogld')




// digit_map = {
//   '2': 'abc',
//   '3': 'def',
//   '4': 'ghi',
//   '5': 'jkl',
//   '6': 'mno',
//   '7': 'pqrs',
//   '8': 'tuv',
//   '9': 'wxyz',
// }

// let word_numbers = (input) =>{
//   input = str(input)
//  let ret = ['']
//   for char in input:
//   letters = digit_map.get(char, '')
//   ret = [prefix + letter for prefix in ret for letter in letters]
//   return ret
// }
