const base = require("./rules/base.js");
const react = require("./rules/react.js");

module.exports = {
  extends: ["airbnb", "airbnb-typescript", "airbnb/hooks", "plugin:prettier/recommended"],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: { ...base, ...react },
  settings: {
    react: {
      version: "detect",
    },
  },
};
