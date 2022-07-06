module.exports = {
	env: {
		node: true,
		'jest/globals': true,
	},
	extends: ['airbnb-base', 'plugin:prettier/recommended'],
	plugins: ['prettier', 'jest'],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'prettier/prettier': [
			'warn',
			{
				endOfLine: 'auto',
			},
		],
		'import/prefer-default-export': 'off',
		'no-underscore-dangle': [
			'error',
			{
				allow: ['_id'],
			},
		],
		'no-console': 'off',
		'consistent-return': 'off',
		'no-unused-vars': 'warn',
		'no-plusplus': 'off',
	},
}
