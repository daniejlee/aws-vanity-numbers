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


let newArr = [];
for(let i = 0; i < phoneNumber.length; i++){
  console.log(phoneNumber[i])
  newArr.push(phoneToLetters[phoneNumber[i]])
}
console.log('array of possible letter combinations: ',newArr)
