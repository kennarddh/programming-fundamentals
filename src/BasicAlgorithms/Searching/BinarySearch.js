const BinarySearchIndex = (numbers, findNumber) => {
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

module.exports = BinarySearchIndex
