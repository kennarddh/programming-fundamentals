module.exports = {
	testEnvironment: 'node',
	coveragePathIgnorePatterns: ['/node_modules/'],
	collectCoverageFrom: ['./src/**'],
	coverageThreshold: {
		global: {
			lines: 90,
		},
	},
}
