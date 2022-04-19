'use strict';

const path = require('path');
const { rules } = require(path.join(__dirname, '../index.js'));
const { ESLint } = require('eslint');

const eslintOptions = {
	baseConfig: {
		env: {
			es2021: true,
			node: true
		},
		extends: [
			'eslint:recommended',
			'plugin:jest/recommended'
		],
		parserOptions: {
			ecmaVersion: 'latest'
		},
		rules: rules
	}
};

const filesToLint = [ '.' ];

test('Rules object defined', () => {
	expect(rules).not.toBeUndefined();
});

test('Linter should be able to load rules', () => {
	expect(() => new ESLint(eslintOptions)).not.toThrow();
});

test('Linter should pass against repo files', async () => {
	const eslint = new ESLint(eslintOptions);
	const formatter = await eslint.loadFormatter('json');

	const lintResults = await eslint.lintFiles(filesToLint);
	const resultText = formatter.format(lintResults);
	const results = JSON.parse(resultText);

	for (const file of results) {
		expect(file.errorCount).toBe(0);
		expect(file.warningCount).toBe(0);
	}
});
