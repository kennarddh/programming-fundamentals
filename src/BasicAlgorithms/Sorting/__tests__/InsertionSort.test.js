const InsertionSort = require('../InsertionSort')

describe('Insertion Sort', () => {
	it.each([
		{
			arrays: [10, -10, 2, 3, 6, 7],
			output: [-10, 2, 3, 6, 7, 10],
			comparator: (a, b) => a > b,
		},
		{
			arrays: [10, -10, 3, 2, 7, 6, -20],
			output: [-20, -10, 2, 3, 6, 7, 10],
			comparator: (a, b) => a > b,
		},
	])('Sort $arrays Ascending', ({ arrays, comparator, output }) => {
		expect.assertions(1)

		expect(InsertionSort(arrays, comparator)).toEqual(output)
	})

	it.each([
		{
			arrays: [10, -10, 2, 3, 6, 7],
			output: [10, 7, 6, 3, 2, -10],
			comparator: (a, b) => a < b,
		},
		{
			arrays: [10, -10, 3, 2, 7, 6, -20],
			output: [10, 7, 6, 3, 2, -10, -20],
			comparator: (a, b) => a < b,
		},
	])('Sort $arrays Descending', ({ arrays, comparator, output }) => {
		expect.assertions(1)

		expect(InsertionSort(arrays, comparator)).toEqual(output)
	})

	it.each([
		{
			arrays: [
				{
					name: 'Vincent',
					score: 98,
				},
				{
					name: 'Kennardh',
					score: 100,
				},
				{
					name: 'Jayaku Briliantio',
					score: 100,
				},
				{
					name: 'Vincent',
					score: 70,
				},
			],
			output: [
				{ name: 'Jayaku Briliantio', score: 100 },
				{ name: 'Kennardh', score: 100 },
				{ name: 'Vincent', score: 98 },
				{ name: 'Vincent', score: 70 },
			],
			comparator: (studentA, studentB) => {
				if (studentA.name < studentB.name) return false

				if (studentA.name === studentB.name) {
					if (studentA.score < studentB.score) return true

					return false
				}

				return true
			},
		},
	])('Sort Students $arrays Ascending', ({ arrays, comparator, output }) => {
		expect.assertions(1)

		expect(InsertionSort(arrays, comparator)).toEqual(output)
	})
})
