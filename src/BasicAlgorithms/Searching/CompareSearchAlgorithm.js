const GenerateSortedRandomNumbers = require('../../Utils/GenerateSortedRandomNumbers')

const BinarySearch = require('./BinarySearch')
const LinearSearch = require('./LinearSearch')

const numbers = GenerateSortedRandomNumbers(100000)
const findNumber = numbers[0]

/**
 * Numbers is sorted in ascending form.
 * All numbers is unique.
 */

console.log(BinarySearch(numbers, findNumber))
console.log(LinearSearch(numbers, findNumber))
