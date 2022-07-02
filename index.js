const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

const getInput = question => {
	return new Promise(resolve => {
		readline.question(question, answer => {
			resolve(answer)
		})
	})
}

const main = async () => {
	const input = await getInput()

	console.log(input)
}

main()
