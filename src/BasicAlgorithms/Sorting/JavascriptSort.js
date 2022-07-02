const numbers = [4, 5, -10, 23, 7, 34, -100]

// Ascending
console.log(numbers.sort((numberA, numberB) => numberA - numberB))

// Descending
console.log(numbers.sort((numberA, numberB) => numberB - numberA))

/*
  elementA - elementB
  negative value -> elementA < elementB
  0 -> elementA === elementB
  positive value -> elementA > elementB
*/

const studentList = [
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
]

console.log(
	studentList.sort((studentA, studentB) => {
		if (studentA.name < studentB.name) return -1

		if (studentA.name === studentB.name) {
			if (studentA.score < studentB.score) return 1

			return 0
		}

		return 1
	})
)
