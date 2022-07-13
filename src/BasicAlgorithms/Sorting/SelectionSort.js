const SelectionSort = (arrays, comparator) => {
	const newArrays = [...arrays]

	for (let i = 0; i < newArrays.length; i++) {
		let key = i

		for (let y = i; y < newArrays.length; y++) {
			if (comparator(newArrays[key], newArrays[y])) {
				key = y
			}
		}

		;[newArrays[key], newArrays[i]] = [newArrays[i], newArrays[key]]
	}

	console.log(newArrays)

	return newArrays
}

module.exports = SelectionSort
