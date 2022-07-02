const LinearSearchIndex = require('../LinearSearch')

describe('Linear Search', () => {
	it.each([
		{ array: [1, 2, 4, 5, 10, 45], target: 1, expected: 0 },
		{ array: [1, 2, 4, 5, 10, 45], target: 2, expected: 1 },
		{ array: [1, 2, 4, 5, 10, 45], target: 4, expected: 2 },
		{ array: [1, 2, 4, 5, 10, 45], target: 5, expected: 3 },
		{ array: [1, 2, 4, 5, 10, 45], target: 10, expected: 4 },
		{ array: [1, 2, 4, 5, 10, 45], target: 45, expected: 5 },
	])('Should find $target in $array', ({ array, target, expected }) => {
		expect.assertions(1)

		expect(LinearSearchIndex(array, target)).toBe(expected)
	})

	it('Should return -1 if not found', () => {
		expect.assertions(1)

		expect(LinearSearchIndex([1, 2, 4, 5, 10, 45], 50)).toBe(-1)
	})
})
