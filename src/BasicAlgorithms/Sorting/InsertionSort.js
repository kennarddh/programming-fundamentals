const InsertionSort = (array, comparator) => {
	const newArray = [...array]

	for (let i = 1; i < newArray.length; i++) {
		const key = newArray[i]

		let y = 1

		while (newArray[i - y] && comparator(newArray[i - y], key)) {
			newArray[i - (y - 1)] = newArray[i - y]

			y += 1
		}

		newArray[i - (y - 1)] = key
	}

	return newArray
}

module.exports = InsertionSort
