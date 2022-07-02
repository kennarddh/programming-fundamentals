const { UpperCase, LowerCase } = require('../UppercaseLowercase')

describe('UpperCase LowerCase', () => {
	it.each([
		{
			input: 'Test',
			expected: 'TEST',
		},
		{
			input: 'uppercase',
			expected: 'UPPERCASE',
		},
		{
			input: 'UPPERCASE',
			expected: 'UPPERCASE',
		},
	])('Should uppercase $input to $expected', ({ input, expected }) => {
		expect.assertions(1)

		expect(UpperCase(input)).toBe(expected)
	})

	it.each([
		{
			input: 'Test',
			expected: 'test',
		},
		{
			input: 'UPPERCASE',
			expected: 'uppercase',
		},
		{
			input: 'uppercase',
			expected: 'uppercase',
		},
	])('Should lowercase $input to $expected', ({ input, expected }) => {
		expect.assertions(1)

		expect(LowerCase(input)).toBe(expected)
	})
})
