# eslint-config
![npm (scoped)](https://img.shields.io/npm/v/@matt-fidd/eslint-config)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for my projects.


## Installation

```
$ npm install -D eslint @matt-fidd/eslint-config
```

## Usage

Once the `@matt-fidd/eslint-config` package is installed, you can use it by adding `@matt-fidd` to the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
	...
	"extends": "@matt-fidd",
	...
}
```

### Using this config in conjunction with `eslint:recommended`

To work properly, this rule set is designed to be used alongside the `eslint:recommended` rule set. To do this, simply define them both inside the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
	...
	"extends": [
		"eslint:recommended",
		"@matt-fidd"
	],
	...
}
```
