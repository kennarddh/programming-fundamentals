const generateSortedRandomNumbers = n => {
	const numbers = []

	while (numbers.length < n) {
		const randomNumber = Math.floor(Math.random() * 1000 * n)
		if (numbers.indexOf(randomNumber) === -1) {
			numbers.push(randomNumber)
		}
	}
	numbers.sort()
	return numbers
}

const binarySearch = (numbers, findNumber) => {
	let left = 0
	let right = numbers.length - 1
	let count = 0

	while (left <= right) {
		const middle = left + Math.floor((right - left) / 2)
		count += 1

		if (numbers[middle] === findNumber) {
			return { position: middle, count }
		}

		if (numbers[middle] < findNumber) {
			left = middle + 1
		}

		if (numbers[middle] > findNumber) {
			right = middle - 1
		}
	}

	return -1
}

const linearSearch = (numbers, findNumber) => {
	let count = 0
	for (let index = 0; index < numbers.length; index++) {
		count += 1
		// iterate over the list
		if (numbers[index] === findNumber) {
			// the rule that we want to apply
			return { position: index, count }
		}
	}
}

const numbers = generateSortedRandomNumbers(100000)
const findNumber = numbers[0]

/**
 * Numbers is sorted in ascending form.
 * All numbers is unique.
 */

console.log(binarySearch(numbers, findNumber))
console.log(linearSearch(numbers, findNumber))
