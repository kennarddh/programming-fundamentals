const findPosition = (numbers, findNumber) => {
	/* Binary search implementation */
	/* Make sure that the number is sorted */
	numbers.sort((a, b) => a - b)

	let left = 0
	let right = numbers.length - 1

	while (left <= right) {
		const middle = left + parseInt((right - left) / 2, 10)

		if (numbers[middle] === findNumber) {
			return middle
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

const main = () => {
	const numbers = [4, 5, 2, 1, 10, 45]

	// find number 10 position inside numbers array.
	console.log(findPosition(numbers, 10))
}

main()
