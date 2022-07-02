const LinearSearchIndex = (numbers, findNumber) => {
	for (let index = 0; index < numbers.length; index++) {
		// iterate over the list
		if (numbers[index] === findNumber) {
			// the rule that we want to apply
			return index
		}
	}

	return -1
}

module.exports = LinearSearchIndex
