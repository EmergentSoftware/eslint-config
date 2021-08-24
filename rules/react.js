/*
    Overrride rules for eslint-plugin-react 
    https://github.com/yannickcr/eslint-plugin-react (for all available rules) 
*/
module.exports = {
  "react/jsx-indent": ["error", 4],
  "react/jsx-indent-props": ["error", 4],
  "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  "react/jsx-one-expression-per-line": 0,
  "react/no-array-index-key": 0,
};
