const InsertionSort = (array, comparator) => {
	const newArray = [...array]

	for (let i = 1; i < newArray.length; i++) {
		const key = newArray[i]
		let j = i - 1

		while (j >= 0 && comparator(newArray[j], key)) {
			newArray[j + 1] = newArray[j]
			j -= 1
		}

		newArray[j + 1] = key
	}

	return newArray
}

module.exports = InsertionSort
