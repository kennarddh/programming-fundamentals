const GenerateSortedRandomNumbers = n => {
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

module.exports = GenerateSortedRandomNumbers
