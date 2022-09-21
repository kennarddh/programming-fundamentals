const InfixExpressionEvaluator = require('./InfixExpressionEvaluator')

describe('InfixExpressionEvaluator', () => {
	it.each([
		{ expression: '2 * ( 5 * ( 3 + 6 ) ) / 15 - 2', expected: 4 },
		{ expression: '10 - 20 + 10', expected: 0 },
		{ expression: '10 - 20 - -30', expected: 20 },
		{ expression: '10 * 20 + 80 * ( 10 * 8 root 3 )', expected: 1800 },
		{ expression: '10 + 20', expected: 30 },
		{ expression: '( 10 + 10 * 10 ) ^ 2', expected: 12100 },
		{ expression: '20 + 10 - 80 * 10', expected: -770 },
		{ expression: '20 * 10 + 10 / 20 ', expected: 200.5 },
		{ expression: '( 10 + 10 ) * 10', expected: 200 },
		{ expression: '10 - 20 + 10', expected: 0 },
		{ expression: '30 + ( 10 * 2 ) ^ 3', expected: 8030 },
		{ expression: '0.5 + 0.5', expected: 1 },
		{ expression: '0.5 * 3 + 10', expected: 11.5 },
		{
			expression:
				'30 ^ 2 * 10 / 20 + 10 * 20 * ( 10 - 20 * 3 ) + ( 10 ^ 4 + 10 ) + 10',
			expected: 470,
		},
		{ expression: '3 ^ 2 ^ 2', expected: 81 },
		{
			expression: '10 * ( 10 + ( 10 / 100 ) ) + ( 10 * ( 10 - 20 ) )',
			expected: 1,
		},
		{ expression: '-1 + -10 * 3 / -4', expected: 6.5 },
		{ expression: '10 % 3', expected: 1 },
		{ expression: '10 + 10 % 3', expected: 11 },
		{ expression: '10 + 10 ! * 10', expected: 36288010 },
		{ expression: '20 / 5 ! - 10', expected: -9.833333333333334 },
		{ expression: '3 ! !', expected: 720 },
		{ expression: '9 root 2', expected: 3 },
		{ expression: '100 root 2', expected: 10 },
		{ expression: '64 root 2', expected: 8 },
		{ expression: '8 root 3', expected: 2 },
		{ expression: '27 root 3', expected: 3 },
		{ expression: '64 root 3', expected: 4 },
		{ expression: '( 4 root 2 ) !', expected: 2 },
		{ expression: '( 8 root 3 ) !', expected: 2 },
		{ expression: '60 !', expected: 8.32098711274139e81 },
		{ expression: '3 ^ ( 3 ^ 2 )', expected: 19683 },
	])(
		'Should correct, Expression: $expression, Expected: $expected',
		({ expression, expected }) => {
			expect.assertions(1)

			const result = InfixExpressionEvaluator(expression)

			expect(result).toBe(expected)
		}
	)
})
