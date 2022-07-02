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
})
