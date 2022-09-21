const factorial = n => {
	if (n <= 0) return 1

	return n * factorial(n - 1)
}

console.log(factorial(4))

const fibonacci = n => {
	if (n === 1) return 0
	if (n === 2) return 1

	return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(100))
