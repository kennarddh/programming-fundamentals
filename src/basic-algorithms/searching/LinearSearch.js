const findPosition = (numbers, findNumber) => {
	for (let index = 0; index < numbers.length; index++) {
		// iterate over the list
		if (numbers[index] === findNumber) {
			// the rule that we want to apply
			return index
		}
	}
}

const main = () => {
	const numbers = [4, 5, 2, 1, 10, 45]

	// find number 10 position inside numbers array.
	console.log(findPosition(numbers, 10))
}

main()
