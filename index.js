'use strict';

module.exports = {
	'rules': {
		'array-bracket-spacing': [
			'error',
			'always'
		],
		'block-scoped-var': [
			'error'
		],
		'brace-style': [
			'error'
		],
		'curly': [
			'error',
			'multi-or-nest',
			'consistent'
		],
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
		'max-len': [
			'error',
			{
				'code': 80
			}
		],
		'no-else-return': [
			'error'
		],
		'no-empty-function': [
			'error'
		],
		'no-extra-parens': [
			'error'
		],
		'no-self-compare': [
			'error'
		],
		'no-template-curly-in-string': [
			'error'
		],
		'no-unreachable-loop': [
			'error'
		],
		'no-unused-vars': [
			'error',
			{
				'vars': 'local',
				'argsIgnorePattern': '^_',
				'varsIgnorePattern': '^_'
			}
		],
		'no-useless-return': [
			'error'
		],
		'object-curly-spacing': [
			'error',
			'always'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'strict': [
			'error',
			'global'
		]
	}
};
