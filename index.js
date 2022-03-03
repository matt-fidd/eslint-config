'use strict';

module.exports = {
	'rules': {
		'array-bracket-spacing': [
			'error',
			'always'
		],
		'array-callback-return': [
			'error'
		],
		'array-element-newline': [
			'error',
			'consistent'
		],
		'arrow-spacing': [
			'error'
		],
		'block-scoped-var': [
			'error'
		],
		'brace-style': [
			'error'
		],
		'comma-spacing': [
			'error'
		],
		'curly': [
			'error',
			'multi-or-nest',
			'consistent'
		],
		'default-case-last': [
			'error'
		],
		'default-param-last': [
			'error'
		],
		'dot-notation': [
			'error'
		],
		'eol-last': [
			'error'
		],
		'eqeqeq': [
			'error',
			'smart'
		],
		'func-call-spacing': [
			'error'
		],
		'indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'key-spacing': [
			'error'
		],
		'keyword-spacing': [
			'error'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'lines-between-class-members': [
			'error'
		],
		'max-len': [
			'error',
			{
				'code': 80,
				'tabWidth': 8
			}
		],
		'multiline-comment-style': [
			'warn',
			'starred-block'
		],
		'no-array-constructor': [
			'error'
		],
		'no-await-in-loop': [
			'warn'
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
		'no-implicit-coercion': [
			'error'
		],
		'no-lonely-if': [
			'error'
		],
		'no-multi-spaces': [
			'error'
		],
		'no-multiple-empty-lines': [
			'error'
		],
		'no-promise-executor-return': [
			'error'
		],
		'no-return-assign': [
			'error'
		],
		'no-self-compare': [
			'error'
		],
		'no-template-curly-in-string': [
			'error'
		],
		'no-trailing-spaces': [
			'error'
		],
		'no-unneeded-ternary': [
			'error'
		],
		'no-unreachable-loop': [
			'error'
		],
		'no-unused-private-class-members': [
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
		'no-use-before-define': [
			'error'
		],
		'no-useless-constructor': [
			'error'
		],
		'no-useless-return': [
			'error'
		],
		'no-var': [
			'error'
		],
		'no-whitespace-before-property': [
			'error'
		],
		'nonblock-statement-body-position': [
			'error',
			'below'
		],
		'object-curly-spacing': [
			'error',
			'always'
		],
		'operator-linebreak': [
			'error',
			'after'
		],
		'padded-blocks': [
			'error',
			'never'
		],
		'prefer-const': [
			'error'
		],
		'quotes': [
			'error',
			'single'
		],
		'require-await': [
			'error'
		],
		'rest-spread-spacing': [
			'error'
		],
		'semi': [
			'error',
			'always'
		],
		'semi-spacing': [
			'error'
		],
		'space-before-function-paren': [
			'error',
			{
				'anonymous': 'always',
				'named': 'never',
				'asyncArrow': 'always'
			}
		],
		'strict': [
			'error',
			'global'
		],
		'switch-colon-spacing': [
			'error'
		],
		'template-curly-spacing': [
			'error'
		],
		'yoda': [
			'error'
		]
	}
};
