const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

const GetInput = question => {
	return new Promise(resolve => {
		readline.question(question, answer => {
			resolve(answer)
		})
	})
}

module.exports = GetInput
