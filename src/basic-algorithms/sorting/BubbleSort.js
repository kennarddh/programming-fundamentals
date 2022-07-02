const BubbleSort = (arrays, comparator) => {
	const newArrays = [...arrays]

	for (let i = 0; i < newArrays.length; i++) {
		for (let y = 0; y < newArrays.length - 1; y++) {
			if (comparator(newArrays[y], newArrays[y + 1])) {
				;[newArrays[y], newArrays[y + 1]] = [
					newArrays[y + 1],
					newArrays[y],
				]
			}
		}
	}

	return newArrays
}

module.exports = BubbleSort
