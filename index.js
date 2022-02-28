'use strict';

module.exports = {
	'rules': {
		'indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-unused-vars': [
			'error',
			{
				'vars': 'local',
				'argsIgnorePattern': '^_',
				'varsIgnorePattern': '^_',
			}
		],
		'max-len': [
			'error',
			{
				'code': 80
			}
		],
		'array-bracket-spacing': [
			'error',
			'always'
		],
		'object-curly-spacing': [
			'error',
			'always'
		],
		'no-extra-parens': [
			'error'
		],
		'no-template-curly-in-string': [
			'error'
		],
		'no-unreachable-loop': [
			'error'
		],
		'block-scoped-var': [
			'error'
		],
		'curly': [
			'error',
			'multi-or-nest',
			'consistent'
		],
		'no-else-return': [
			'error'
		],
		'no-empty-function': [
			'error'
		],
		'no-self-compare': [
			'error'
		],
		'no-useless-return': [
			'error'
		],
		'brace-style': [
			'error'
		],
		'strict': [
			'error',
			'global'
		]
	}
};
