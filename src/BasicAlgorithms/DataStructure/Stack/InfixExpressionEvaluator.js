// eslint-disable-next-line max-classes-per-file
const Stack = require('./Stack')

const operatorsObj = {
	'-': 1,
	'+': 1,
	'/': 2,
	'*': 2,
	'%': 2,
	'^': 3,
	root: 3,
}

const operators = Object.keys(operatorsObj)

class DivisionByZero extends Error {
	constructor() {
		super('Cannot Divide Number With Zero')

		this.name = 'DivisionByZero'
	}
}

class InvalidRootNumber extends Error {
	constructor() {
		super('Cannot Root Number With Other than 2 and 3')

		this.name = 'InvalidRootNumber'
	}
}

const Precedence = operator => operatorsObj[operator]

const ParseNumber = str => {
	if (str.trim().startsWith('minus>')) {
		return parseFloat(str.trim().slice(6), 10) * -1
	}

	return parseFloat(str.trim(), 10)
}

const Calculate = (num1, num2, operator) => {
	switch (operator) {
		case '*':
			return num1 * num2
		case '/':
			if (num2 === 0) throw new DivisionByZero()

			return num1 / num2
		case '+':
			return num1 + num2
		case '-':
			return num1 - num2
		case '^':
			return num1 ** num2
		case '%':
			return num1 % num2
		case 'root':
			if (num2 === 3) return Math.cbrt(num1)
			if (num2 === 2) return Math.sqrt(num1)

			throw new InvalidRootNumber()
		default:
			return 0
	}
}

const Process = (operatorStack, operandStack) => {
	const num1 = operandStack.pop()
	const num2 = operandStack.pop()
	const operator = operatorStack.pop()

	const result = Calculate(num2, num1, operator)

	operandStack.push(result)
}

const Factorial = num => {
	if (num === 0) return 1

	let result = 1
	let number = num

	if (number < 0) {
		while (number !== 0) {
			result *= number

			number += 1
		}
	} else {
		while (number !== 0) {
			result *= number

			number -= 1
		}
	}

	return result
}

const Evaluate = rawExpression => {
	const operandStack = new Stack()
	const operatorStack = new Stack()

	const expression = rawExpression.replace(
		/-\d+/g,
		x => `minus>${x.slice(1)}`
	)

	expression.split(' ').forEach(char => {
		if (!(char === '(' || char === ')')) {
			if (!operators.includes(char)) {
				if (char.endsWith('!')) {
					let result = ParseNumber(char.replace('!', ''))
					const factorialCount = char.replace(/[^!]/g, '').length

					for (let i = 0; i < factorialCount; i++) {
						result = Factorial(result)
					}

					operandStack.push(result)
				} else {
					operandStack.push(ParseNumber(char))
				}
			} else if (operatorStack.size === 0) {
				operatorStack.push(char)
			} else if (Precedence(char) >= Precedence(operatorStack.peek())) {
				operatorStack.push(char)
			} else {
				while (Precedence(operatorStack.peek()) > Precedence(char)) {
					Process(operatorStack, operandStack)
				}

				operatorStack.push(char)
			}
		}

		if (char === '(') {
			operatorStack.push(char)
		} else if (char === ')') {
			while (operatorStack.peek() !== '(') {
				Process(operatorStack, operandStack)
			}

			operatorStack.pop()
		}
	})

	while (operatorStack.size !== 0) {
		Process(operatorStack, operandStack)
	}

	return operandStack.pop()
}

// const result = Evaluate('2 * ( 5 * ( 3 + 6 ) ) / 15 - 2')
const result = Evaluate('-4 + -10 * 2 + 100')

console.log(result)
