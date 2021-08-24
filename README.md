# ESLint &amp; Prettier config for React

`@emergent/eslint-config`

> Shareable config for [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) in React projects.

## Overview

This configuration extends [airbnb](https://www.npmjs.com/package/eslint-config-airbnb) ESLint config and Prettier integration via the ESLint [plugin](https://github.com/prettier/eslint-plugin-prettier). A few rules are overriden to enable a less strict development experience.

## Setup

To install the package, run:

```shell
$ npm install @emergent/eslint-config --save-dev
```

This will install the config along with its peer dependencies:

- eslint
- eslint-config-airbnb
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-react
- eslint-plugin-react-hooks
- prettier

**NOTE:** if you are on an older version of `npm` (`<7.0.0`), you will need to install these manually:

```shell
$ npx install-peerdeps @emergent/eslint-config --save-dev
```

## Usage

Just add `@emergent/eslint-config` to your `.eslintrc` file:

```jsx
// .eslintrc
{
  "extends": ["@emergent/eslint-config"]
}
```

## Prettier

Prettier's default rules are enforced out of the box. Rules that conflict with ESLint are disabled via [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier).

You can override the default [Prettier options](https://prettier.io/docs/en/options.html) by specifying them under `prettier/prettier` ESLint config file. EX:

```jsx
// .eslintrc
{
  "extends": ["@emergent/eslint-config"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "printWidth": 110
      }
    ]
  }
}
```

Ensure these rules match the options specified in your `.prettierrc` file.

## Adding Scripts

Add the following lines to your `package.json` in the scripts sections. This will let you see your linting errors, and fix them automatically.

```jsx
"scripts": {
  // ..
  "lint": "eslint --ignore-path .gitignore .",
  "lint:fix": "eslint --ignore-path .gitignore --fix ."
  // ..
}
```

## Extensions

For the best development experience use this config in conjunction with a ESLint & Prettier plugin for your favorite editor. The ESLint plugin will highlite errors, and the prettier plugin will auto-format on save.

For VS Code use the following:

> dbaeumer.vscode-eslint

> esbenp.prettier-vscode

Eensure Prettier is your default formatter, and "Format On Save" is enabled
